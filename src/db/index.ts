import "reflect-metadata";
import {createConnection} from "typeorm";

export async function connectDb(){
    await createConnection().then( () => {
        console.log('Conectado ao banco de dados')
    }).catch(error => console.log(error));
}
