import express, { Express } from 'express'
import routes from './routes'

const app:Express = express();

app.use(express.json()),
app.use(express.urlencoded({extended:false}))

const port:number = 3000;

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
    routes(app)
})