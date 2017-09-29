var path = require('path');

exports.view = function (req, res)
{
    //res.render('kea_events_oldschool.html');
    res.sendFile(path.join('/kea_events_oldschool.html'));
}



//module.exports = function (app)
//{
//    app.get('/home', function (req, res)
//    {
//        res.send('kea_events_oldschool');
//    });
//}

