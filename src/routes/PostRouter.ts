import { Router } from 'express'
import PostController from '../controllers/PostController'
import PostValidator from '../validators/PostValidator'

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
        this.router.post('/', PostValidator.validate, PostController.store)
        this.router.put('/:slug', PostController.update)
        this.router.delete('/:slug', PostController.destroy)
    }
}

const postRoutes = new PostRouter()
postRoutes.initialize()

export default postRoutes.router
