require("dotenv").config();
const express = require('express');
const hbs = require("express-handlebars"); // Подключаем express-handlebars
const { engine } = require('express-handlebars');
const server = require("./server/routes/server"); // Подключаем экспортированную в Шаге 4 переменную
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080; // Константа для порта
const PASS = process.env.PASS;
const app = express();

app.use(express.json()); // Благодаря этому мы можем использовать req.body (Я использую rq.body)
app.engine('hbs', engine());
app.set('view engine', 'hbs');
app.set("views", "./server/views");
app.use(express.static("./public"));

app.use("/", server);
app.use((rq, rs) => {
    rs.status(404);
    rs.render('error.hbs', {
        title: 'Error',
        caption: 'Ошибка, данный запрос не существует',
    });
});

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://admin:${PASS}@hentaihub.fb9ae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
        app.listen(PORT, (e) => e ? "" : console.log(`Server running. http://localhost:${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();