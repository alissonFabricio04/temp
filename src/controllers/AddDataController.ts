import { Request, Response } from 'express'

import { AddDataService } from '../services/AddDataService'

// Simula os dados do usuario
import { factoryUser } from '../functions/factoryUser'

class AddDataController {
    async handle(request: Request, response: Response) {
        const dados = factoryUser()

        const addUserData = new AddDataService()
        const result = addUserData.execute(dados)

        return response.json(result)
    }
}

export { AddDataController }