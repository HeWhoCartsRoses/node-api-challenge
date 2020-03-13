const users = require('../users/userDb')
module.exports = {
    logger,
    validateId,
    validateUser,
    validatePost
}

function logger(req, res, next) {
    res.send(`${Date.now()}, ${req.method}, ${req.originalUrl}`);
    next();
}

function validateId(req, res, next) {
    users.getById(req.params.id).then(thing => {
        if (thing) {
            req.user = thing
            next();
        } else {
            return (
                res
                .status(400)
                .json({
                    message: "invalid user id"
                }));
        }
    })
}

function validateUser(req, res, next) {
    if (!req.body) {
        return (
            res
            .status(400)
            .json({
                message: "missing user data"
            }));
    };

    if (!req.body.name) {
        return (
            res
            .status(400)
            .json({
                message: "missing required text field"
            }));
    };
    if (req.body && req.body.name) return next()
}

function validatePost(req, res, next) {
    if (!req.body) {
        return (
            res
            .status(400)
            .json({
                message: "missing post data"
            }));
    };
    if (!req.body.text) {
        return (
            res
            .status(400)
            .json({
                message: "missing required text field"
            }));
    };
    if (req.body) {
        return next();
    }
}