import express, { Express, Request, Response } from 'express'
import routes from './routes'
import { connectDb } from './db'
import 'reflect-metadata'

connectDb();

const app:Express = express();

app.use(express.json()),
app.use(express.urlencoded({extended:false}))

const port:number = 3000;

app.get("/", (req: Request, res: Response) => {
    console.log("Server running at " + port);
    return res.json({ message: "Oe mundão" });
});

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
    routes(app)
})