export function factoryUser() {
    const id = funcId(1, 99)
    const name = funcName(0, 4)
    const creditsWallet = funcCredits(9, 150)
    const suite = funcSuite(5)
    const email = funcEmail(name, suite)

    return {
        id,
        name,
        email,
        creditsWallet,
        suite
    }
}

function funcId(min: number, max: number) {
    const id = Math.round((Math.random() * (max - min) + min))
    return id
}

function funcName(min: number, max: number) {
    const names = ['Vazio', 'Marcio', 'Victor', 'Lucia', 'Kevin', 'Gabriel']
    const indice = Math.round((Math.random() * (4 - 1) + 1))
    return names[indice]
}

function funcEmail(name: string, suite: string) {
    const concat = `${name}e${suite}@gmail.com`
    const email = concat.toLowerCase()
    return email
}

function funcCredits(min: number, max: number) {
    const credits = Math.round((Math.random() * (max - min) + min))
    return credits
}

function funcSuite(qtd: number) {
    const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min)
    const geraMaiuscula = () => String.fromCharCode(rand(65, 91))
    const geraNumero = () => String.fromCharCode(rand(48, 58))

    const senhaArray = []

    for(let i = 0; i < qtd; i++) {
        senhaArray.push(geraMaiuscula())
        senhaArray.push(geraNumero())
    }

    return senhaArray.join('').slice(0, qtd);
}