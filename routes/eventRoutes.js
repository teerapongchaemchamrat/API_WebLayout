'use strict';

const express = require('express');
const eventControll = require('../controllers/eventController');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const sql = require('mssql');
const config = require('../config.js');

const upload = multer({
    dest: __dirname + '/uploads/',
    rename: function (fieldname, filename) {
      return Date.now();
    },
    limits: {
        fileSize: 100000
    },
    fileFilter: function (req, file, cb) {
      if (file.mimetype.startsWith('image/')) {
        cb(null, true);
      } else {
        cb(new Error('Only image files are allowed.'));
      }
    }
  });
router.use(upload.any());

router.get('/emp', eventControll.getAllEvents);
router.get('/emp/:id', eventControll.getEvent);
router.post('/emp/add', eventControll.addEvent);
router.put('/emp/:id', eventControll.updatEvent);
router.delete('/emp/:id', eventControll.deleteEvent);
router.post('/img/upload', saveEvent);
router.put('/img/upload', updateEvent);

async function saveEvent(req, res) {
    try {
      const { Imagename, PosX, PosY } = req.body;
      const { path } = req.files[0]; // Assuming only one file is uploaded
      const imageBuffer = fs.readFileSync(path);
  
      const pool = await sql.connect(config.sql);
      const result = await pool.request()
        .input('Imagename', sql.NVarChar(50), Imagename)
        .input('Image', sql.VarBinary(sql.MAX), imageBuffer)
        .input('PosX', sql.Int, PosX)
        .input('PosY', sql.Int, PosY)
        .query('INSERT INTO ImagePos (Imagename, Image, PosX, PosY) VALUES (@Imagename, @Image, @PosX, @PosY)');
      await pool.close();
  
      fs.unlinkSync(path); // Delete the temporary file after saving it to the database
  
      res.status(200).json({ message: 'Event saved', result});
    } catch (error) {
      console.error('Error saving event to SQL Server:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
}

async function updateEvent(req, res) {
    try {
      const { Imagename, PosX, PosY, Date} = req.body;
      const { path } = req.files[0]; // Assuming only one file is uploaded
      const imageBuffer = fs.readFileSync(path);
  
      const pool = await sql.connect(config.sql);
      const result = await pool.request()
        .input('Imagename', sql.NVarChar(50), Imagename)
        .input('Image', sql.VarBinary(sql.MAX), imageBuffer)
        .input('PosX', sql.Int, PosX)
        .input('PosY', sql.Int, PosY)
        .input('Date', sql.DateTime, Date)
        .query('UPDATE [dbo].[ImagePos] SET [Imagename]=@Imagename, [Image]=@Image, [PosX]=@PosX, [PosY]=@PosY, [Date]= GETDATE() WHERE [Imagename]=@Imagename SELECT [Imagename],[Image],[PosX],[PosY],[Date] From [dbo].[ImagePos] WHERE [Imagename]=@Imagename');
      await pool.close();
  
      fs.unlinkSync(path); // Delete the temporary file after saving it to the database
  
      res.status(200).json({ message: 'Event updated', result});
    } catch (error) {
      console.error('Error updating event to SQL Server:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }




module.exports = {
    routes: router
}
