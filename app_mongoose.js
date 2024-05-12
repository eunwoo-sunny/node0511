const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog')

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://test-ejey:test1234@cluster-node1.ghiglwk.mongodb.net/nodeapp-1?retryWrites=true&w=majority&appName=cluster-node1';
// mongoose.connect(dbURI, { useNewUrlParser : true, useUnifiedTopology : true})
mongoose.connect(dbURI)
.then( (result) => {
    app.listen(3000, () => console.log('3000 server is running'))

})
.catch( err => console.log(err))
// register view engine
app.set('view engine', 'ejs');
// app.set('views', './views')

// listen for requires


// middleware & static files
app.use(express.static('public'))

// log
app.use(morgan('dev'));
// app.use(morgan('tiny'))

// app.use( (req,res, next) => {
//     console.log('new request made :');
//     console.log('host : ', req.hostname);
//     console.log('path : ', req.path);
//     console.log('method : ', req.method);
//     next();
// })       

app.get('/add-blog', (req,res) => {
    const blog = new Blog({
        title  : 'new Blog2',
        snippet : 'second post about my new blog',
        body : 'more about my new blog'
    });

    blog.save()
    .then( (result) => {
        res.send(result);
    })
    .catch( err => console.log(err))
})

app.get('/all-blogs', (req,res) => {
 
    Blog.find()
    .then( (result) => {
        res.send(result)
    })
    .catch( err => console.log(err))
})

app.get('/single-blog', (req,res) => {
    Blog.findById('66400b925f232c324a81cebe')
    .then( result => {
        res.send(result)
    })
    .catch( err => console.log(err))
})

app.get('/', (req,res) => {
    const blogs = [
        {title : 'Yoshi finds eggs', snippet : 'Lorem ipsum dolor sit amet consectetur'},
        {title : 'Mario finds stars', snippet : 'Lorem ipsum dolor sit amet consectetur'},
        {title : 'How to defeat browser', snippet : 'Lorem ipsum dolor sit amet consectetur'},
    ]
    res.render('index', { title : 'MAIN HOME', blogs})
})

 


app.get('/about', (req,res) => {
   res.render('about', { title : 'ABOUT US'})
    
})

app.get('/blogs/create', (req,res) => {
    res.render('create', {title : 'CREATE POST'})
}); 
  

// 404 page - 아래에 배치한다.
app.use( (req,res) => { 
    res.status(404).render('404')
});