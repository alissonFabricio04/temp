import { prisma } from '../prisma/'

interface IAddDataService {
    id: number
    credits: number // creditsWallet
}

class UpdateDataService {
    async execute({ id, credits }: IAddDataService) {
        return await prisma.client.update({
            where: {
                id: id,
            },
            data: {
                creditsWallet: credits,
            },
        })
    }
}

export { UpdateDataService }