import express, { Express, Request, Response , Application, urlencoded } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import logger from "morgan";

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(urlencoded({extended:true}));


app.get('/', (req: Request, res: Response) => {
    res.json({message:"AcadHouse API 1.0.0"});
});

app.listen(port, () => {
  console.log(`Server is ON, at http://localhost:${port}`);
});