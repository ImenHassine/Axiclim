import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import 'dotenv/config'

import * as middleware from './middleware'

import articlesRouter from './routers/articles.router'
// import * as authentificationService from './services/authentification.service'
import * as personnelService from './services/personnel.service'


const PORT = process.env.PORT || 8080
const ENV = process.env.NODE_ENV || 'development'

const app: Express = express()

app.use(helmet())

app.use(cors())

app.use(express.json())

app.use(middleware.httpLogger)

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Welcome')
})

// Articles routes

app.use('/articles', articlesRouter)

try {
  // authentificationService.getToken()
  personnelService.getAll()

} catch (e: any) {
  console.log('eeeesseseeeeee',e)

}


// Error hanlding middleware

app.use(middleware.errorHandler)

app.use(middleware.notFoundHandler)

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${ENV} environment`)
})

export { app as default, server }
