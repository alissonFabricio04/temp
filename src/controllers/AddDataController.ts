import { Request, Response } from 'express'
import { AddDataService } from '../services/AddDataService'

class AddDataController {
    async handle(request: Request, response: Response) {
        const dados = request.body

        const result = new AddDataService()
        result.execute(dados)

        return response.json(result)
    }
}

export { AddDataController }