(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['page1'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"branding\">\n  <img src=\"./images/logo.png\" width=\"225\" />\n  <h1>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n</div>\n<div class=\"actions\">\n  <button onclick=\"window.location.href = '#counter'\" class=\"theme-button theme-button--colored theme-button--raised theme-button--mainpage\">START</button>\n</div>\n";
},"useData":true});
templates['page2'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<header style=\"display: table; height: 56px; width: 100%; background-color: #4f342c;\">\n<div style=\" display:table-cell; vertical-align: middle; text-align: left; margin: 4px;\">\n  <button class=\"home-button theme-button theme-button--white  theme-button--raised  theme-button--nav theme-button--color_black\"\n  style=\"margin-left: 8px;\">\n    <i class=\"material-icons\">\narrow_back\n</i>\n  </button>\n</div>\n\n\n</header>\n<br><br>\n<div class=\"branding\">\n  <button class=\"coffee-button theme-button theme-button--white theme-button--raised theme-button--fab\">\n    <img src=\"./images/buttonimage.png\"  />\n  </button>\n</div>\n<div>\n  <h1 class=\"counter\">\n    Total:<br>\n      <span id=\"#coffeecount\">"
    + container.escapeExpression(((helper = (helper = helpers.coffeecount || (depth0 != null ? depth0.coffeecount : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"coffeecount","hash":{},"data":data}) : helper)))
    + "</span>\n  </h1>\n  <h1>\n\n  </h1>\n</div>\n";
},"useData":true});
})();