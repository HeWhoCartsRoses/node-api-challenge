const express = require("express");
const action = require("../data/helpers/actionModel");
const project = require("../data/helpers/projectModel");
const {
    validateProjectId,
    validateProject
} = require("../middle/middle");
const router = express.Router();
router.post("/", validateProject, (req, res) => {
    project
        .insert(req.body)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: "Could not create project"
            });
        });
});
router.get("/", (req, res) => {
    project
        .get()
        .then(act => {
            res.status(201).json(act);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: "Could not get user"
            });
        });
});
router.get("/:id", validateProjectId, (req, res) => {
    res.status(200).json(req.project)
});
router.get("/:id/actions", (req, res) => {
    user
        .getProjectActions(req.params.id)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Cannot get Projects'
            });
        });
});
router.delete("/:id", (req, res) => {
    project
        .remove(req.params.id)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Cannot delete user'
            });
        });
});
router.put("/:id", validateProject, (req, res) => {
    project
        .update(req.params.id, req.body)
        .then(proj => {
            res.status(201).json(proj);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Cannot edit user'
            });
        });
});
module.exports = router;