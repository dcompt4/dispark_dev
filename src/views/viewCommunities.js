var ViewCommunities = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.communities(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});
