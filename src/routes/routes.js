var AppRouter = Backbone.Router.extend({
    routes: {
        "": "showAGGRC",
        "/": "showAGGRC",
        "#": "showAGGRC",
        "technology": "showTechnology",
        "research": "showResearch",
        "communities": "showCommunities",
        "commercial": "showCommercial",
        "strategies": "showStrategies",
        "alphaTesting": "showAlphaTesting",
        "betaTesting": "showBetaTesting",
        "tutorials": "showTutorials",
        "cadCam": "showCadCam",
        "microfabrication": "showMicrofabrication",
        "forming": "showForming",
        "electrocryobiology": "showElectrocryobiology",
        "careers": "showCareers",
        "currentEvents": "showCurrentEvents",
        "mobileLaboratory": "showMobileLaboratory",
        "oysterHatcheries": "showOysterHatcheries",
        "people": "showPeople",
        "publications": "showPublications",
        "roots": "showRoots",
        "students": "showStudents",
        "fabrication": "showFabrication",





        "aggrcCreate": "showAGGRCCreate",
        "addPublications": "showAddPublications"
    },


    showAGGRC: function() {
        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === " "){

        }else{
            window.location.reload();
        }


        //peopleViewPage.reload();


            $("#tagcontent").html(aggrcViewPage.render().el);


   },
    showAGGRCCreate: function() {

        $("#tagcontent").html(aggrcCreateViewPage.render().el);

  },

    showTechnology: function() {
        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "technology"){

        }else{
            window.location.reload();
        }

            $("#tagcontent").html(technologyViewPage.render().el);

   },
    showResearch: function() {

        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "research"){

        }else{
            window.location.reload();
        }

        $("#tagcontent").html(researchViewPage.render().el);

    },
    showCommunities: function() {

        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "communities"){

        }else{
            window.location.reload();
        }

        $("#tagcontent").html(communitiesViewPage.render().el);

    },
    showCommercial: function() {

        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "commercial"){

        }else{
            window.location.reload();
        }

        $("#tagcontent").html(commercialViewPage.render().el);

    },
    showStrategies: function() {

        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "strategies"){

        }else{
            window.location.reload();
        }

        $("#tagcontent").html(strategiesViewPage.render().el);

    },
    showAlphaTesting: function() {

        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "alphaTesting"){

        }else{
            window.location.reload();
        }

        $("#tagcontent").html(alphaTestingViewPage.render().el);

    },
    showBetaTesting: function() {

        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "betaTesting"){

        }else{
            window.location.reload();
        }

        $("#tagcontent").html(betaTestingViewPage.render().el);

    },
    showTutorials: function() {

        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "tutorials"){

        }else{
            window.location.reload();
        }

        $("#tagcontent").html(tutorialsViewPage.render().el);

    },
    showCadCam: function() {

        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "cadCam"){

        }else{
            window.location.reload();
        }

        $("#tagcontent").html(cadCamViewPage.render().el);

    },
    showMicrofabrication: function() {

        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "microfabrication"){

        }else{
            window.location.reload();
        }

        $("#tagcontent").html(microfabricationViewPage.render().el);

    },
    showForming: function() {

        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "forming"){

        }else{
            window.location.reload();
        }

        $("#tagcontent").html(formingViewPage.render().el);

    },
    showElectrocryobiology: function() {

        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "electrocryobiology"){

        }else{
            window.location.reload();
        }

        $("#tagcontent").html(electrocryobiologyViewPage.render().el);

    },
    showCareers: function() {

        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "careers"){

        }else{
            window.location.reload();
        }

        $("#tagcontent").html(careersViewPage.render().el);

    },
    showCurrentEvents: function() {

        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "currentEvents"){

        }else{
            window.location.reload();
        }

        $("#tagcontent").html(currentEventsViewPage.render().el);

    },
    showMobileLaboratory: function() {

        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "mobileLaboratory"){

        }else{
            window.location.reload();
        }

        $("#tagcontent").html(mobileLaboratoryViewPage.render().el);

    },
    showOysterHatcheries: function() {

        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "oysterHatcheries"){

        }else{
            window.location.reload();
        }

        $("#tagcontent").html(oysterHatcheriesViewPage.render().el);

    },
    showPeople: function() {

        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "people"){

        }else{
            window.location.reload();
        }


       //peopleViewPage.reload();

        $("#tagcontent").html(peopleViewPage.render().el);


    },
    showPublications: function() {

        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "publications"){

        }else{
            window.location.reload();
        }

        var pubFilters = false;
        publicationsViewPage.model.clear().set(publicationsViewPage.model.defaults);
        publicationsViewPage.model.set('pubFilters', pubFilters);
        publicationsViewPage.getData();

    },
    showAddPublications: function() {

        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "addPublications"){

        }else{
            window.location.reload();
        }

        addPublicationsViewPage.model.clear().set(addPublicationsViewPage.model.defaults);
        addPublicationsViewPage.getData();


    },
    showRoots: function() {

        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "roots"){

        }else{
            window.location.reload();
        }

        $("#tagcontent").html(rootsViewPage.render().el);

    },
    showStudents: function() {

        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "students"){

        }else{
            window.location.reload();
        }

        $("#tagcontent").html(studentsViewPage.render().el);

    },
    showFabrication: function() {

        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "fabrication"){

        }else{
            window.location.reload();
        }

        $("#tagcontent").html(fabricationViewPage.render().el);

    },
    execute: function(callback, args){

        var locationArr = localStorage.getItem('historyArr');
        locationArr = locationArr.split(",");

        localStorage.setItem("prevURL", locationArr[locationArr.length - 1] );

        locationArr.push(Backbone.history.fragment);

        localStorage.setItem('historyArr',  locationArr.toString());






        if (callback) callback.apply(this, args);

    }

});
var historyArr = ['load'];
localStorage.setItem('historyArr', historyArr.toString());


/* Global Variables */

var router = null; //Router

var fade = null; // Fade in Option

var aggrcModelPage = null; //Holder for Model for Data
var aggrcViewPage = null; // View for Page

var aggrcCreateModelPage = null; //Holder for Model for Data
var aggrcCreateViewPage = null; // View for Page

var addPublicationsModelPage = null; //Holder for Model for Data
var addPublicationsViewPage = null; // View for Page


var technologyModelPage = null; //Holder for Model for Data
var technologyViewPage = null; // View for Page

var researchModelPage = null; //Holder for Model for Data
var researchViewPage = null; // View for Page

var communitiesModelPage = null; //Holder for Model for Data
var communitiesViewPage = null; // View for Page

var commercialModelPage = null; //Holder for Model for Data
var commercialViewPage = null; // View for Page

var strategiesModelPage = null; //Holder for Model for Data
var strategiesViewPage = null; // View for Page


var alphaTestingModelPage = null; //Holder for Model for Data
var alphaTestingViewPage = null; // View for Page

var betaTestingModelPage = null; //Holder for Model for Data
var betaTestingViewPage = null; // View for Page

var tutorialsModelPage = null; //Holder for Model for Data
var tutorialsViewPage = null; // View for Page

var cadCamModelPage = null; //Holder for Model for Data
var cadCamViewPage = null; // View for Page

var microfabricationModelPage = null; //Holder for Model for Data
var microfabricationViewPage = null; // View for Page

var formingModelPage = null; //Holder for Model for Data
var formingViewPage = null; // View for Page

var electrocryobiologyModelPage = null; //Holder for Model for Data
var electrocryobiologyViewPage = null; // View for Page

var careersModelPage = null; //Holder for Model for Data
var careersViewPage = null; // View for Page

var currentEventsModelPage = null; //Holder for Model for Data
var currentEventsViewPage = null; // View for Page

var mobileLaboratoryModelPage = null; //Holder for Model for Data
var mobileLaboratoryViewPage = null; // View for Page

var oysterHatcheriesModelPage = null; //Holder for Model for Data
var oysterHatcheriesViewPage = null; // View for Page

var peopleModelPage = null; //Holder for Model for Data
var peopleViewPage = null; // View for Page

var publicationsModelPage = null; //Holder for Model for Data
var publicationsViewPage = null; // View for Page

var rootsModelPage = null; //Holder for Model for Data
var rootsViewPage = null; // View for Page

var studentsModelPage = null; //Holder for Model for Data
var studentsViewPage = null; // View for Page

var fabricationModelPage = null; //Holder for Model for Data
var fabricationViewPage = null; // View for Page


aggrcModelPage = new ModelAGGRC();

aggrcViewPage = new ViewAGGRC({
    model: aggrcModelPage
});

aggrcCreateModelPage = new ModelAGGRCCreate();

aggrcCreateViewPage = new ViewAGGRCCreate({
    model: aggrcCreateModelPage
});

addPublicationsModelPage = new ModelAddPublications();

addPublicationsViewPage = new ViewAddPublications({
    model: addPublicationsModelPage
});

technologyModelPage = new ModelTechnology();

technologyViewPage = new ViewTechnology({
    model: technologyModelPage
});

researchModelPage = new ModelResearch();

researchViewPage = new ViewResearch({
    model: researchModelPage
});

communitiesModelPage = new ModelCommunities();

communitiesViewPage = new ViewCommunities({
    model: communitiesModelPage
});

commercialModelPage = new ModelCommercial();

commercialViewPage = new ViewCommercial({
    model: commercialModelPage
});

strategiesModelPage = new ModelStrategies();

strategiesViewPage = new ViewStrategies({
    model: strategiesModelPage
});

alphaTestingModelPage = new ModelAlphaTesting();

alphaTestingViewPage = new ViewAlphaTesting({
    model: alphaTestingModelPage
});

betaTestingModelPage = new ModelBetaTesting();

betaTestingViewPage = new ViewBetaTesting({
    model: betaTestingModelPage
});

tutorialsModelPage = new ModelTutorials();

tutorialsViewPage = new ViewTutorials({
    model: tutorialsModelPage
});

cadCamModelPage = new ModelCadCam();

cadCamViewPage = new ViewCadCam({
    model: cadCamModelPage
});

microfabricationModelPage = new ModelMicrofabrication();

microfabricationViewPage = new ViewMicrofabrication({
    model: microfabricationModelPage
});

formingModelPage = new ModelForming();

formingViewPage = new ViewForming({
    model: formingModelPage
});

electrocryobiologyModelPage = new ModelElectrocryobiology();

electrocryobiologyViewPage = new ViewElectrocryobiology({
    model: electrocryobiologyModelPage
});

careersModelPage = new ModelCareers();

careersViewPage = new ViewCareers({
    model: careersModelPage
});

currentEventsModelPage = new ModelCurrentEvents();

currentEventsViewPage = new ViewCurrentEvents({
    model: currentEventsModelPage
});

mobileLaboratoryModelPage = new ModelMobileLaboratory();

mobileLaboratoryViewPage = new ViewMobileLaboratory({
    model: mobileLaboratoryModelPage
});

oysterHatcheriesModelPage = new ModelOysterHatcheries();

oysterHatcheriesViewPage = new ViewOysterHatcheries({
    model: oysterHatcheriesModelPage
});

peopleModelPage = new ModelPeople();

peopleViewPage = new ViewPeople({
    model: peopleModelPage
});

publicationsModelPage = new ModelPublications();

publicationsViewPage = new ViewPublications({
    model: publicationsModelPage
});

rootsModelPage = new ModelRoots();

rootsViewPage = new ViewRoots({
    model: rootsModelPage
});

studentsModelPage = new ModelStudents();

studentsViewPage = new ViewStudents({
    model: studentsModelPage
});

fabricationModelPage = new ModelFabrication();

fabricationViewPage = new ViewFabrication({
    model: fabricationModelPage
});


router = new AppRouter();

Backbone.emulateHTTP = true;
Backbone.history.start();
//})
