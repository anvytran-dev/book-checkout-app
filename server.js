const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
var port     = process.env.PORT || 8080;

var db, collection;

const url = "mongodb+srv://anvytran:matcha@anvyrc.kuion.mongodb.net/library?retryWrites=true&w=majority";
const dbName = "library";



app.listen(port, () => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if(error) {
            throw error;
        }
        db = client.db(dbName);
        console.log("Connected to `" + dbName + "`!");
    });
});

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  db.collection('book').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {library: result})
  })
})

app.post('/messages', (req, res) => {
  db.collection('book').insertOne({title: req.body.title, author: req.body.author}, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})


app.put('/checkOut', (req, res) => {

  db.collection('book')

  .findOneAndUpdate({title: req.body.title, author: req.body.author}, {
    $set: {
      checkOut: true
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.put('/checkIn', (req, res) => {

  db.collection('book')

  .findOneAndUpdate({title: req.body.title, author: req.body.author}, {
    $set: {
      checkOut: false
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})


app.delete('/messages', (req, res) => {
  db.collection('book').findOneAndDelete({title: req.body.title, author: req.body.author}, (err, result) => {
    if (err) return res.send(500, err)
    res.send('Message deleted!')
  })
})
