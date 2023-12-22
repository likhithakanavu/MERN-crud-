const express = require('express');
const router = express.Router();
const {Insert,View, Delete,SingleView,Update } =require('../controller/student')
router.post('/insert',Insert)

router.get('/view',View)


router.delete('/delete/:id',Delete)
router.put('/update/:id',Update)
router.get('/viewOne/:id',SingleView)
module.exports=router;