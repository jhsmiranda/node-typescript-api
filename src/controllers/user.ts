import { Request, Response } from 'express'
import UserService from '../services/user'

export default {
    async list(req:Request, res:Response) {
        try{
            const result = await UserService.list()
            res.json(result)
            console.log('console do controller')
        } catch (err) {
            res.json(err).status(400)
            console.log('erro do constroller')
        }
    }
}