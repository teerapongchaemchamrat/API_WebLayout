'use strict';
const express = require('express');
const eventControll = require('../controllers/eventController_pointer');
const eventControll_resource = require('../controllers/eventController_resource');
const eventControll_Department = require('../controllers/eventController_Department');
const router = express.Router();
const multer = require('multer');
const cors = require('cors');
const config = require('../config');
const sql = require('mssql');

router.use(cors());

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "D:/Project Web/react/myreact/public/image");
    cb(null, "D:/Project Web/react/myreact/build/image");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({
  limits: {
    fileSize: 20 * 1024 * 1024
  },
  storage: fileStorageEngine
});

router.get('/pointer/all', eventControll.getAllEvents);
router.get('/pointer/location1', eventControll.getLoaction1);
router.get('/pointer/location2', eventControll.getLoaction2);
router.get('/pointer/location3', eventControll.getLoaction3);
router.get('/pointer/location4', eventControll.getLoaction4);
router.get('/pointer/location5', eventControll.getLoaction5);
router.get('/pointer/location6', eventControll.getLoaction6);
router.get('/pointer/:id', eventControll.getEvent);
router.post('/pointer/add', eventControll.addEvent);
router.put('/pointer/:id', eventControll.updatEvent);
router.put('/pointer/stat/:id', eventControll.updateStat);
router.delete('/pointer/:id', eventControll.deleteEvent);

router.get('/resource/all', eventControll_resource.getAllEvents);
router.get('/resource/:id', eventControll_resource.getEvent);
router.post('/resource/add', eventControll_resource.addEvent);
router.put('/resource/:id', eventControll_resource.updatEvent);
router.delete('/resource/:id', eventControll_resource.deleteEvent);

router.get('/department/all', eventControll_Department.getAllEvents);
router.get('/department/:id', eventControll_Department.getEvent);
router.put('/department/:id', eventControll_Department.updatEvent);
router.delete('/department/:id', eventControll_Department.deleteEvent);


router.post('/upload', upload.single('image'), async (req, res) => {
  try{
    console.log(req.file);

  const imagePath = `D:/Project Web/react/myreact/public/image/${req.file.originalname}`;
  const dept = req.body.dept;
  const pool = await sql.connect(config.sql);
  const result = await pool.request()
                  .input('dept', sql.NVarChar(30), dept)
                  .input('image_path', sql.NVarChar(100), imagePath)
                  .query('INSERT INTO Department (dept, image_path) VALUES (@dept, @image_path)');

  console.log(result);
  res.send("Single File upload success");
  } catch (error) {
    console.error(error);
    res.status(500).send('Error while uploading the file');
  }
});

const fileStorageEngineBG = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "D:/Project Web/react/myreact/public/image");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/svg+xml') {
    cb(null, true); // Accept the file
  } else {
    cb(new Error('Only SVG files are allowed!'), false); // Reject the file
  }
};

const uploadBG = multer({
  limits: {
    fileSize: 20 * 1024 * 1024
  },
  storage: fileStorageEngineBG,
  fileFilter: fileFilter
});

router.post('/upload/bg', uploadBG.single('image'), async (req, res) => {
  try{
    console.log(req.file);

  const imagePath = `D:/Project Web/react/myreact/public/image/${req.file.originalname}`;
  const dept = req.body.dept;
  const pool = await sql.connect(config.sql);
  const result = await pool.request()
                  .input('dept', sql.NVarChar(30), dept)
                  .input('image_path', sql.NVarChar(100), imagePath)
                  .query('UPDATE Department SET image_path=@image_path WHERE dept=@dept');

  console.log(result);
  res.send("Single File update success");
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
