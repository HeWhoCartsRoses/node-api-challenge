const express = require("express");
const action = require("../data/helpers/actionModel");
const project = require("../data/helpers/projectModel");
const db = require("../data/dbConfig");
const {
    validateActionId,
    validateAction
} = require("../middle/middle.js");
const router = express.Router();
router.post("/", validateAction, (req, res) => {});
router.post("/:id/posts", validateActionId, (req, res) => {});
router.get("/", (req, res) => {
    action
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
router.get("/:id", (req, res) => {});
router.get("/:id/posts", (req, res) => {});
router.delete("/:id", (req, res) => {});
router.put("/:id", (req, res) => {});
module.exports = router;