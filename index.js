import express from 'express';
import connectDB from './db/db.js';
import router from './routes/routes.js';

const app = express();

const PORT = process.env.PORT || 8001;

connectDB()


app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use('/url',router)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

