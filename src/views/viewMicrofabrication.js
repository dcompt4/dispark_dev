var ViewMicrofabrication = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.microfabrication(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});
