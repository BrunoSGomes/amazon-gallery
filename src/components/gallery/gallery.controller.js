import { Gallery } from "../models/gallery.model";

app.post('/uploadFile', (req, res) => {
    const result = Gallery.uploadFile()
    res.status(200).json(result)
})

app.post('/deleteFile', (req, res) => {
    const result = Gallery.deleteFile()
    res.status(200).json(result)
})

app.get('/getFile', (req, res) => {
    const result = Gallery.getFiles()
    res.status(200).json(result)
})

app.get('/getFile/:id', (req, res) => {
    const result = Gallery.getUniqFile()
    res.status(200).json(result)
})