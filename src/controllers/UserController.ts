import { Request, Response, NextFunction } from 'express'
import * as bcrypt from 'bcrypt'

import User from '../models/User'

/**
 * UserController class
 */
class UserController {

    /**
     * Find all the posts.
     * @param req 
     * @param res 
     * @param next 
     */
    public allUsers(req: Request, res: Response, next: NextFunction) {
        User.find({})
            .then((users) => {
                res.json({
                    message: 'Users fetched successfully',
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
     * Find the User by username.
     * @param req 
     * @param res 
     * @param next 
     */
    public findByUsername(req: Request, res: Response, next: NextFunction) {
        let username: string = req.params.username

        User.find({ username })
            .then((user) => {
                res.json({
                    status: 200,
                    message: 'Fetched User successfully',
                    data: user
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

        const { name, email, username, password, image } = req.body

        bcrypt.hash(password, 10, (error, hash) => {
            if (error) {
                res.json({
                    status: 500,
                    error
                })
            } else {
                const user = new User({
                    name,
                    email,
                    username,
                    password: hash,
                    image
                })

                user.save()
                    .then((user) => {
                        res.json({
                            status: 200,
                            message: 'User created successfully',
                            data: user
                        })
                    }).catch((error) => {
                        res.json({
                            status: 500,
                            error
                        })
                    })
            }
        })
    }

    /**
     * update
     */
    public update(req: Request, res: Response, next: NextFunction) {
        let username: string = req.params.username

        User.findOneAndUpdate({ username }, req.body)
            .then((user) => {
                res.json({
                    status: 200,
                    message: 'User updated successfully',
                    data: User
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
        let username: string = req.params.username

        User.findOneAndDelete({ username })
            .then((user) => {
                res.json({
                    status: 200,
                    message: 'User deleted successfully',
                    data: user
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

export default new UserController()
