module.exports = function (req,res,next) {
    if (req.cookies.cookieKDDS) {
        req.session.user = req.cookies.cookieKDDS
        next()
    } else {
        next()
    }
}