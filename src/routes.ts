import { Router } from 'express'

import { AddDataController } from './controllers/AddDataController'
import { SayHelloController } from './controllers/SayHelloController'
import { UpdateDataController } from './controllers/UpdateDataController'


const router = Router()

const sayHelloController = new SayHelloController()
const addDataController = new AddDataController()
const updateDataController = new UpdateDataController()

router.get('/list', sayHelloController.handle)
router.post('/add', addDataController.handle)
router.put('/user/id=:id', updateDataController.handle)


export { router }