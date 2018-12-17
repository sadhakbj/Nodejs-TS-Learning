import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

export default abstract class FormValidator {
    abstract rules();

    joi: Joi

    constructor(Joi) {
        this.joi = Joi
    }

    public validate = (req: Request, res: Response, next: NextFunction) => {
        const inputdata = req.body
        const rulesList = this.rules()

        this.joi.validate(inputdata, rulesList, (error, value) => {
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
