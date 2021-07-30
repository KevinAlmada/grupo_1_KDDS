/* db */


module.exports = {
    login:(req,res)=>{
        res.render('login',{
            title : "Login - KDDS"
        })
    },
    register:(req,res)=>{
        res.render('register',{
            title : "Register - KDDS"
        })
    }
}
