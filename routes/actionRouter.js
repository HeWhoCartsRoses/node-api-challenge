const express = require("express");
const action = require("../data/helpers/actionModel");
const project = require("../data/helpers/projectModel");
const db = require("../data/dbConfig");
const { validateActionId, validateAction } = require("../middle/middle.js");
const router = express.Router();
router.post("/", validateAction, (req, res) => {
  console.log(req.body);
  action
    .insert(req.body)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Could not create action"
      });
    });
});
router.get("/", (req, res) => {
  action
    .get()
    .then(act => {
      res.status(201).json(act);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Could not get action"
      });
    });
});
router.get("/:id", validateActionId, (req, res) => {
  res.status(200).json(req.action);
});
router.delete("/:id", validateActionId, (req, res) => {
  action
    .remove(req.params.id)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Cannot delete action"
      });
    });
});
router.put("/:id", validateAction, (req, res) => {
  action
    .update(req.params.id, req.body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({
        message: "Cannot edit action"
      });
    });
});
module.exports = router;
