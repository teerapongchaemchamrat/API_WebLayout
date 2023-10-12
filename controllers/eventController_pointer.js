'use strict';

const eventData = require('../data/pointer');

const getAllEvents = async (req, res, next) => {
    try {
        const eventlist = await eventData.getEvents();
        res.send(eventlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getLoaction1 = async (req, res, next) => {
    try {
        const eventlist = await eventData.getlocation1();
        res.send(eventlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getLoaction2 = async (req, res, next) => {
    try {
        const eventlist = await eventData.getlocation2();
        res.send(eventlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getLoaction3 = async (req, res, next) => {
    try {
        const eventlist = await eventData.getlocation3();
        res.send(eventlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getLoaction4 = async (req, res, next) => {
    try {
        const eventlist = await eventData.getlocation4();
        res.send(eventlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getLoaction5 = async (req, res, next) => {
    try {
        const eventlist = await eventData.getlocation5();
        res.send(eventlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getLoaction6 = async (req, res, next) => {
    try {
        const eventlist = await eventData.getlocation6();
        res.send(eventlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getEvent = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await eventData.getById(eventId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addEvent = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await eventData.creatEvent(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatEvent = async (req, res, next) => {
    try {
        const eventId =  req.params.id;
        const data = req.body;
        const updated = await eventData.updateEvent(eventId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateStat = async (req, res, next) => {
    try {
        const eventStat = req.params.id;
        const data = req.body;
        const updated = await eventData.updateStat(eventStat, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteEvent = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const deletedEvent = await eventData.deleteEvent(eventId);
        res.send(deletedEvent);
    } catch (error) {
        res.status(400).send(error.message);
    }
}



module.exports = {
    getAllEvents,
    getEvent,
    addEvent,
    updatEvent,
    updateStat,
    deleteEvent,
    getLoaction1,
    getLoaction2,
    getLoaction3,
    getLoaction4,
    getLoaction5,
    getLoaction6
}