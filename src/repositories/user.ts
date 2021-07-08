import { getConnection } from "typeorm";
import { user } from 'src/@types/user'

export default {
    async list() {
        const repository = getConnection().getRepository('User')
        const result = await repository.find()
        return result
    },

    async create(user:user) {
        const repository = getConnection().getRepository('User')
        const result = await repository.save(user)
        return result
    },

    async edit(id:string, data:user) {
        const repository = getConnection().getRepository('User')
        const result = await repository.update(id, data)
        return result
    },

    async delete(id:string) {
        const repository = getConnection().getRepository('User')
        const result = await repository.delete(id)
        return result
    }
}