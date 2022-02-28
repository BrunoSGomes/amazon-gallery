import serverless from 'serverless-http'
import express from 'express'
import { galleryRoutes } from './components/gallery/gallery.routes.js'
import { authRoutes } from './components/auth/auth.routes.js'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/gallery', galleryRoutes)
app.use('/auth', authRoutes)

const handler = serverless(app)

export { handler }