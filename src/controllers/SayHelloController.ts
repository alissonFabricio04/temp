import { prisma } from '../prisma/'
import { Request, Response } from 'express'

class SayHelloController {
    async handle(request: Request, response: Response) {
        const resultSelectDb = await prisma.client.findMany({
            take: 1,
            orderBy: {
                created_at: "desc"
            }
        })

        return response.json(resultSelectDb)
    }
}

export { SayHelloController }