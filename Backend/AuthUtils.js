const jwt = require('jsonwebtoken')

module.exports.checkAuthorization = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.log("ERROR",err)
            console.log("USER", user)
            console.log("env", process.env.ACCESS_TOKEN_SECRET)
            return res.sendStatus(403)
        }
        req.user = user
        next()
    })
}

module.exports.checkAdminAuthorization = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        if(user.userrole != 'ADMIN') return res.sendStatus(401)
        next()
    })
}
