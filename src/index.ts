import express from 'express'

const app = express()
app.use(express.json()) //req.body to json

const PORT = 3000

app.get('/ping', (_req, res) => { //_req to avoid warnings
    console.log(`ping - ${new Date().toLocaleDateString()}`);
    res.send('pong!!!')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
})