import { Sequelize } from "sequelize";
import mongoose from "mongoose"
import User from "../app/models/User";
import databaseConfig from "../config/database"
import Appointment from "../app/models/Appointment";
import File from '../app/models/File'

const models = [ User, Appointment, File ];

class Database{

    constructor(){
        this.init(),
        this.mongo()
    }

    init(){
        this.connection = new Sequelize(databaseConfig);
        models
        .map( model => model.init(this.connection))
        .map( model => model.associate && model.associate(this.connection.models))
    }

    mongo(){
        this.mongoConnection = mongoose.connect(
            'mongodb+srv://luizacoders-nosql:f8XHFk9bqjdbFzur@luizacoders.ap37i.mongodb.net/Notification?retryWrites=true&w=majority', 
            { useNewURLParser: true, useUnifiedTopology: true }
        )
    }

}

export default new Database();