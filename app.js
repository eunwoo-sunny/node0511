const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

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

// middleware & static files
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))

// log
app.use(morgan('dev'));
 
// routes
app.get('/', (req,res) => {
    res.redirect('/blogs')
})

app.get('/about', (req,res) => {
    res.render('about', { title : 'ABOUT US'})
     
 })

// blog routes
app.use('/blogs', blogRoutes)


// 404 page - 아래에 배치한다.
app.use( (req,res) => { 
    res.status(404).render('404')
});