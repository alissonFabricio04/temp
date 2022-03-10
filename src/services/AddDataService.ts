import prismaClient from '../prisma/';

interface IAddDataService {
    name: string
    phone: string
    isClient: boolean
}

class AddDataService {
    async execute({ name, phone, isClient = false }: IAddDataService) {
        return await prismaClient.Client.create({
            data: {
                name,
                phone,
                isClient
            }
        })
    }
}

export { AddDataService }