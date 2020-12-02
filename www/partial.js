Handlebars.registerPartial("footer", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- ============================================-->\r\n<!-- <Footer section> begin ============================-->\r\n<section class=\"text-center bg-black py-3 dispark-nav\">\r\n\r\n    <div class=\"container dispark-nav\">\r\n        <div class=\"row justify-content-between\">\r\n\r\n\r\n            <div class=\"col-6\">\r\n                <div class=\"\">\r\n                    <h2 class=\"mb-0\" style=\"color: #5f656c; font-weight: bold\" align=\"center\">Team Members</h2>\r\n                </div>\r\n                <br>\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                        <p class=\"mb-0\" align=\"left\">Dean Compton<br></p>\r\n                        <div class=\"\" align=\"left\">\r\n                            <div class=\"row col-12\">\r\n                                <div class=\"col-2\">\r\n                                    <span class=\"far fa-envelope\"></span>\r\n                                </div>\r\n                                <p>dcompt4@lsu.edu</p>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <p class=\"mb-0\" align=\"left\">Vaughn Ohlerking<br></p>\r\n                        <div class=\"\" align=\"left\">\r\n                            <div class=\"row col-12\">\r\n                                <div class=\"col-2\">\r\n                                    <span class=\"far fa-envelope\"></span>\r\n                                </div>\r\n                                <p>vohler1@lsu.edu</p>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <p class=\"mb-0\" align=\"left\">Kendall Comeaux<br></p>\r\n                        <div class=\"\" align=\"left\">\r\n                            <div class=\"row col-12\">\r\n                                <div class=\"col-2\">\r\n                                    <span class=\"far fa-envelope\"></span>\r\n                                </div>\r\n                                <p>kcome26@lsu.edu</p>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <p class=\"mb-0\" align=\"left\">Braylon Frederic<br></p>\r\n                        <div class=\"\" align=\"left\">\r\n                            <div class=\"row col-12\">\r\n                                <div class=\"col-2\">\r\n                                    <span class=\"far fa-envelope\"></span>\r\n                                </div>\r\n                                <p>bfrede8@lsu.edu</p>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"col-6\">\r\n                <div class=\"\">\r\n                    <h2 class=\"mb-0\" style=\"color: #5f656c; font-weight: bold\" align=\"center\">About the Team</h2>\r\n                </div>\r\n                <br>\r\n                <div class=\"\">\r\n                    <p class=\"lead\" align=\"left\">\r\n                        The Dispark developer team created Dispark as a way for people to easily and simply schedule\r\n                        rentals without bothering park workers. The software aims to relieve park owners and park users\r\n                        of the mundane task of scheduling rentals. The team that brought this to you is a group of four\r\n                        junior-year Computer Science students working together on this software for our 3380 class.\r\n\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <br><br>\r\n\r\n            <div class=\"col-6 col-md-6 mb-1 mb-md-0\" align=\"left\">\r\n                <p class=\"mb-0\">Dispark &copy; 2020<span class=\"mx-2\">|</span><span\r\n                        class=\"text-900 hover-color-white\">\r\n                <!--v4.0.1-->v1.0.0</span></p>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n    <!-- end of .container-->\r\n\r\n</section>\r\n<!-- <section> close ============================-->\r\n<!-- ============================================-->\r\n\r\n<a class=\"btn-back-to-top\" href=\"#top\" data-fancyscroll><img src=\"../assets/img/line-icons/upload-arrow.svg\" width=\"8\"\r\n                                                             alt=\"\"></a>\r\n\r\n\r\n<!-- javascript -->\r\n<!-- ===============================================-->\r\n<!--    JavaScripts-->\r\n<!-- ===============================================-->\r\n\r\n<script src=\"reign_js/theme.js\"></script>\r\n";
},"useData":true}));
Handlebars.registerPartial("nav", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav class=\"navbar navbar-expand-xl navbar-light bg-light py-0 fixed-top dispark-nav\">\r\n    <div class=\"container-fluid px-3 dispark-nav\">\r\n\r\n        <a class=\"navbar-brand font-weight ls-1 lead\" href=\"#login\">\r\n            Dispark\r\n            <!--<img src=\"\" alt=\"logo\" style=\"width: 150px\">-->\r\n        </a>\r\n\r\n        <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\"\r\n                aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span></button>\r\n\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" href=\"#\">Parks</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n    </div>\r\n</nav>\r\n";
},"useData":true}));
Handlebars.registerPartial("navCreate", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav class=\"navbar navbar-expand-xl navbar-light bg-light py-0 fixed-top dispark-nav\">\r\n    <div class=\"container-fluid px-3 dispark-nav\">\r\n\r\n        <a class=\"navbar-brand font-weight ls-1 lead\" href=\"#\">\r\n            Dispark Administrator\r\n            <!--<img src=\"\" alt=\"logo\" style=\"width: 150px\">-->\r\n        </a>\r\n\r\n        <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\"\r\n                aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span></button>\r\n\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" href=\"#uploadPark\">Upload Park</a>\r\n                </li>\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" href=\"#\">My Parks</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n    </div>\r\n</nav>\r\n";
},"useData":true}));