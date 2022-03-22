import { prisma } from '../prisma/'
import { Request, Response } from 'express'

class SayHelloController {
    async handle(request: Request, response: Response) {
        const suite = request.params.suite
        const resultSelectDb = await prisma.client.findMany({
            where: {
                suite: suite
            }
        })

        return response.json(resultSelectDb)
    }
}

export { SayHelloController }