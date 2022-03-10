import { Router } from 'express'
import { SayHelloController } from './controllers/SayHelloController'


const router = Router()

const sayHelloController = new SayHelloController()

router.get('/', sayHelloController.handle)
router.post('/add')


export { router }