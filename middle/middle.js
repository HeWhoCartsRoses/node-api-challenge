const projects = require('../data/helpers/projectModel')
const actions = require('../data/helpers/actionModel')
module.exports = {
    logger,
    validateProjectId,
    validateActionId,
    validateAction,
    validateProject
};

function logger(req, res, next) {
    res.send(`${Date.now()}, ${req.method}, ${req.originalUrl}`);
    next();
}

function validateProjectId(req, res, next) {
    projects.getById(req.params.id).then(thing => {
        if (thing) {
            req.project = thing;
            next();
        } else {
            return res.status(400).json({
                message: "invalid id"
            });
        }
    });
}

function validateActionId(req, res, next) {
    actions.getById(req.params.id).then(thing => {
        if (thing) {
            req.action = thing;
            next();
        } else {
            return res.status(400).json({
                message: "invalid user id"
            });
        }
    });
}

function validateAction(req, res, next) {
    if (!req.body) {
        return res.status(400).json({
            message: "missing all data"
        });
    }

    if (!req.body.project_id) {
        return res.status(400).json({
            message: "missing required project id"
        });
    }
    if (!project.getById(req.body.project_id)) {
        return res.status(400).json({
            message: "please enter a valid project_id"
        });
    }
    if (!req.body.description) {
        return res.status(400).json({
            message: "please enter a description"
        });
    }
    if (req.body.description.length > 128) {
        return res.status(400).json({
            message: "only 128 characters please"
        });
    }
    if (!req.body.notes) {
        return res.status(400).json({
            message: "please enter a couple of notes"
        });
    }
    if (req.body) return next();
}

function validateProject(req, res, next) {
    if (!req.body) {
        return res.status(400).json({
            message: "missing post data"
        });
    }
    if (!req.body.name) {
        return res.status(400).json({
            message: "missing required name field"
        });
    }
    if (!req.body.description) {
        return res.status(400).json({
            message: "missing required description field"
        });
    }
    if (req.body) {
        return next();
    }
}