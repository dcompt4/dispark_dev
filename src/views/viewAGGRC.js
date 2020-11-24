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
