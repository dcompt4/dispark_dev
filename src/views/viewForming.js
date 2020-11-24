var ViewForming = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.forming(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});
