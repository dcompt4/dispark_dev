var ViewCurrentEvents = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.currentEvents(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});
