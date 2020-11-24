var ViewAddPublications = Backbone.View.extend({
    events: {
        'click .application-row': 'applicationOptions',
        'click .save-journal-article': 'addJournalArticle',

    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {
        var self = this;

        this.$el.html(Handlebars.templates.addPublications(this.model.toJSON()));
        setTimeout(function(){
            self.initCKEditor();
            $(document).ready(function () {
                ////console.log('document ready');
                //self.stepperInit();
                //self.goToStepPosition();
            });
            self.delegateEvents();
        }, 1000);


        this.delegateEvents();
        return this;
    },
    applicationOptions: function(event){


        ////console.log($(event.target)[0].nodeName);

        if($(event.target)[0].nodeName === 'BUTTON' || $(event.target)[0].nodeName === 'I' || $(event.target)[0].nodeName === 'SPAN' ){
            return;
        }else if($(event.target)[0].nodeName === 'TD'){
            $(event.currentTarget).toggleClass('application-row-active');

            $(event.currentTarget).siblings().removeClass('application-row-active');

        }else{
            $('.btn-group-vertical').hide();
            $('.application-row').removeClass('application-row-active');
        }




        //////console.log(event.currentTarget);

    },
    getData: function() {
        var self = this;

        self.model.fetch({

            processData: true,
            success: function(model, response){
                ////console.log("Application GET: ");
                ////console.log(model);
                ////console.log(response);

                $("#tagcontent").html(addPublicationsViewPage.render().el);

            }
        });
    },
    initCKEditor: function () {
        var self = this;


        $('.ck-textarea').each(function () {
            //alert( this.id );
            var self = this;
            ////console.log(self.id);
            CKEDITOR.replace(self.id);


        });


        CKEDITOR.instances['blank-textarea'].on('instanceReady', function () {

           /* if (localStorage.getItem('iacuc_session_app')) {


                //self.getBloodDescription();
                //self.getRadiationDescription();
                //self.getExpSubDescription();
                //self.getAddDrugDescription();
                //self.getPainSpeciesDescription();
                //self.getAgentsDescription();
                //self.getEndStudyDescription();
                //self.getSpeciesGeneral();
                //self.getCertifications();

                self.getTransportDisplay();
                self.getStudyObjectivesDisplay();
                self.getRationaleDisplay();
                self.getSurgeryDisplay();
                self.getBiologicalDisplay();
                self.getGeneticDisplay();
                self.getExemptionDisplay();
                self.getConcernDisplay();
                self.getExperimentDisplay();
                self.getPainDisplay();
                self.getAastDisplay();
                self.getEndStudyDisplay();
                self.getHazardousAgentDisplay();
                self.getCertificationsDisplay();


            }
*/



        });


    },

    addJournalArticle: function (e) {

        e.preventDefault();

        var self = this;

        /*validation = true;

        var checkValidEmail = validateEmail($('#addPersonnelEmail').val());

        var checkRole = $('#addPersonnelRole').val();

        if (!checkValidEmail) {
            validation = false;
            $('#addPersonnelEmail').addClass('is-invalid');
        }

        if (checkRole == '' || checkRole === "") {
            validation = false;
            $('#addPersonnelRole').addClass('is-invalid');
        }

        if (!validation) {
            return;
        }
*/


            var fd = new FormData();
            myFile = document.getElementById("addJournalPDF").files[0];
            fd.append('fileToUpload', myFile);


            $.ajax({


                url: databaseUrl +'upload_journal.php',
                data: fd,
                processData: false,
                contentType: false,
                type: 'POST',
                success: function (data) {
                    console.log("Added PDF");
                    console.log(data);
                    var results = JSON.parse(data);
                    console.log(results);

                    if (results.success === "success") {

                        article = {
                            title: $('#articleTitle').val(),
                            journal: $('#journal').val(),
                            year: $('#journalYear').val(),
                            issue: $('#journalIssue').val(),
                            pages: $('#journalPages').val(),
                            keywords: $('#journalKeywords').val(),
                            abstractText: CKEDITOR.instances["journalAbstract-textarea"].getData(),
                            pdfname: document.getElementById('addJournalPDF').value.split('\\').pop().toString(),
                            pdfpath: results.filepath,


                        };

                        self.model.set('article', article);
                        /*self.model.set('postParam', 'addPersonnel');*/


                        self.model.save(null, {
                            processData: false,
                            contentType: false,
                            success: function (model, response) {
                                ////console.log("addPersonal New Person");
                                ////console.log(response);
                                self.getData();
                                $('#exampleModal').modal('hide');

                                // Clearing Personnel Form
                                $('#articleTitle').val('');
                                $('#journal').val('');
                                $('#journalYear').val('');
                                $('#journalIssue').val('');
                                $('#journalPages').val('');
                                $('#journalKeywords').val('');
                                $('#journalAbstract-textarea').val('');
                                $('#addJournalPDF').val('');



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
