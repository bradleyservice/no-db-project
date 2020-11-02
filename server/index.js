const express = require('express'),
app = express(),
port = 4200,
ctrl = require('./controller');


app.use(express.json());

app.get('/api/watchlist', ctrl.getMovie);

app.post('/api/watchlist', ctrl.addMovie);

app.put('/api/watchlist/:id', ctrl.updateMovie);

app.delete('/api/watchlist/:id', ctrl.removeWatchListMovie);

app.delete('/api/seenlist/:id', ctrl.removeWatchedMovie)

app.listen(port, () => console.log(`server is running on ${port}`))