import { Request, Response, NextFunction } from 'express'
import Post from '../models/Post'
import * as Joi from 'joi'

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
        let slug: string = req.params.slug

        Post.find({ slug })
            .then((post) => {
                res.json({
                    status: 200,
                    message: 'Fetched post successfully',
                    data: post
                })
            }).catch((error) => {
                const status = res.statusCode
                res.json({
                    status,
                    error
                })
            })
    }


    /**
     * store
     */
    public store(req: Request, res: Response, next: NextFunction) {
        const { title, slug, body, image } = req.body

        const post = new Post({
            title,
            slug,
            body,
            image
        })

        post.save()
            .then((post) => {
                res.json({
                    status: 200,
                    message: 'Post created successfully',
                    data: post
                })
            }).catch((error) => {
                const status = res.statusCode
                res.json({
                    status,
                    error
                })
            })
    }

    /**
     * update
     */
    public update(req: Request, res: Response, next: NextFunction) {
        let slug: string = req.params.slug

        Post.findOneAndUpdate({ slug }, req.body)
            .then((post) => {
                res.json({
                    status: 200,
                    message: 'Post updated successfully',
                    data: post
                })
            }).catch((error) => {
                const status = res.statusCode
                res.json({
                    status,
                    error
                })
            })


    }

    /**
     * destroy
     */
    public destroy(req: Request, res: Response, next: NextFunction) {
        let slug: string = req.params.slug

        Post.findOneAndDelete({ slug })
            .then((post) => {
                res.json({
                    status: 200,
                    message: 'Post deleted successfully',
                    data: post
                })
            }).catch((error) => {
                const status = res.statusCode
                res.json({
                    status,
                    error
                })
            })

    }
}

export default new PostController()
