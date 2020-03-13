const express = require("express");
const action = require("../data/helpers/actionModel");
const project = require("../data/helpers/projectModel");
const {
    validateProjectId,
    validatePost
} = require("../middle/middle");
const router = express.Router();
router.post("/", validatePost, (req, res) => {
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
router.post("/:id", validateProjectId, (req, res) => {
    const newProject = {
        user_id: req.params.id,
        name: req.body.name,
        description: req.body.description,
        completed: req.body.completed
    };
    project
        .insert(newProject)
        .then(change => {
            res.status(201).json({
                change
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Could not update '
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
    res.status(200).json(req.user)
});
router.get("/:id/posts", (req, res) => {});
router.delete("/:id", (req, res) => {});
router.put("/:id", (req, res) => {});
module.exports = router;