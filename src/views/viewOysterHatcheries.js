var ViewOysterHatcheries = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.oysterHatcheries(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});
