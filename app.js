'use strict';
// Get Express Dependecy
const express = require('express');
const app = express();

// Set render engine
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'ejs');

// Sets the static files folder with relative directory
app.use(express.static(__dirname + '/public'));

var options =
    {
        root: __dirname + '/public/'
    }

// Includes middleware
var home = require('./home');


//virtual
//app.use('/static', express.static('public'));

//app.get('/home', home.view);
app.get('/', function (req, res)
{
    res.sendFile('keaevents.html', options);
});

app.get('/about', function (req, res)
{
    res.sendFile('about.html', options);
});

app.get('/contact', function (req, res)
{
    res.sendFile('contact.html', options);
});

app.get('/activities', function (req, res)
{
    res.sendFile('activities.html', options);
});

app.get('/msg', function (req, res)
{
    res.sendfile('msg/msg.html', options);
});


app.listen(process.env.PORT || 5000, function ()
{
    //console.log('App listen at port 4200');
});