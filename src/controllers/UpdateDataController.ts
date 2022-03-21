import { Request, Response } from 'express'

import { UpdateDataService } from '../services/UpdateDataService'

class UpdateDataController {
    async handle(request: Request, response: Response) {
        const data = request.body

        const addUserData = new UpdateDataService()
        const result = addUserData.execute(data)

        return response.json(result)
    }
}

export { UpdateDataController }