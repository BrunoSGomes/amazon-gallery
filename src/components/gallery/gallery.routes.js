import express from 'express'
import { GalleryController } from './gallery.controller'

const galleryController = new GalleryController()

const routes = express.Router({
    mergeParams: true
})

routes.post('/uploadFile', async (req, res) => {
    await galleryController.uploadFile(req, res)
})

routes.post('/deleteFile', async (req, res) => {
    await galleryController.deleteFile(req, res)
})

routes.get('/getFile', async (req, res) => {
    await galleryController.getFiles(req, res)
})

routes.get('/getFile/:id', async (req, res) => {
    await galleryController.getUniqFile(req, res)
})

export { routes as galleryRoutes }