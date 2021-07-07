import { Express } from 'express'
import userController from '../controllers/user'

export default function(app:Express) {
    app.get('/user', userController.list)
}