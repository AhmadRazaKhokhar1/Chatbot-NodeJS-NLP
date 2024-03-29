const express =  require('express');
const cors = require('cors');
const chatBotRouter = require('./routes/chatBotRoute.js');
const port = 3001;

const app = express();
app.use(express.json());
app.use(cors());
//using the route
app.use('/api/v1', chatBotRouter);

//listening to port 
app.listen(port, ()=>{
    console.log(`The app is live at : ${port}`)
})