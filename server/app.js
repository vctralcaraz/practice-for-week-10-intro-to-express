const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('The server is alive!');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`))
