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
