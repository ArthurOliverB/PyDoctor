const app = require('express')()


app.get('/usuarios', (req, res, next) => {
	res.send("Hello!")
})


app.listen(3000, () => {
	console.log("Rodando na porta 3000")
})
