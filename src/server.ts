import * as express from 'express'
import * as mongoose from 'mongoose'
import * as bodyParser from 'body-parser'
import * as logger from 'morgan'
import * as helmet from 'helmet'
import * as compression from 'compression'

/**
 * Import all the routes files.
 */
import PostRoutes from './routes/PostRouter'
import UserRoutes from './routes/UserRouter'

/**
 * Server class
 */
class Server {
    public app: express.Application

    constructor() {
        this.app = express()
        this.config()
        this.initializeRoutes()
    }

    /**
     * Set up all the configs.
     */
    public config() {
        const MONGOURL = 'mongodb://localhost/nodets'


        mongoose
            .connect(MONGOURL)
            .then(() => console.log("Connected"))
            .catch(error => console.log(error))

        this.app.use(bodyParser.json())
        this.app.use(logger('dev'))
        this.app.use(compression())
        this.app.use(helmet())
    }

    /**
     * Initialize the routes.
     */
    private initializeRoutes() {
        const router: express.Router = express.Router()

        router.get('/', (req, res, next) => {
            res.send('hello world')
        })

        this.app.use('/', router)
        this.app.use('/api/posts', PostRoutes)
        this.app.use('/api/users', UserRoutes)
    }
}

export default new Server().app
