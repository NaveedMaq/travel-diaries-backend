import express from 'express';

const app = express();

const PORT = 5000;

app.get('/', (req, res) => res.json({ message: 'Hello world' }));

app.listen(PORT, () => console.log(`App started on port ${PORT}`));
