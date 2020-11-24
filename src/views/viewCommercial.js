var ViewCommercial = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.commercial(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});
