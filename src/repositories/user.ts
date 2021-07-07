import { getConnection } from "typeorm";

export default {
    async list() {
        const repository = getConnection().getRepository('User')
        const result = await repository.find()
        return result
    }
}