import { Router } from 'express'

import UserController from '../controllers/UserController'

/**
 * UserRouter Class
 */
class UserRouter {
    router: Router

    constructor() {
        this.router = Router()
        this.initialize()
    }

    /**
     * Initialize the routes.
     */
    initialize() {
        this.router.get('/', UserController.allUsers)
        this.router.get('/:username', UserController.findByUsername)
        this.router.post('/', UserController.store)
        this.router.put('/:username', UserController.update)
        this.router.delete('/:username', UserController.destroy)
    }
}

const userRoutes = new UserRouter()
userRoutes.initialize()

export default userRoutes.router