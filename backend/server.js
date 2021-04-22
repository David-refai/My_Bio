
import express from 'express';
import cors from 'cors';
import data from './data';
import mongoose from 'mongoose'
import config from './config';

import userRouter from './routers/userRouter';
import bodyParser from 'body-parser';
import orderRouter from './routers/orderRouter';



mongoose.connect(config.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(() => {
    console.log('Connented to mongoDB')

  })
  
  .catch((error) => {
  console.log(error.reason);
})

const app = express();


app.use(cors());

app.use(bodyParser.json())  
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter)
app.get('/api/movies', (req, res) => {
  res.send(data.movies)
});

app.get('/api/movies/:id', (req, res) => {
  const movie = res.send(data.movies.find(x => x._id === req.params.id));
  if (movie) {
    res.send(movie)
  } else {
    res.status(404).send({ message: 'movie Not Found'})
  }
})
app.use((err, req, res, next) => {
  const status = err.name && err.name === 'ValidationError' ? 400 : 500;
  res.status(status).send({ message: err.message });
});
app.listen(config.PORT, () => {
  console.log('serve at http://localhost:5000');
});