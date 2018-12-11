import { Request, Response, NextFunction } from 'express'
import User from '../models/User'

/**
 * UserController class
 */
class UserController {

    /**
     * Get all the users.
     */
    public getAll(req: Request, res: Response, next: NextFunction) {
        User.find({})
            .then((users) => {
                res.json({
                    status: 200,
                    users
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
     * findBySlug
     */
    public findBySlug(req: Request, res: Response, next: NextFunction) {
        return res.json({
            msg: 'Hello world'
        })
    }
}

export default new UserController()