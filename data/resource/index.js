'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getEvents = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('resource');
        const getlist = await pool.request().query(sqlQueries.get);
        return getlist.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(resource_id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('resource');
        const getbyid = await pool.request()
                            .input('resource_id', sql.NVarChar(30), resource_id)
                            .query(sqlQueries.getById);
        return getbyid.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatEvent = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('resource');
        const insertEvent = await pool.request()
                            .input('resource_id', sql.NVarChar(30), data.resource_id)
                            .input('model', sql.NVarChar(30), data.model)
                            .input('location', sql.NVarChar(30), data.location)
                            .query(sqlQueries.create);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateEvent = async (resource_id, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('resource');
        const update = await pool.request()
                        .input('resource_id', sql.NVarChar(30), resource_id)
                        .input('resource_id_update', sql.NVarChar(30), data.resource_id_update)
                        .input('model', sql.NVarChar(30), data.model)
                        .input('location', sql.NVarChar(30), data.location)
                        .query(sqlQueries.update);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteEvent = async (resource_id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('resource');
        const deleteEvent = await pool.request()
                            .input('resource_id', sql.NVarChar(30), resource_id)
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