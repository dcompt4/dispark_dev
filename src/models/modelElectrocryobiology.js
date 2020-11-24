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
