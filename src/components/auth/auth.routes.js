import express from 'express'

const routes = express.Router({
    mergeParams: true
})

routes.post('/login', (req, res) => {
    res.status(200).json({})
})

routes.post('/logout', (req, res) => {
    res.status(200).json({})
})

routes.post('/create', (req, res) => {
    res.status(200).json({})
})

export { routes as authRoutes }