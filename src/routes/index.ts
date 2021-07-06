import { Express, Request, Response } from 'express'
import userController from '../controllers/user'

export default function(app:Express) {
    app.get('/', userController.list)
}