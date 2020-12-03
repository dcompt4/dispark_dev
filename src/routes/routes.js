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
