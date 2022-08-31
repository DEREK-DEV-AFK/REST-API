const express = require('express');
const app = express();


app.use(express.json());


const courses = [
    {id:1, name: 'course1'},
    {id:2, name: 'course2'},
    {id:3, name: 'course3'},
];

/* 
 * It has bunch of methods such as
 * app.get()
 * app.post()
 * app.put()
 * app.delete()
 * this methods corruspond to HTTP methods or verbs
 */

/* it takes 2 aurguments 
 * 1st is the path or url, we '/' for the route of the website
 * 2nd is an callback function, it will be called when there 
 * is an request to this end point. it has 2 args 1) request 2) response
 * 
 */
app.get('/',(req, res) => {
    res.send('hello world');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// /api/courses/1 here :id can be listen by params
app.get('/api/courses/:id', (req, res) => {
    //res.send(req.params.id);

    // finding that if that course exist by caamparing
    const course =  courses.find(c => c.id === parseInt(req.params.id));
    // if yes then return it or set error and give error message
    course ? res.send(course) : res.status(404).send('course not found!!');   
});


app.get('/api/courses/:id/:year', (req, res) => {
    // to listen to query parameters
    res.send(req.query);
});


// POST

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length+1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})


// setting up the app to listen on
// optionall we can pass function that would be called when the application
// starts listening on the given port 

// we have an environment varible name PORT
const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`listening on port ${port}`));