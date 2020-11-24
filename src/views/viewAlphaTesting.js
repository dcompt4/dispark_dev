var ViewAlphaTesting = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.alphaTesting(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});
