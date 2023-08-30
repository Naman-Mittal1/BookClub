const express = require("express");
const http = require('http');
const socketio = require('socket.io');
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')



const cors = require('cors');

const authRouter = require('./routes/authRoute');
const bookRoutes = require('./routes/bookRoute'); 
const reviewRoutes = require('./routes/reviewRoute'); 
const threadRoutes = require('./routes/threadRoute'); 
const chatRoutes = require('./routes/chatRoutes');


const app = express();


app.use(express.json());
app.use(cookieParser())

app.use(cors({
  origin: '*',
  credentials: true,
}));

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {

  console.log('User connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('chat message', (msg) => {
    // Emit to connected socket
    io.to(msg.recipient).emit('chat message', msg);
  });

});


mongoose.connect("mongodb+srv://bookclub:bookclub@cluster0.lb105tt.mongodb.net/").then(()=>{
    console.log("MongoDB Connected")
}).catch((err)=>{
    console.log(err)
})

app.use('/api/auth', cors(), authRouter);
app.use('/api/books', bookRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/threads', threadRoutes);
app.use('/api/chat', chatRoutes);   


app.listen(5000, ()=>{
    console.log("Server Started")
})