const express = require('express');
const user = require('./userDb')
const posts = require('../posts/postDb')
const {
    validateId,
    validateUser
} = require('../middle/middle.js')
const router = express.Router();
router.post('/', validateUser, (req, res) => {});
router.post('/:id/posts', validateId, (req, res) => {});
router.get('/', (req, res) => {});
router.get('/:id', (req, res) => {
    res.status(200).json(req.user)
});
router.get('/:id/posts', (req, res) => {});
router.delete('/:id', (req, res) => {});
router.put('/:id', (req, res) => {});
module.exports = router;