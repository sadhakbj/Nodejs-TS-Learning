import { Request, Response, NextFunction } from 'express'
import Post from '../models/Post'


/**
 * PostController class
 */
class PostController {

    /**
     * Find all the posts.
     * @param req 
     * @param res 
     * @param next 
     */
    public allPosts(req: Request, res: Response, next: NextFunction) {
        Post.find({})
            .then((posts) => {
                res.json({
                    status: 200,
                    posts
                })
            })
            .catch((error) => {
                const status = res.statusCode
                res.json({
                    status,
                    error
                })
            })
    }

    /**
     * Find the post by slug.
     * @param req 
     * @param res 
     * @param next 
     */
    public findBySlug(req: Request, res: Response, next: NextFunction) {
        /** @todo Will update content here. */
        res.json({
            message: 'Hello world'
        });

    }

}

export default new PostController()
