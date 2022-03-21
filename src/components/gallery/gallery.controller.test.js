import { GalleryController } from './gallery.controller.js'

const galleryController = new GalleryController()

describe('Gallery Model Unit', () => {
    describe('uploadFile', () => {
        it('should return a succesfully uploaded response', () => {
            const req = new Image()

            const response = galleryController.uploadFile(req)

            expect(response).toBe({})
        })

        it('should return a response error', () => {
            const req = new File()

            const response = galleryController.uploadFile(req)

            expect(response).toBe(Error)
        })
    })
})