import express from 'express'

const routes = express.Router({
    mergeParams: true
})

routes.post('/uploadFile', (req, res) => {
    res.status(200).json({})
})

routes.post('/deleteFile', (req, res) => {
    res.status(200).json({})
})

routes.get('/getFile', (req, res) => {
    res.status(200).json({})
})

routes.get('/getFile/:id', (req, res) => {
    res.status(200).json({})
})

export { routes as galleryRoutes }