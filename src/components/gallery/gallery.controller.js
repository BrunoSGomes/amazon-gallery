import { GalleryService } from "./gallery.service.js";
import { Readable } from 'stream'

export class GalleryController {

    constructor() {
        this.galleryService = new GalleryService()
    }

    async uploadFile(req, res) {

        try {

            console.log(req)

            const requestReadable = new Readable({})

            const response = this.galleryService.uploadFile(req)
            res.status(201).json({ response })

        } catch (error) {

            res.status(400).json({ message: error })

        }

    }

    async deleteFile(req, res) {

        try {

            const response = this.galleryService.deleteFile(req)
            res.status(200).json({ response })

        } catch (error) {

            res.status(400).json({ error: error })

        }

    }

    async getFiles(req, res) {

        try {

            const response = this.galleryService.getFiles(req)
            res.status(200).json({ response })

        } catch (error) {

            res.status(400).json({ error: error })

        }

    }

    async getUniqFile(req, res) {

        try {

            const response = this.galleryService.getUniqFile(req)
            res.status(200).json({ response })

        } catch (error) {

            res.status(400).json({ error: error })

        }

    }

}