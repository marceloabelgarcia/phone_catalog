const dotenv = require('dotenv')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

dotenv.config({
  path: '.env',
})
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION!!! shutting down...')
  console.log(err.name, err.message)
  process.exit(1)
})