var database = {
    production: "https://alpha.aquaticgermplasm.com/php/",
//    stage:   "http://amsdev.ddns.net/stage/amsphp/",
//    prototype: "http://amsdev.ddns.net/prototype/amsphp/",
    local: "http://localhost:3434/",
//    deployedStage: 'http://amsdev.viewdns.net/app/stage/php/'
};

//var databaseUrl = database.local;
var databaseUrl = database.local;

var ModelDispark = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'users.php';


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

var ModelLogin = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'uploadPark.php';


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

var ModelUploadPark = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'uploadPark.php';


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

var ViewDispark = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.dispark(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }

});

var ViewLogin = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.login(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }

});

var ViewUploadPark = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.uploadPark(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }

});

var AppRouter = Backbone.Router.extend({
    routes: {
        "": "showDispark",
        "/": "showDispark",
        "#": "showDispark",
        "uploadPark": "showUploadPark",
        "login": "showLogin"
    },


    showDispark: function () {

        disparkViewPage.model.clear();
        disparkViewPage.model.fetch().done(function () {
            var prevURL = localStorage.getItem('prevURL');
            var historyArr = localStorage.getItem('historyArr');


            if (prevURL === "load" || historyArr === " ") {

            } else {
                window.location.reload();
            }

        });

        $("#tagcontent").html(disparkViewPage.render().el);

    },

    showUploadPark: function() {
        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "uploadPark"){

        }else{
            window.location.reload();
        }

        disparkViewPage.model.clear();
        disparkViewPage.model.fetch().done(function () {
            $("#tagcontent").html(uploadParkViewPage.render().el);
        });
   },

    showLogin: function() {
        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "login"){

        }else{
            window.location.reload();
        }

        disparkViewPage.model.clear();
        disparkViewPage.model.fetch().done(function () {
            $("#tagcontent").html(loginViewPage.render().el);
        });
    },



    execute: function (callback, args) {

        var locationArr = localStorage.getItem('historyArr');
        locationArr = locationArr.split(",");

        localStorage.setItem("prevURL", locationArr[locationArr.length - 1]);

        locationArr.push(Backbone.history.fragment);

        localStorage.setItem('historyArr', locationArr.toString());

        if (callback) callback.apply(this, args);

    }

});

var historyArr = ['load'];
localStorage.setItem('historyArr', historyArr.toString());

/* Global Variables */

var router = null; //Router

var fade = null; // Fade in Option

var disparkModelPage = null; //Holder for Model for Data
var disparkViewPage = null; // View for Page

var uploadParkModelPage = null; //Holder for Model for Data
var uploadParkViewPage = null; // View for Page

var loginModelPage = null; //Holder for Model for Data
var loginViewPage = null; // View for Page


disparkModelPage = new ModelDispark();

disparkViewPage = new ViewDispark({
    model: disparkModelPage
});

uploadParkModelPage = new ModelUploadPark();

uploadParkViewPage = new ViewUploadPark({
    model: uploadParkModelPage
});

loginModelPage = new ModelLogin();

loginViewPage = new ViewLogin({
    model: loginModelPage
});


router = new AppRouter();

Backbone.emulateHTTP = true;
Backbone.history.start();
//})
