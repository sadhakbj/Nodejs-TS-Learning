import { Request, Response, NextFunction } from 'express'
import * as Joi from 'joi'

import FormValidator from './FormValidator'

/**
 * Postvalidator class.
 */
export default class PostValidator extends FormValidator {

    joi

    constructor() {
        super(Joi)
        this.joi = Joi
    }

    /**
     * 
     */
    public rules = () => {
        return this.joi.object().keys({
            title: this.joi.string().email().required(),
        })
    }
}