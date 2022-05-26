'use strict';

// const { MongoClient } = require('mongodb');
const { callbackify } = require('util');
const server = require("../server");

const MongoClient = require('mongodb').MongoClient;

const log = console.log;


// Connection URL
const url = 'mongodb://admin:drone-db@mongo:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'droneDB';


async function insertDB(data) {
    // Use connect method to connect to the server
    await client.connect();
    
    const db = client.db(dbName);
    const collection = db.collection('droneData');
  
    try {
        await collection.insertOne(data);
    
    } catch (error) {
        if (error instanceof MongoServerError) {
          console.log(`Error worth logging: ${error}`); // special case for some reason
        }
        throw error; // still want to crash
      }
    return 'done.';
  }


let thermalResult = undefined;
let mapResult = undefined;

exports.postThermal = async function (data,callback) {
    // log(data);
    thermalResult = data;
    callback(null,1)
}

exports.getThermal = function (callback) {
    // log(thermalResult);
    callback(null,thermalResult)
}



exports.postMap = async function (data,callback) {
    // log(data);
    mapResult = data;
    insertDB(mapResult);
    server.SocketEmit(mapResult);
    callback(null,1)
}

exports.getMap = function (callback) {
    // log(thermalResult);
    callback(null,mapResult)
}