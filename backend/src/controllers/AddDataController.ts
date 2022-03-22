import { Request, Response } from 'express'

import { AddDataService } from '../services/AddDataService'

// Simula os dados do usuario
import { factoryUser } from '../functions/factoryUser'

class AddDataController {
    async handle(request: Request, response: Response) {
            if(!request.body.name || !request.body.email){
                const dataRamdom = factoryUser()

                const addUserData = new AddDataService()
                const result = addUserData.execute(dataRamdom)
        
                return response.json(result)
            }
            
            return response.json("chegou de boa")
    }
}

export { AddDataController }