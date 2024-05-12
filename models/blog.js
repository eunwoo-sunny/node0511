const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title : {
        type : String,
        required : true
    },

    snippet : {
        type : String,
        reqruied : true
    },
    body : {
        type : String,
        reqruied : true
    }
}, { timestamps : true})

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;