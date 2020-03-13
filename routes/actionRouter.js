const express = require('express');
const action = require('../data/seeds/02-actions')
const posts = require('../posts/postDb')
const {
    validateId,
    validateUser
} = require('../middle/middle.js')
const router = express.Router();
router.post('/', validateUser, (req, res) => {});
router.post('/:id/posts', validateId, (req, res) => {});
router.get('/', (req, res) => {
    action
        .get()
        .then(act => {
            res.status(201).json(act);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Could not get user'
            });
        });
});
router.get('/:id', (req, res) => {});
router.get('/:id/posts', (req, res) => {});
router.delete('/:id', (req, res) => {});
router.put('/:id', (req, res) => {});
module.exports = router;