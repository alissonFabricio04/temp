import { prisma } from '../prisma/'

interface IAddDataService {
    name: string
    email: string
    creditsWallet: number
    suite: string
}

class AddDataService {
    async execute({ name, email, creditsWallet, suite }: IAddDataService) {
        await prisma.client.create({
            data: {
                name: name,
                email: email,
                creditsWallet: creditsWallet,
                suite: suite
            }
        })

        return await prisma.client.findMany({
            where: {
                suite: suite
            }
        })
    }
}

export { AddDataService }