const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");


{{#each pets}}
    <h2>{{name}}</h2>
{{/each}}