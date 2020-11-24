var ViewStudents = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.students(this.model.toJSON()));
        this.delegateEvents();
        return this;
    }





});
