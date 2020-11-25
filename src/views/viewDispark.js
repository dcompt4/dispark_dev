var ViewDispark = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.dispark(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }

});
