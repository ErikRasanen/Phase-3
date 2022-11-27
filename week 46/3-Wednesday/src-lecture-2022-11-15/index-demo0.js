const mongoose = require('mongoose')


const url =  'mongodb://localhost:27017/myRandomDB'; 

mongoose.connect(url)

//Monitors for a successful connection through Mongoose
mongoose.connection.on('connected', () => {            
  console.log(`Mongoose connected to ${url}`);       
});


//Checks for a disconnection event                                       
mongoose.connection.on('disconnected', () => {         
  console.log('Mongoose disconnected');                
});

// you’ll notice that you don’t get any disconnection messages, because the Mongoose connection doesn’t automatically close when the application stops or restarts. You need to listen for changes in the Node process to deal with this situation.
mongoose.connection.close()