var ViewAGGRCCreate = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.aggrcCreate(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});
