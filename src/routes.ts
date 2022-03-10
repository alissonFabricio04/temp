import { Router } from 'express'
import { AddDataController } from './controllers/AddDataController'
import { SayHelloController } from './controllers/SayHelloController'


const router = Router()

const sayHelloController = new SayHelloController()
const addDataController = new AddDataController()

router.get('/', sayHelloController.handle)
router.post('/add', addDataController.handle)


export { router }