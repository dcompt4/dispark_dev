var ViewLogin = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.login(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }

});
