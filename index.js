const Joi = require('joi'); // it is an class
const express = require('express'); // it is an class
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
    // you should never trust client, you should always validate the input
    const {error} /*object destructuring equivalent to get result.error*/ = validateCourse(req.body);
    //console.log(result);
    
    
    if(error){
        // 400 bad request
        res.status(400).send(error.details[0].message);
        return; // to end 
    }
    const course = {
        id: courses.length+1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id',(req,res) => {
    // loook up the couse
    // if not existing, return 404 means resource not found
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course)  {
        res.status(404).send('invlaid course ID');
        return;
    }
    // validate
    // if invalid, return 400 means bad request
    const { error } /*object destructuring equivalent to get result.error*/ = validateCourse(req.body);

    if(error) return res.status(400).send(error.details[0].message);
        

    // update course
    course.name = req.body.name;
    // return the updated course
    res.send(course);

});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
};

app.delete('/api/courses/:id', (req,res) => {
    // look up the course
    // not exsting, retun 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('invlaid course ID');
        

    // delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // return the same course
    res.send(course);
});


// setting up the app to listen on
// optionall we can pass function that would be called when the application
// starts listening on the given port 

// we have an environment varible name PORT
const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`listening on port ${port}`));