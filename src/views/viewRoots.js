var ViewRoots = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.roots(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});
