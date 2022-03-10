import { Request, Response } from 'express'

class SayHelloController {
    async handle(request: Request, response: Response) {
        const result = 'Hello!'

        return response.json(result)
    }
}

export { SayHelloController }