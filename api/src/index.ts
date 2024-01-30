import express from 'express';
import router from './routes/task.routes';
import mongoose from 'mongoose';
import config from './config'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors({ origin: config.CLIENT_URL}))

mongoose.connect(config.MONGODB_URI)
  .then(() => console.log('connected to database') )
  .catch((error) => console.log(error))

app.use('/api/board', router)

app.listen(3000, () => {
    console.log('http://localhost:3000');
  }
)