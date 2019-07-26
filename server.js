require('dotenv').config();

const
    express = require('express'),
    app = express(),
    PORT = process.env.PORT || 8000;


require('./db/mongoose');


app.use(express.json());

app.get('/', (req, res) => {
    res.json({ Success : true})
})

app.listen(PORT, err => {
    console.log(err || `Server listening on PORT ${PORT}`);
});

app.get('/api', (req, res) => {
    res.json({ message : `API Root`});
});