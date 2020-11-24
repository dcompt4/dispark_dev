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
