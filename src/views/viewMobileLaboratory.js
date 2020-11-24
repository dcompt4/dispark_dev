var ViewMobileLaboratory = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.mobileLaboratory(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});
