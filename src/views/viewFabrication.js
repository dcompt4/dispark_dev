var ViewFabrication = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.fabrication(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});
