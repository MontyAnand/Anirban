require('dotenv').config();
const process = require('node:process');
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./utils/database");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require("./routes/taskRoutes");
const teamRoutes = require('./routes/teamRoutes');
const supervisorRoutes = require('./routes/supervisorRoutes');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

connectDB();

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', taskRoutes);
app.use('/api', teamRoutes);
app.use('/api', supervisorRoutes);

app.get('/',(req,res)=>{
  res.send("Made by Anirban Debnath.");
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); 
});