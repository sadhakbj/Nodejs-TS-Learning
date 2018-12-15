import { Request, Response, NextFunction } from 'express'
import * as Joi from 'joi'

/**
 * Postvalidator class.
 */
class PostValidator {
    /**
     * Validate the post inputdata.
     * @param req 
     * @param res 
     * @param next 
     */
    public validate(req: Request, res: Response, next: NextFunction) {
        const inputdata = req.body

        const schema = Joi.object().keys({
            title: Joi.string().email().required(),
        })

        Joi.validate(inputdata, schema, (error, value) => {
            if (error) {
                return res.json({
                    status: 422,
                    error
                })
            } else {
                next()
            }
        })
        next()
    }
}

export default new PostValidator()