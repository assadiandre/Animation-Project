const express = require("express")
const app = express()

app.set('view engine', 'html')
app.use(express.static('views'))
app.use(express.static('assets'))
app.use(express.static('p5'))
app.use(express.static('public'))
app.use(express.static('lib'))

app.get("/", (req,res) => {
	res.render("index.html")
})

const port = process.env.PORT || 3000
var server = app.listen(port)
console.log("Listening on 3000");
