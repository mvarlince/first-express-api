import express from "express"

//create an app
const app = express()
app.use(express.json())

let instructors = ['Jiho', 'Todd']

app.post('/instructors', (req,res) => {
    //take an array of new instructors and merge with existing
    const newInstructors = req.body.instructors
    instructors = [...instructors, ...newInstructors]
    res.send(instructors)
})

// now we just need to list some valid requests
app.get('/test', (request, response) => {
    console.log('Test request made.')
    response.send('Varlince`s API works')
})

app.get('/instructors', (request, response) => {
    response.send(instructors)
})

app.get('/secure', (request, response) => {
    response.status(401).send('Not authorized.')
})

app.post('/students', (req, res) => {
    // we need to handle the post request (body)
    const newStudent = req.body
    console.log(newStudent)
    res.send(newStudent)
})

app.listen(3030,() => {
    console.log(`Listening on http://localhost:3030...`)
})