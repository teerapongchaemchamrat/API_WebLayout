'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getEvents = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('web_layout');
        const getlist = await pool.request().query(sqlQueries.get);
        return getlist.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(EmpID) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('web_layout');
        const getbyid = await pool.request()
                            .input('EmpID', sql.NVarChar(50), EmpID)
                            .query(sqlQueries.getById);
        return getbyid.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatEvent = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('web_layout');
        const insertEvent = await pool.request()
                            .input('EmpID', sql.NVarChar(50), data.EmpID)
                            .input('Name', sql.NVarChar(50), data.Name)
                            .input('Position', sql.NVarChar(50), data.Position)
                            .input('ComID', sql.NVarChar(50), data.ComID)
                            .input('Email', sql.NVarChar(50), data.Email)
                            .input('Status', sql.NVarChar(50), data.Status)
                            .query(sqlQueries.create);                            
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateEvent = async (EmpID, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('web_layout');
        const update = await pool.request()
                        .input('EmpID', sql.NVarChar(50), EmpID)
                        .input('Name', sql.NVarChar(50), data.Name)
                        .input('Position', sql.NVarChar(50), data.Position)
                        .input('ComID', sql.NVarChar(50), data.ComID)
                        .input('Email', sql.NVarChar(50), data.Email)
                        .input('Status', sql.NVarChar(50), data.Status)
                        .query(sqlQueries.update);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteEvent = async (EmpID) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('web_layout');
        const deleteEvent = await pool.request()
                            .input('EmpID', sql.NVarChar(50), EmpID)
                            .query(sqlQueries.delete);
        return deleteEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getEvents,
    getById,
    creatEvent,
    updateEvent,
    deleteEvent
}