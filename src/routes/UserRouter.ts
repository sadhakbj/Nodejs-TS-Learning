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
        this.router.get('/', UserController.getAll)
        this.router.get('/:slug', UserController.findBySlug)
    }
}

const userRoutes = new UserRouter()
userRoutes.initialize()

export default userRoutes.router