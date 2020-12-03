var ViewLogin = Backbone.View.extend({
    events: {

        'click .login': 'login',

    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.login(this.model.toJSON()));
        this.delegateEvents();
        return this;
    },

    login: function (e) {

        e.preventDefault();

        var self = this;

        loginData = {
            email: $('#email').val(),
            pword: $('#password').val(),
        };

        self.model.set('attempt', loginData);

        self.model.save(null,{
            type: 'POST',
            success: function(model, response) {
                localStorage.setItem('userData', JSON.stringify(response[0]));
                localStorage.setItem('loggedIn', '1');

                if(response.error) {
                    alert("Email and password combination are incorrect");
                } else {
                    window.location.href='#uploadPark';
                }


            },
            error: function (model, response) {

            }
        });




    },

});
