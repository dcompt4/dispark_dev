var ViewDispark = Backbone.View.extend({
    events: {


    },
    initialize: function() {


    },
    watchModel: function() {

    },
    render: function() {


        this.$el.html(Handlebars.templates.dispark(this.model.toJSON()));
        /*$.when(fade).done(function () {
            $("#tagcontent").fadeIn();
        });*/

        this.delegateEvents();
        this.menuSort();
        return this;
    },

    getData: function() {
        var self = this;
        var promise = new $.Deferred();

        self.model.fetch({

            processData: true,
            success: function(model, response){
                ////console.log("Application GET: ");
                ////console.log(model);
                ////console.log(response);



                promise.resolve();
                self.render();
                /*setTimeout(function(){

                    ////console.log("rendering..");
                }, 1000);*/

            }
        });

        return promise.promise();
    },

    getMyParks: function() {
        var self = this;
        var promise = new $.Deferred();

        self.model.save(null,{
            type: 'PUT',
            success: function(model, response) {

                self.render();

            },
            error: function (model, response) {

            }
        });

        return promise.promise();
    },

    menuSort: function () {
        var $sortables = $('.sortable');

        if ($sortables.length) {
            var Selector = {
                SORTABLE_ITEM: '.sortable-item',
                SORTABLE_CONTAINER: '.sortable-container',
                MENU: '.menu',
                ITEM: '.item'
            };
            var ClassName = {
                ACTIVE: 'active'
            };
            var DATA_KEY = {
                OPTIONS: 'options',
                FILTER_GROUP: 'filter-group',
                FILTER: 'filter'
            };
            $sortables.each(function (index, value) {
                var $sortable = $(value);
                var $masonryContainer = $sortable.find(Selector.SORTABLE_CONTAINER);
                var $menu = $sortable.find(Selector.MENU);
                $masonryContainer.isotope($.extend($sortable.data(DATA_KEY.OPTIONS) || {}, {
                    itemSelector: Selector.SORTABLE_ITEM,
                    masonry: {
                        columnWidth: Selector.SORTABLE_ITEM
                    }
                }));
                /*-----------------------------------------------
                |   Flatten object by concatting values
                -----------------------------------------------*/

                var concatValues = function concatValues(obj) {
                    return Object.keys(obj).map(function (key) {
                        return obj[key];
                    }).join();
                };
                /*-----------------------------------------------
                |   Store filter for each group
                -----------------------------------------------*/


                var filters = {};
                $menu.on('click', Selector.ITEM, function (e) {
                    var $masonryFilter = $(e.target);
                    filters[$masonryFilter.parent().data(DATA_KEY.FILTER_GROUP) || 0] = $masonryFilter.data(DATA_KEY.FILTER);
                    var filterValue = concatValues(filters);
                    $masonryFilter.siblings().removeClass(ClassName.ACTIVE);
                    $masonryFilter.addClass(ClassName.ACTIVE);
                    $masonryContainer.isotope({
                        filter: filterValue
                    });
                });
            });
        }
    }



});
