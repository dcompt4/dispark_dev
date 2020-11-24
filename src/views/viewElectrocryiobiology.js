var ViewElectrocryobiology = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.electrocryobiology(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});
