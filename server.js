const express = require('express')
const session = require("express-session")
const next = require('next')
const passport = require("passport")
const routes = require("./routes")
const sequelize = require('./database')
require("./src/lib/passport")

const port = 3000
const dev = process.env.NODE_ENV !== 'production'

// creating the app either in production or dev mode 
const app = next({ dev })

sequelize.sync().then(() => {
  console.log('Database is active!');
}).catch((error) => {
  console.error('Error syncing database:', error);
});

const handle = app.getRequestHandler()

// Running the app, async operation 
app.prepare().then(() => {
  const server = express()
  server.use(express.json())
  server.use(express.urlencoded({ extended: true }))
  server.use(
    session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24, // Equals 1 day
      },
    })
  )
  server.use(passport.initialize())
  server.use(passport.session())
  
  // Redirecting routes to Express.js
  server.use(routes)

  // Redirecting all requests to Next.js 
  server.all('*', (req, res) => {
    return handle(req, res)
  })
    

  server.listen(port, (err) => {
    console.log(`Running on port ${port}, dev: ${dev}`)
  })
})