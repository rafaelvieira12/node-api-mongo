const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://rafael:1234@cluster0-jqdrc.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true,  useUnifiedTopology: true })

requireDir('./src/models');

app.use('/api', require('./src/routes'))

app.listen(3001);