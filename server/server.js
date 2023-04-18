const express = require('express')
const connectDB=require('./config/db')
// const morgan = require('morgan') 
// morgan is used for logger.
const cors=require('cors')
const app = express()
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
// cross origin refernce is used to authroize a url to give requests to the backend.
const corsOpt = {
  origin: "*",
  credentials: true,
  methods: ['GET','POST','PUT','DELETE'],
  allowedHeaders: ['Content-Type', 'x-auth-token'],
  exposedHeaders: ['Content-Type', 'x-auth-token']
};
app.use(cors(corsOpt));

//connect database
connectDB();
// converts into json to assist 
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/SignUp',require('./routes/api/signup'));
app.use('/api/SignIn',require('./routes/api/signin'));
app.use('/api/StudentInfo',require('./routes/api/studentinfo'))
app.listen(PORT,() => console.log(`Server started on port ${PORT}`));

module.exports=app