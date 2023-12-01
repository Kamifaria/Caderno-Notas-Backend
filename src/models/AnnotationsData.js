const mongoose =require('mongoose');

const AnnotationsDataShema = new mongoose.Schema({
    title:String,
    notes: String,
    priority: Boolean,
});

module.exports = mongoose.model('Annotations', AnnotationsDataShema);