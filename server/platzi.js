//connect to the API of Binance and get the data

const request = require('request');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const port = process.env.PORT || 8080;


