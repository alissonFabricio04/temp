import { prisma } from '../prisma/'

interface IAddDataService {
    suite: string
    credits: number // creditsWallet
}

class UpdateDataService {
    async execute({ suite, credits }: IAddDataService) {
        return await prisma.client.update({
            where: {
                suite: suite,
            },
            data: {
                creditsWallet: credits,
            },
        })
    }
}

export { UpdateDataService }