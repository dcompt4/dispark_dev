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

        script = 'dispark.php';

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

        imageFolderPointer: databaseUrl + "uploads/park_images/",

    },
    initialize: function() {

        //this.defaults.pi.getPI();

    }




});

var ModelLogin = Backbone.Model.extend({
    urlRoot:function(scriptlocation, appID){

        script = 'login.php';


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
        /*$.when(fade).done(function () {
            $("#tagcontent").fadeIn();
        });*/

        this.delegateEvents();
        this.menuSort();
        return this;
    },

    getData: function() {
        var self = this;
        var promise = new $.Deferred();

        self.model.fetch({

            processData: true,
            success: function(model, response){
                ////console.log("Application GET: ");
                ////console.log(model);
                ////console.log(response);



                promise.resolve();
                self.render();
                /*setTimeout(function(){

                    ////console.log("rendering..");
                }, 1000);*/

            }
        });

        return promise.promise();
    },

    menuSort: function () {
        var $sortables = $('.sortable');

        if ($sortables.length) {
            var Selector = {
                SORTABLE_ITEM: '.sortable-item',
                SORTABLE_CONTAINER: '.sortable-container',
                MENU: '.menu',
                ITEM: '.item'
            };
            var ClassName = {
                ACTIVE: 'active'
            };
            var DATA_KEY = {
                OPTIONS: 'options',
                FILTER_GROUP: 'filter-group',
                FILTER: 'filter'
            };
            $sortables.each(function (index, value) {
                var $sortable = $(value);
                var $masonryContainer = $sortable.find(Selector.SORTABLE_CONTAINER);
                var $menu = $sortable.find(Selector.MENU);
                $masonryContainer.isotope($.extend($sortable.data(DATA_KEY.OPTIONS) || {}, {
                    itemSelector: Selector.SORTABLE_ITEM,
                    masonry: {
                        columnWidth: Selector.SORTABLE_ITEM
                    }
                }));
                /*-----------------------------------------------
                |   Flatten object by concatting values
                -----------------------------------------------*/

                var concatValues = function concatValues(obj) {
                    return Object.keys(obj).map(function (key) {
                        return obj[key];
                    }).join();
                };
                /*-----------------------------------------------
                |   Store filter for each group
                -----------------------------------------------*/


                var filters = {};
                $menu.on('click', Selector.ITEM, function (e) {
                    var $masonryFilter = $(e.target);
                    filters[$masonryFilter.parent().data(DATA_KEY.FILTER_GROUP) || 0] = $masonryFilter.data(DATA_KEY.FILTER);
                    var filterValue = concatValues(filters);
                    $masonryFilter.siblings().removeClass(ClassName.ACTIVE);
                    $masonryFilter.addClass(ClassName.ACTIVE);
                    $masonryContainer.isotope({
                        filter: filterValue
                    });
                });
            });
        }
    }



});

var ViewLogin = Backbone.View.extend({
    events: {

        'click .login': 'login',

    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.login(this.model.toJSON()));
        this.delegateEvents();
        return this;
    },

    login: function (e) {

        e.preventDefault();

        var self = this;

        loginData = {
            email: $('#email').val(),
            pword: $('#password').val(),
        };

        self.model.set('attempt', loginData);

        self.model.save(null,{
            type: 'POST',
            success: function(model, response) {
                localStorage.setItem('userData', JSON.stringify(response[0]));
                localStorage.setItem('loggedIn', '1');

                if(response.error) {
                    alert("Email and password combination are incorrect");
                } else {
                    window.location.href='#uploadPark';
                }


            },
            error: function (model, response) {

            }
        });




    },

});

var ViewUploadPark = Backbone.View.extend({
    events: {

        'click .savePark': 'addPark',


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.uploadPark(this.model.toJSON()));
        this.delegateEvents();
        return this;
    },

    addPark: function (e) {

        e.preventDefault();

        var self = this;

        var pavilions = 0;
        var tennis = 0;
        var baseball = 0;
        var soccer = 0;
        var basketball = 0;
        var pavilionsIsChecked = $('#pavilions').prop('checked');
        var tennisIsChecked = $('#tennis').prop('checked');
        var baseballIsChecked = $('#baseball').prop('checked');
        var soccerIsChecked = $('#soccer').prop('checked');
        var basketballIsChecked = $('#basketball').prop('checked');

        if(pavilionsIsChecked) {
            pavilions = 1;
        }
        if(tennisIsChecked) {
            tennis = 1;
        }
        if(baseballIsChecked) {
            baseball = 1;
        }
        if(soccerIsChecked) {
            soccer = 1;
        }
        if(basketballIsChecked) {
            basketball = 1;
        }

        var fd = new FormData();
        myFile = document.getElementById("parkImage").files[0];
        fd.append('fileToUpload', myFile);


        $.ajax({

            url: databaseUrl +'upload_parkImage.php',
            data: fd,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function (data) {
                console.log("Added Image");
                console.log(data);
                var results = JSON.parse(data);
                console.log(results);

                if (results.success === "success") {

                    park = {
                        parkName: $('#parkName').val(),
                        parkAddress: $('#parkAddress').val(),
                        parkBio: $('#parkBio').val(),
                        pavilions: pavilions,
                        tennis: tennis,
                        baseball: baseball,
                        soccer: soccer,
                        basketball: basketball,
                        parkImage: results.filepath,
                        // createdBy: $('#').val(),
                        // modifiedBy: $('#').val()

                    };

                    self.model.set('park', park);
                    /*self.model.set('postParam', 'addPersonnel');*/


                    self.model.save(null, {
                        processData: false,
                        contentType: false,
                        success: function (model, response) {
                            ////console.log("addPersonal New Person");
                            ////console.log(response);
                            // self.getData();
                            // $('#exampleModal').modal('hide');

                            // Clearing Personnel Form
                            $('#parkName').val('');
                            $('#parkAddress').val('');
                            $('#parkBio').val('');
                            $('#parkImage').val('');
                            document.getElementById('pavilions').checked = false;
                            document.getElementById('baseball').checked = false;
                            document.getElementById('tennis').checked = false;
                            document.getElementById('soccer').checked = false;
                            document.getElementById('basketball').checked = false;

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

var AppRouter = Backbone.Router.extend({
    routes: {
        "": "showDispark",
        "/": "showDispark",
        "#": "showDispark",
        "uploadPark": "showUploadPark",
        "login": "showLogin"
    },


    showDispark: function () {

        disparkViewPage.model.clear().set(disparkViewPage.model.defaults);
        if(localStorage.getItem('loggedIn') !== null) {
            disparkViewPage.model.set('userID', JSON.parse(localStorage.getItem('userData')).userID);
            disparkViewPage.model.set('email', JSON.parse(localStorage.getItem('userData')).email);
            disparkViewPage.model.set('loggedIn', JSON.parse(localStorage.getItem('loggedIn')));
        }

        disparkViewPage.getData().done(function () {
            /*var prevURL = localStorage.getItem('prevURL');
            var historyArr = localStorage.getItem('historyArr');


            if (prevURL === "load" || historyArr === " ") {

            } else {
                window.location.reload();
            }*/


            /*fade = new $.Deferred();
            $("#tagcontent").fadeOut(function () {
                fade.resolve();
                $("#tagcontent").html(disparkViewPage.render().el);
            });*/
            /*setTimeout(function () {
                $("#tagcontent").html(disparkViewPage.render().el);
            }, 3000);*/
        });

        $("#tagcontent").html(disparkViewPage.render().el);


    },

    showUploadPark: function() {

        uploadParkViewPage.model.clear();

        if(localStorage.getItem('loggedIn') === null) {
            window.location.href = '# ';
        }

        uploadParkViewPage.model.set('userID', JSON.parse(localStorage.getItem('userData')).userID);
        uploadParkViewPage.model.set('email', JSON.parse(localStorage.getItem('userData')).email);
        uploadParkViewPage.model.set('loggedIn', JSON.parse(localStorage.getItem('loggedIn')));

        $("#tagcontent").html(uploadParkViewPage.render().el);

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
