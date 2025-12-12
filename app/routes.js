//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


// Prototype 1 - Country redirect
router.post('/prototype1/country', (req, res) => {
        if(req.session.data['country-check'] == 'scotland'){
    res.redirect('scotland')
        } else {
    res.redirect('reported-before')
    }   
});

// Prototype 1 - Reported them before check
router.post('/prototype1/reported-before', (req, res) => {
        if(req.session.data['reported-before-check'] == 'Yes'){
    res.redirect('new-information')
        } else {
    res.redirect('details')
    }   
});

// Prototype 1 - New information check
router.post('/prototype1/new-information', (req, res) => {
        if(req.session.data['new-information-check'] == 'Yes'){
    res.redirect('details')
        } else {
    res.redirect('dropout')
    }   
});


// Prototype 2 - Country redirect
router.post('/prototype2/country', (req, res) => {
        if(req.session.data['country-check'] == 'scotland'){
    res.redirect('scotland')
        } else {
    res.redirect('reported-before')
    }   
});

// Prototype 2 - Reported them before check
router.post('/prototype2/reported-before', (req, res) => {
        if(req.session.data['reported-before-check'] == 'Yes'){
    res.redirect('new-information')
        } else {
    res.redirect('details')
    }   
});

// Prototype 2 - New information check
router.post('/prototype2/new-information', (req, res) => {
        if(req.session.data['new-information-check'] == 'Yes'){
    res.redirect('details')
        } else {
    res.redirect('dropout')
    }   
});

