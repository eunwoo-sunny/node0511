const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
// app.set('views', './views')

// listen for requires
app.listen(3000, () => console.log('3000 server is running'))

app.get('/', (req,res) => {
    // res.send('<p>Home page</p>')
    res.sendFile('./views/index.html', { root : __dirname})
})

app.get('/about', (req,res) => {
    // res.send('<p>About page</p>')
    res.sendFile(__dirname + '/views/about.html')
    
})

app.get('/blogs/create', (req,res) => {
    res.render('create')
});

// redirects
app.get('/about-me', (req,res) => {
    res.redirect('/about')
})

// 404 page - 아래에 배치한다.
app.use( (req,res) => {
    res.status(404).sendFile(__dirname + '/views/404.html')
});