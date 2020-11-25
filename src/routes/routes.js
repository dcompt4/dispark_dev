var AppRouter = Backbone.Router.extend({
    routes: {
        "": "showDispark",
        "/": "showDispark",
        "#": "showDispark"
        /*"technology": "showTechnology",*/
    },


    showDispark: function() {

        disparkViewPage.model.clear();
        disparkViewPage.model.fetch().done(function(){
            $("#tagcontent").html(disparkViewPage.render().el);
        });

        },
    /*
    showTechnology: function() {
        var prevURL = localStorage.getItem('prevURL');
        var historyArr = localStorage.getItem('historyArr');


        if(prevURL === "load" || historyArr === "technology"){

        }else{
            window.location.reload();
        }

            $("#tagcontent").html(technologyViewPage.render().el);

   },
    */


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

var disparkModelPage = null; //Holder for Model for Data
var disparkViewPage = null; // View for Page

/*var technologyModelPage = null; //Holder for Model for Data
var technologyViewPage = null; // View for Page*/


disparkModelPage = new ModelDispark();

disparkViewPage = new ViewDispark({
    model: disparkModelPage
});

/*technologyModelPage = new ModelTechnology();

technologyViewPage = new ViewTechnology({
    model: technologyModelPage
});*/


router = new AppRouter();

Backbone.emulateHTTP = true;
Backbone.history.start();
//})
