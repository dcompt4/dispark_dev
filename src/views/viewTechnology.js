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
