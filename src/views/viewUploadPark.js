var ViewUploadPark = Backbone.View.extend({
    events: {

        'click .savePark': 'addPark',


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.uploadPark(this.model.toJSON()));
        this.delegateEvents();
        return this;
    },

    addPark: function (e) {

        e.preventDefault();

        var self = this;

        var pavilions = 0;
        var tennis = 0;
        var baseball = 0;
        var soccer = 0;
        var basketball = 0;
        var pavilionsIsChecked = $('#pavilions').prop('checked');
        var tennisIsChecked = $('#tennis').prop('checked');
        var baseballIsChecked = $('#baseball').prop('checked');
        var soccerIsChecked = $('#soccer').prop('checked');
        var basketballIsChecked = $('#basketball').prop('checked');

        if(pavilionsIsChecked) {
            pavilions = 1;
        }
        if(tennisIsChecked) {
            tennis = 1;
        }
        if(baseballIsChecked) {
            baseball = 1;
        }
        if(soccerIsChecked) {
            soccer = 1;
        }
        if(basketballIsChecked) {
            basketball = 1;
        }

        var fd = new FormData();
        myFile = document.getElementById("parkImage").files[0];
        fd.append('fileToUpload', myFile);


        $.ajax({

            url: databaseUrl +'upload_parkImage.php',
            data: fd,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function (data) {
                console.log("Added Image");
                console.log(data);
                var results = JSON.parse(data);
                console.log(results);

                if (results.success === "success") {

                    park = {
                        parkName: $('#parkName').val(),
                        parkAddress: $('#parkAddress').val(),
                        parkBio: $('#parkBio').val(),
                        pavilions: pavilions,
                        tennis: tennis,
                        baseball: baseball,
                        soccer: soccer,
                        basketball: basketball,
                        parkImage: results.filepath,
                        // createdBy: $('#').val(),
                        // modifiedBy: $('#').val()

                    };

                    self.model.set('park', park);
                    /*self.model.set('postParam', 'addPersonnel');*/


                    self.model.save(null, {
                        processData: false,
                        contentType: false,
                        success: function (model, response) {
                            ////console.log("addPersonal New Person");
                            ////console.log(response);
                            // self.getData();
                            // $('#exampleModal').modal('hide');

                            // Clearing Personnel Form
                            $('#parkName').val('');
                            $('#parkAddress').val('');
                            $('#parkBio').val('');
                            $('#parkImage').val('');
                            document.getElementById('pavilions').checked = false;
                            document.getElementById('baseball').checked = false;
                            document.getElementById('tennis').checked = false;
                            document.getElementById('soccer').checked = false;
                            document.getElementById('basketball').checked = false;

                        },
                        error: function (model, response) {
                            ////console.log("Error adding User. User could already exist.");

                        }
                    });


                } else if (data == "error") {

                }


            }
        });





    },


});
