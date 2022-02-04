import Auth from '../models/auth.model';

app.post('/login', (req, res) => {
    const result = Auth.login()
    res.status(200).json(result)
})

app.post('/logout', (req, res) => {
    const result = Auth.logout()
    res.status(200).json(result)
})

app.post('/create', (req, res) => {
    const result = Auth.create()
    res.status(200).json(result)
})