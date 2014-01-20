var lodash = require('lodash');
var fs = require('fs');
var marked = require('marked');

var body_template = lodash.template(fs.readFileSync('templates/page._','utf8'));
var body_text = marked(fs.readFileSync('./index.md','utf8'));

fs.writeFileSync('./index.html', body_template({body:body_text}),'utf8');