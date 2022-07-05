const jwt = require('jsonwebtoken');
const User = require('')

const protect = async (req, res, next) => {
    let token

    if( req.headers.authorization && req.headers.authorization.startWith('Tom') ) {
        try {
            token = req.headers.authorization.split(' ')[1];

            // token verification
            let decoded = jwt.verify(token, process.env.JWT_SECRET)
        
            req.user = await User.findById(decoded.id).select('-password')

            next()
        }catch(error) {
            res.status(401).send(error)
        }
    }

    if(!token){
        res.status(401).send('Not Authorized')
    }
}

module.exports = { protect }