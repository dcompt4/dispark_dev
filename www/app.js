var database = {
    production: "https://alpha.aquaticgermplasm.com/php/",
//    stage:   "http://amsdev.ddns.net/stage/amsphp/",
//    prototype: "http://amsdev.ddns.net/prototype/amsphp/",
    local: "http://localhost:3434/",
//    deployedStage: 'http://amsdev.viewdns.net/app/stage/php/'
};

//var databaseUrl = database.local;
var databaseUrl = database.local;

var ModelAddPublications = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'addPublications.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelAGGRC = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'aggrc.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelAGGRCCreate = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'aggrcCreate.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelAlphaTesting = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'alphaTesting.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelBetaTesting = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'betaTesting.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelCadCam = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'cadCam.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelCareers = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'careers.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelCommercial = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'commercial.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelCommunities = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'communities.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelCurrentEvents = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'currentEvents.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelElectrocryobiology = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'electrocryobiology.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelFabrication = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'fabrication.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelForming = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'forming.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelMicrofabrication = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'microfabrication.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelMobileLaboratory = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'mobileLaboratory.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelOysterHatcheries = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'oysterHatcheries.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelPeople = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'people.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelPublications = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'publications.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {
        pdfdirlocation: databaseUrl + "uploads/publications/",

    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelResearch = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'research.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelRoots = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'roots.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelStrategies = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'strategies.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelStudents = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'students.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelTechnology = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'technology.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelTutorials = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'tutorials.php';


        return databaseUrl + script;
    },
    fetchCurrent: function(options){
        options = options || {};
        if (options.url === undefined){
            options.url = databaseUrl + options.scriptlocation + '?appID=' + options.appID;
        }

        return Backbone.Model.prototype.fetch.call(this, options);
    },
    saveOld: Backbone.Model.prototype.save,
    saveNew: function(options){




    },
    saveCurrent: function(options, obj){
        var deferredSave = new $.Deferred();
        options = options || {};
        if(options.url === undefined){
            options.url = databaseUrl + options.scriptlocation;
        }

        Backbone.Model.prototype.save.call(this, null, options).done(function(data, response){
            ////console.log(this);
            ////console.log(data);
            ////console.log(response);
            deferredSave.resolve(null, response);
        });



        return deferredSave.promise();
    },
    defaults: {


    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ViewAddPublications = Backbone.View.extend({
    events: {
        'click .application-row': 'applicationOptions',
        'click .save-journal-article': 'addJournalArticle',

    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {
        var self = this;

        this.$el.html(Handlebars.templates.addPublications(this.model.toJSON()));
        setTimeout(function(){
            self.initCKEditor();
            $(document).ready(function () {
                ////console.log('document ready');
                //self.stepperInit();
                //self.goToStepPosition();
            });
            self.delegateEvents();
        }, 1000);


        this.delegateEvents();
        return this;
    },
    applicationOptions: function(event){


        ////console.log($(event.target)[0].nodeName);

        if($(event.target)[0].nodeName === 'BUTTON' || $(event.target)[0].nodeName === 'I' || $(event.target)[0].nodeName === 'SPAN' ){
            return;
        }else if($(event.target)[0].nodeName === 'TD'){
            $(event.currentTarget).toggleClass('application-row-active');

            $(event.currentTarget).siblings().removeClass('application-row-active');

        }else{
            $('.btn-group-vertical').hide();
            $('.application-row').removeClass('application-row-active');
        }




        //////console.log(event.currentTarget);

    },
    getData: function() {
        var self = this;

        self.model.fetch({

            processData: true,
            success: function(model, response){
                ////console.log("Application GET: ");
                ////console.log(model);
                ////console.log(response);

                $("#tagcontent").html(addPublicationsViewPage.render().el);

            }
        });
    },
    initCKEditor: function () {
        var self = this;


        $('.ck-textarea').each(function () {
            //alert( this.id );
            var self = this;
            ////console.log(self.id);
            CKEDITOR.replace(self.id);


        });


        CKEDITOR.instances['blank-textarea'].on('instanceReady', function () {

           /* if (localStorage.getItem('iacuc_session_app')) {


                //self.getBloodDescription();
                //self.getRadiationDescription();
                //self.getExpSubDescription();
                //self.getAddDrugDescription();
                //self.getPainSpeciesDescription();
                //self.getAgentsDescription();
                //self.getEndStudyDescription();
                //self.getSpeciesGeneral();
                //self.getCertifications();

                self.getTransportDisplay();
                self.getStudyObjectivesDisplay();
                self.getRationaleDisplay();
                self.getSurgeryDisplay();
                self.getBiologicalDisplay();
                self.getGeneticDisplay();
                self.getExemptionDisplay();
                self.getConcernDisplay();
                self.getExperimentDisplay();
                self.getPainDisplay();
                self.getAastDisplay();
                self.getEndStudyDisplay();
                self.getHazardousAgentDisplay();
                self.getCertificationsDisplay();


            }
*/



        });


    },

    addJournalArticle: function (e) {

        e.preventDefault();

        var self = this;

        /*validation = true;

        var checkValidEmail = validateEmail($('#addPersonnelEmail').val());

        var checkRole = $('#addPersonnelRole').val();

        if (!checkValidEmail) {
            validation = false;
            $('#addPersonnelEmail').addClass('is-invalid');
        }

        if (checkRole == '' || checkRole === "") {
            validation = false;
            $('#addPersonnelRole').addClass('is-invalid');
        }

        if (!validation) {
            return;
        }
*/


            var fd = new FormData();
            myFile = document.getElementById("addJournalPDF").files[0];
            fd.append('fileToUpload', myFile);


            $.ajax({


                url: databaseUrl +'upload_journal.php',
                data: fd,
                processData: false,
                contentType: false,
                type: 'POST',
                success: function (data) {
                    console.log("Added PDF");
                    console.log(data);
                    var results = JSON.parse(data);
                    console.log(results);

                    if (results.success === "success") {

                        article = {
                            title: $('#articleTitle').val(),
                            journal: $('#journal').val(),
                            year: $('#journalYear').val(),
                            issue: $('#journalIssue').val(),
                            pages: $('#journalPages').val(),
                            keywords: $('#journalKeywords').val(),
                            abstractText: CKEDITOR.instances["journalAbstract-textarea"].getData(),
                            pdfname: document.getElementById('addJournalPDF').value.split('\\').pop().toString(),
                            pdfpath: results.filepath,


                        };

                        self.model.set('article', article);
                        /*self.model.set('postParam', 'addPersonnel');*/


                        self.model.save(null, {
                            processData: false,
                            contentType: false,
                            success: function (model, response) {
                                ////console.log("addPersonal New Person");
                                ////console.log(response);
                                self.getData();
                                $('#exampleModal').modal('hide');

                                // Clearing Personnel Form
                                $('#articleTitle').val('');
                                $('#journal').val('');
                                $('#journalYear').val('');
                                $('#journalIssue').val('');
                                $('#journalPages').val('');
                                $('#journalKeywords').val('');
                                $('#journalAbstract-textarea').val('');
                                $('#addJournalPDF').val('');



                            },
                            error: function (model, response) {
                                ////console.log("Error adding User. User could already exist.");

                            }
                        });


                    } else if (data == "error") {

                    }


                }
            });





    },



});

var ViewAGGRC = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.aggrc(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});

var ViewAGGRCCreate = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.aggrcCreate(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});

var ViewAlphaTesting = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.alphaTesting(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});

var ViewBetaTesting = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.betaTesting(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});

var ViewCadCam = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.cadCam(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});

var ViewCareers = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.careers(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});

var ViewCommercial = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.commercial(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});

var ViewCommunities = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.communities(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});

var ViewCurrentEvents = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.currentEvents(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});

var ViewElectrocryobiology = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.electrocryobiology(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});

var ViewFabrication = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.fabrication(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});

var ViewForming = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.forming(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});

var ViewMicrofabrication = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.microfabrication(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});

var ViewMobileLaboratory = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.mobileLaboratory(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});

var ViewOysterHatcheries = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.oysterHatcheries(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});

var ViewPeople = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.people(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }






});

var ViewPublications = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.publications(this.model.toJSON()));
        this.delegateEvents();
        return this;
    },
    getData: function() {
        var self = this;

        self.model.fetch({

            processData: true,
            success: function(model, response){
                ////console.log("Application GET: ");
                ////console.log(model);
                ////console.log(response);

                    $("#tagcontent").html(publicationsViewPage.render().el);


                /*setTimeout(function(){

                    ////console.log("rendering..");
                }, 1000);*/

            }
        });
    }






});

var ViewResearch = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.research(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});

var ViewRoots = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.roots(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});

var ViewStrategies = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.strategies(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});

var ViewStudents = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.students(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});

var ViewTechnology = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.technology(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});

var ViewTutorials = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.tutorials(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});

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
