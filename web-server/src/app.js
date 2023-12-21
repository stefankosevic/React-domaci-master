const path = require('path')
const express = require('express')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 8080

app.get('/weather/:address', (req, res) => {
  const address = req.params.address
  if (!address) {
    return res.send({
      error: 'You must provide an address!',
    })
  }

  if (!!res && res.status === 404) {
    store.dispatch(push('/'))
  }

  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error: 'greska' })
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error: 'greska' })
      }
      console.log('here ', {
        forecast: forecastData,
        location,
        address: req.query.address,
      })
      res.send({
        forecast: forecastData,
        location,
        address: req.query.address,
      })
    })
  })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../build')))
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname + '../../build/index.html'))
  })
}

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})
