var ViewStrategies = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.strategies(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});
