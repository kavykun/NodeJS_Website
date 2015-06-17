/**
 * Created by Kavy on 6/11/2015.
 */
var express = require('express'); //require the express module
var app = express(); //create an express app by initializing it
var routes = require('./routes');

//allows you to set a variable for Express, and then the view engine which is ejs
app.set('view engine' , 'ejs');
//app.set('views', __dirname + '/views'); //tgis is gobal variable that displays the name of the current fodler where the app.js file is at
//don't need this if you want to keep everything in views

app.locals.pagetitle ="Awesome Website";

app.get('/', routes.index);
app.get('/about', routes.about);

app.get('*', function(req, res){
    res.send('Bad Route');
});

//create a listening port and execute function
var server = app.listen(3000, function(){
   console.log('Listen on port 3000');
});

