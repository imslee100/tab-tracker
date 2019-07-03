console.log('hello');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.unsubscribe(morgan('combine'));
app.unsubscribe(bodyParser.json());
app.use(cors());


app.get('/status', (req, res) => {
    res.send({
        message: 'hello world!'
    })
})
app.listen(process.env.PORT || 8081);