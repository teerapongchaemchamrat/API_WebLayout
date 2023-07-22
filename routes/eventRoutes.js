'use strict';
const express = require('express');
const eventControll = require('../controllers/eventController');
const router = express.Router();
const multer = require('multer');
const cors = require('cors');
const config = require('../config');
const sql = require('mssql');

router.use(cors());

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "D:/Project Web/react/myreact/public/image");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({
  limits: {
    fileSize: 200000
  },
  storage: fileStorageEngine
});

router.get('/emp', eventControll.getAllEvents);
router.get('/emp/:id', eventControll.getEvent);
router.post('/emp/add', eventControll.addEvent);
router.put('/emp/:id', eventControll.updatEvent);
router.delete('/emp/:id', eventControll.deleteEvent);
router.get('/img', eventControll.getImage);

router.post('/upload', upload.single('image'), async (req, res) => {
  try{
    console.log(req.file);

  const imagePath = `D:/Project Web/react/myreact/public/image/${req.file.originalname}`;
  const pool = await sql.connect(config.sql);
  const result = await pool.request()
                  .input('ImageName', sql.NVarChar, req.file.originalname)
                  .input('Path', sql.NVarChar, imagePath)
                  .query('INSERT INTO ImagePath (ImageName, Path) VALUES (@ImageName, @Path)');

  console.log(result);
  res.send("Single File upload success");
  } catch (error) {
    console.error(error);
    res.status(500).send('Error while uploading the file');
  }
});

// router.post('/multiple', upload.array("images", 3), (req, res) => {
//   console.log(req.files);
//   res.send("Multiple Files upload Success");
// });

module.exports = {
    routes: router
}
