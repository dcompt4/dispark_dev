var ViewResearch = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.research(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});
