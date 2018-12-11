import { Router } from 'express'
import PostController from '../controllers/PostController'

class PostRouter {
    router: Router

    /**
     * Initialize the Postrouter
     */
    constructor() {
        this.router = Router()
        this.initialize()
    }

    /**
     * Initialize the post routes.
     */
    initialize() {
        this.router.get('/', PostController.allPosts)
        this.router.get('/:slug', PostController.findBySlug)
    }
}

const postRoutes = new PostRouter()
postRoutes.initialize()

export default postRoutes.router
