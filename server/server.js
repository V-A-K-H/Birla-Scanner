const express = require('express')
const connectDB = require('./config/db')
// const morgan = require('morgan') 
// morgan is used for logger.
// server and socket both are connected through the port number 5000 now 
const cors = require('cors')
const app = express()
const student = require('./models/student');
const { createServer } = require("http");
const { Server } = require("socket.io");
try {
  const changeStream=student.watch();
  changeStream.on("change", (change) => {
    console.log(change)
    io.emit("database-change", change);
  });
}
catch (e) {
  console.e(e)
}
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*"
  }
});
io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser")


app.use(bodyParser.urlencoded({ extended: true }));
// cross origin refernce is used to authroize a url to give requests to the backend.
const corsOpt = {
  // origin: ["https://qr-birlagate.onrender.com","https://192.168.1.253:3000"],
  origin: "*",
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'x-auth-token'],
  exposedHeaders: ['Content-Type', 'x-auth-token']
};
app.use(cors(corsOpt));

//connect database
connectDB();
// converts into json to assist 
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World !')
})
app.use('/api/SignUp', require('./routes/api/signup'));
app.use('/api/SignIn', require('./routes/api/signin'));
app.use('/api/AdminSignIn', require('./routes/api/adminsignin'))
app.use('/api/StudentInfo', require('./routes/api/studentinfo'))

httpServer.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app