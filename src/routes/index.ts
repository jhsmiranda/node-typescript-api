import { Express } from 'express'
import userController from '../controllers/user'
import homeController from '../controllers/home'

export default function(app:Express) {
    app.get('/', homeController)
    app.get('/user', userController.list)
    app.post('/user', userController.create)
    app.put('/user/:id', userController.edit)
    app.delete('/user/:id', userController.delete)
}