const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// Middlewares============
app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

const verifyToken = (req, res, next) => {
  const token = req?.cookies?.token;
  // console.log('token in the middlewate: ', token);
  if (!token) {
    return res.status(401).send({ message: 'Unauthorized access' });
  }
  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized access.' });
    }
    req.user = decoded;
    next();
  });
};

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.htex290.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();
    const carCareCollection = client
      .db('Snowy_CareCare')
      .collection('services');
    const carCareOrderCollection = client
      .db('Snowy_CareCare')
      .collection('order');

    // Auth Related api
    app.post('/jwt', logger, async (req, res) => {
      const user = req.body;
      console.log('user for token', user);
      const token = jwt.sign(user, process.env.TOKEN_SECRET, {
        expiresIn: '1h',
      });
      res
        .cookie('token', token, {
          httpOnly: true,
          secure: true,
          sameSite: 'none',
        })
        .send({ success: true });
    });
    app.post('/logout', logger, async (req, res) => {
      const user = req.body;
      console.log('Logging Out user: ', user);
      res.clearCookie('token', { maxAge: 0 }).send({ success: true });
    });

    // Load all services related data read
    app.get('/car-services', logger, async (req, res) => {
      const result = await carCareCollection.find().toArray();
      res.send(result);
    });
    // Load SIngle data read for server
    app.get('/car-services/:id', logger, async (req, res) => {
      const id = req.params.id;
      // console.log(id);
      const query = { _id: new ObjectId(id) };
      const result = await carCareCollection.findOne(query);
      res.send(result);
    });

    // Post check out data

    app.post('/order', logger, async (req, res) => {
      const data = req.body;
      console.log(data);
      const result = await carCareOrderCollection.insertOne(data);
      res.send(result);
    });

    // Load SIngle data read for Checkout
    app.get('/my-order', logger, verifyToken, async (req, res) => {
      console.log('Token owner info: ', req.user);
      if (req.user.email !== req.query.email) {
        return res.status(403).send({ message: 'Forbidden access' });
      }

      let query = {};
      if (req.query?.email) {
        query = { email: req.query.email };
      }
      // console.log('Token Colllll', req.cookies.cookie);

      const result = await carCareOrderCollection.find(query).toArray();
      res.send(result);
    });

    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
