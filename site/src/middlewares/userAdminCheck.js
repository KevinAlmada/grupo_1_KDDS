module.exports = (req, res, next) => {
    if(req.session && req.session.user.rol == "ADMIN"){
        next();
    } else {
        res.redirect('/admin/login')
    }
}