require("dotenv").config();
const express = require('express');
const hbs = require("express-handlebars"); // Подключаем express-handlebars
const server = require("./server/routes/server"); // Подключаем экспортированную в Шаге 4 переменную
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080; // Константа для порта
const PASS = process.env.PASS;`${PASS}`
const app = express();

