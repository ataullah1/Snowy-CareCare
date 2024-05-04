const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware============
app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

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
    app.post('/jwt', async (req, res) => {
      const user = req.body;
      console.log(user);
      const token = jwt.sign(user, process.env.TOKEN_SECRET, {
        expiresIn: '1h',
      });
      res
        .cookie('cookie', token, {
          httpOnly: true,
          secure: false,
        })
        .send({ success: true });
    });

    // Load all data  read
    app.get('/car-services', async (req, res) => {
      const result = await carCareCollection.find().toArray();
      res.send(result);
    });
    // Load SIngle data read for server
    app.get('/car-services/:id', async (req, res) => {
      const id = req.params.id;
      // console.log(id);
      const query = { _id: new ObjectId(id) };
      const result = await carCareCollection.findOne(query);
      res.send(result);
    });

    // Post check out data

    app.post('/order', async (req, res) => {
      const data = req.body;
      console.log(data);
      const result = await carCareOrderCollection.insertOne(data);
      res.send(result);
    });

    // Load SIngle data read for Checkout
    app.get('/my-order', async (req, res) => {
      let query = {};
      if (req.query?.email) {
        query = { email: req.query.email };
      }
      console.log('Token Colllll', req.cookies.cookie);

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
