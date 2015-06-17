/**
 * Created by Kavy on 6/12/2015.
 */
exports.index = function(req, res){
    res.render('default', {
        title: 'Home',
        classname: 'home',
        users: ['Ray', 'Kavy', 'Luqi']
    }); //assume that everything is in the root folder and look for default
}

exports.about = function(req, res){
    res.render('default', {
        title: 'About Us',
        classname: 'about'
    }); //assume that everything is in the root folder and look for default
}