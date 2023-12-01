const mongoose = require ( 'mongoose');

const dbConfig = 'mongodb+srv://kamilafaria:17950317Ma2@projeto.s4ukgpy.mongodb.net/?retryWrites=true&w=majority'

const connection = mongoose.connect(dbConfig, { 
    useNewUrlParser: true,
    useUnifiedTopoLogy: true
});

mongoose.connection.on('connected', function() {
    console.info("connection established successfully");
});

mongoose.connection.on('error', function(err) {
    console.error('connection to mongo failed ' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('mongo db connection closed');
})

module.exports = connection;