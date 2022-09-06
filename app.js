const express = require('express');
const app = express();
const port = 8080

var cookieParser = require('cookie-parser')
app.use(cookieParser("insertsecretKeyHere"))

app.get('/login', (req, res) => {
    res.status(200)
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})

req.cookieParser
res.cookie(, {
    signed: true,
    secure: true,
    httpOnly: true,
})
res.clearCookie()

req.signedCookes()

{
    signed: true,
    secure: true,
    httpOnly: true,
}