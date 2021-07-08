import { Request, Response } from 'express'
import UserService from '../services/user'

export default {
    async list(req:Request, res:Response) {
        try{
            const result = await UserService.list()
            res.json(result)
        } catch (err) {
            res.json(err).status(400)
        }
    },

    async create(req:Request, res:Response){
        try{
            const result = await UserService.create(req.body)
            res.json(result)
        } catch (err){
            res.json(err).status(400)
        }
    },

    async edit(req:Request, res:Response){
        try{
            const result = await UserService.edit(req.params.id, req.body)
            res.json(result)
        } catch (err){
            res.json(err).status(400)
        }
    },

    async delete(req:Request, res:Response){
        try{
            const result = await UserService.delete(req.params.id)
            res.json(result)
        } catch (err){
            res.json(err).status(400)
        }
    }
}