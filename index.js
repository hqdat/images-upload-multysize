import express from 'express';
import exphbs from 'express-handlebars';

const app = express();

app.engine('.hbs', exphbs({
    layoutsDir: __dirname +'/views/_layouts',
    defaultLayout: 'main',
    partialsDir: __dirname +'/views/_partials',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000);