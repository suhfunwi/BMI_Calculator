const express = require('express')
const router = express.Router()
//figures out what code to run in response to a request
//typically based on url and the method, GET, POST, etc.
router.get('/', function(req, res, next){
    //responds to get request to home page
    //request, response, next
    res.render('index',
        {title: 'Body Mass Index Form',
            author: 'Suh',
            timePageLoadedAt: new Date()
        })
    //name of handlebars file
    //render means generate HTML
    //this function responds to get requests
})
//get request to the home page
//next is used to pass the response on to something else
// that can handle it if the data is invalid or something

router.get('/BMI-form', function (req, res, next){
    res.render('BMI_form')
})

router.post('/submit-data', function (req, res, next){
    //access form data
    // const formData = req.query //for a GET request - read the URL query
    const formData = req.body // for a POST request
    console.log(formData)

    //automatically email someone when feedback is submitted
    res.render('thank_you', {
        height: formData.height,
        weight: formData.weight,
    })
})
module.exports = router
//return router to whatever else needs this file
//needs to always be the very last line in the file