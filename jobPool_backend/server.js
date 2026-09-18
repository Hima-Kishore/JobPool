import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

app.get('/info', (req, res) => {
    res.send("Job Pool site for IITBBS is under development");
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));