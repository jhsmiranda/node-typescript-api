import repository from '../repositories/user'

export default {
    async list() {
        const result = await repository.list()
        return result
    }
}