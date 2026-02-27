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
        if(req.session.data['country-check'] == 'Scotland'){
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

// Prototype 2 - Address branch
router.post('/prototype2/address-known', (req, res) => {
        if(req.session.data['address-known'] == 'Yes'){
    res.redirect('address-search')
        } else {
    res.redirect('fraud-type')
    }   
});

// Prototype 2 - Partner address branch
router.post('/prototype2/partner-address-known', (req, res) => {
        if(req.session.data['partner-address-known'] == 'Yes, I know the address'){
    res.redirect('partner-address-search')
        } else {
    res.redirect('partner-working-branch')
    }   
});

// Prototype 2 - Partner address branch
router.post('/prototype2/partner-working', (req, res) => {
        if(req.session.data['partner-working'] == 'Yes'){
    res.redirect('living-with-partner-work')
        } else {
    res.redirect('additional-information-living-with-partner')
    }   
});


// Prototype 2 - Fraud type checkboxes redirects
router.post('/prototype2/fraud-types-check', function(request, response) {

	var fraudtypes = request.session.data['fraudtypes']
	if (fraudtypes.includes("working-claiming")){
		response.redirect("working-and-claiming-benefits")
	} 
    else if (fraudtypes.includes("living-with-partner")){
		response.redirect("living-with-partner-about-partner")
    }
    else if (fraudtypes.includes("disability")){
		response.redirect("disability")
    }
    else {
		response.redirect("fraud-type")
	}
})

