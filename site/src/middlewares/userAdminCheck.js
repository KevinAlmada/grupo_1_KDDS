module.exports = (req, res, next) => {
    if(req.session.rol && req.session.user.rol == "ADMIN"){
        next();
    } else {
        res.redirect('/admin')
    }
}