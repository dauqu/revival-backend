const mongoose = require('mongoose')
mongoose.set("strictQuery", true);

// connect to mongodb
mongoose.connect("mongodb+srv://revival:7388139606@cluster0.q9kdypb.mongodb.net/?retryWrites=true&w=majority", (err, data) => {
    if(err){
        console.log("Error connecting mongodb");
    }else{
        console.log("Connected to mongodb");
    }
});

