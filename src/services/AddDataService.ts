import { prisma } from '../prisma/'

interface IAddDataService {
    id: number
    name: string
    creditsWallet: number
    suite: string
}

class AddDataService {
    async execute({ id, name, creditsWallet, suite }: IAddDataService) {
        return await prisma.client.create({
            data: {
                id,
                name,
                creditsWallet,
                suite
            }
        })
    }
}

export { AddDataService }