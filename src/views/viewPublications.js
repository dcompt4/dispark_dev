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
