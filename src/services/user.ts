import repository from '../repositories/user'
import { user } from 'src/@types/user'

export default {
    async list() {
        const result = await repository.list()
        return result
    },

    async create(user:user) {
        const result = await repository.create(user)
        return result
    },

    async edit(id:string, data:user) {
        const result = await repository.edit(id, data)
        return result
    },
    
    async delete(id:string) {
        const result = await repository.delete(id)
        return result
    }
}