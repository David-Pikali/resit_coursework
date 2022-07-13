import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

// Connection URL
//const uri = "mongodb+srv://David:12345myPASSWORD@ewscoursework.xgrkf.mongodb.net/?retryWrites=true&w=majority"

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { dbName: "users" })
mongoose.connection.on('error', err => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
