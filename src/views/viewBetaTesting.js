var ViewBetaTesting = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.betaTesting(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});
