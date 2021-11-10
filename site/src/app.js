let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let methodOverride = require('method-override')
let session = require('express-session')
let cookieCheck = require('./middlewares/userCookieCheck')
/* ENROUTADORES */
let homeRouter = require('./routes/homeRouter');
let usersRouter = require('./routes/usersRouter');
let productRouter = require('./routes/productRouter');
let adminRouter = require('./routes/adminRouter');
let apiRouter = require('./routes/apiRouter');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'))
app.use(session({ 
  secret: "KDDS TOP SECRET", 
  resave: true, 
  saveUninitialized: true /* ,
  cookie: { maxAge: 60000*5 } */
}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
/* RUTAS PRINCIPALES */
app.use('/',cookieCheck, homeRouter);
app.use('/users',cookieCheck, usersRouter);
app.use('/products',cookieCheck, productRouter)
app.use('/admin',cookieCheck, adminRouter)
app.use('/api',cookieCheck, apiRouter )

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
/* app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{title:"¡Ups! Algo salió mal"});
}); */

module.exports = app;
