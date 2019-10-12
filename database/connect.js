const mongoose = require('mongoose');
mongoose.connect("mongodb://172.20.0.2:27017/lab4crud");
module.exports=mongoose;