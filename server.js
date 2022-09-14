const app = require('express')();

app.get('/', (_req, res) => {
    res.json({message: "Docker is easy"});
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`app listening on: http://localhost:${port}`));