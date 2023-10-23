'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getEvents = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('pointer');
        const getlist = await pool.request().query(sqlQueries.get);
        return getlist.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getlocation1 = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('pointer');
        const getlist = await pool.request().query(sqlQueries.getlocation1);
        return getlist.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getlocation2 = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('pointer');
        const getlist = await pool.request().query(sqlQueries.getlocation2);
        return getlist.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getlocation3 = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('pointer');
        const getlist = await pool.request().query(sqlQueries.getlocation3);
        return getlist.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getlocation4 = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('pointer');
        const getlist = await pool.request().query(sqlQueries.getlocation4);
        return getlist.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getlocation5 = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('pointer');
        const getlist = await pool.request().query(sqlQueries.getlocation5);
        return getlist.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getlocation6 = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('pointer');
        const getlist = await pool.request().query(sqlQueries.getlocation6);
        return getlist.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(Uf_asset_RESID) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('pointer');
        const getbyid = await pool.request()
                            .input('Uf_asset_RESID', sql.NVarChar(30), Uf_asset_RESID)
                            .query(sqlQueries.getById);
        return getbyid.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatEvent = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('pointer');
        const insertEvent = await pool.request()
                            .input('x', sql.Int, data.x)
                            .input('y', sql.Int, data.y)
                            .input('diameter', sql.Int, data.diameter)
                            .input('Uf_asset_RESID', sql.NVarChar(30), data.Uf_asset_RESID)
                            .input('Uf_asset_department', sql.NVarChar(30), data.Uf_asset_department)
                            .input('stat', sql.Int, data.stat)
                            .query(sqlQueries.create);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateEvent = async (no, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('pointer');
        const updateEvent = await pool.request()
                        .input('no', sql.Int, no)
                        .input('Uf_asset_RESID', sql.NVarChar(30), data.Uf_asset_RESID)
                        .input('Uf_asset_department', sql.NVarChar(30), data.Uf_asset_department)
                        .query(sqlQueries.update);
        return updateEvent.recordset;
        //console.log(data);
    } catch (error) {
        return error.message;
    }
}

const updateStat = async (Uf_asset_RESID, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('pointer');
        const updateStat = await pool.request()
                        .input('Uf_asset_RESID', sql.NVarChar(30), Uf_asset_RESID)
                        .input('stat', sql.Int, data.stat)
                        .query(sqlQueries.update_stat);
        return updateStat.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteEvent = async (no) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('pointer');
        const deleteEvent = await pool.request()
                            .input('no', sql.Int, no)
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
    updateStat,
    deleteEvent,
    getlocation1,
    getlocation2,
    getlocation3,
    getlocation4,
    getlocation5,
    getlocation6
}