'use strict';

const model = require('../model/model.js');

const log = console.log;


exports.mainPage = (req, res) => {
    
    // getting data from db ( using model.js middleware )
};

exports.postThermal = (req, res) => {
    model.postThermal(req.body.z, (err,result) => {
        if(err){
            throw err
        }
        else{
            // log("new data from thermal camera")
            if(result === 1){
                res.send("data successfully added")
            }
        }
    })
}

exports.getThermal = (req, res) => {
    model.getThermal((err,result) => {
        if(err){
            throw err;
        }
        
        else{
            // log("thermal data read from client")
            res.json({'z':result})
        }
    })
}


exports.postMap = (req, res) => {
    model.postMap(req.body, (err,result) => {
        if(err){
            throw err
        }
        else{
            // log("new data for map")
            if(result === 1){
                res.send("MAP data successfully added")
            }
        }
    })
}

exports.getMap = (req, res) => {
    model.getMap((err,result) => {
        if(err){
            throw err;
        }
        
        else{
            // log("MAP data read from client")
            res.json({'data':result})
        }
    })
}