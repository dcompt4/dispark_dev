var ViewCareers = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.careers(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});
