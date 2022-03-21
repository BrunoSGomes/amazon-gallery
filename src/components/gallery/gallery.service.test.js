import { GalleryService } from "./gallery.service.js"

const galleryService = new GalleryService()

describe('Gallery Service Unit', () => {
    describe('uploadFile', () => {
        it('should return a succesfully uploaded file with specific identication', () => {
            const req = new Image()

            const response = galleryController.uploadFile(req)

            expect(response).toBe({})
        })

        it('should return a upload error', () => {
            const req = new File()

            const response = galleryController.uploadFile(req)

            expect(response).toBe(Error)
        })
    })
})