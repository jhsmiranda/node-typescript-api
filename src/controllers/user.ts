import { Request, Response } from 'express'

export default {
    async list(req:Request, res:Response) {
        res.status(200).json('Olá Mundo')
    }
}