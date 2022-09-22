import express from 'express';
const app = express();
app.get('/ads', (request, response) => {
    response.json({ message: 'Acessou o Ads!' });
});
app.listen(3333);
