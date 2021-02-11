const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get("/", indexController.home);
router.post("/create", indexController.create);
router.get("/edit/:id", indexController.edit);

router.put("/edit/:id", indexController.save);
router.delete("/delete/:id", indexController.delete);
module.exports = router;