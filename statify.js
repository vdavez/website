var swig = require('swig');
var marked = require('marked');
var path = require('path');
var fs = require('fs');

function makePages() {
	fs.readFile(__dirname + '/templates/_.pages', {"encoding":"utf-8"}, function (err, site) {
		fs.readdir(__dirname + '/md/', function (err, files) {
			files.forEach(function (file, index, array) {
				fs.readFile(__dirname + '/md/' + file, {"encoding":"utf-8", "flag":"r"}, function (err, data) {
					marked(data, {gfm: false, breaks:false, renderer: new marked.Renderer()}, function (err, file_contents) {
						fs.writeFile(__dirname + '/pages/'+ path.basename(file, '.md') + '.html', swig.render(site, {autoescape: false, locals:{content:file_contents}}), function (err) {
							if (err) throw err;
							console.log(file + " converted")
						})
					})
				})
			})
		})	
	})
}

function makeIndex (callback) {
	fs.readFile(__dirname + '/templates/_.base', {"encoding":"utf-8"}, function (err, site) {
		fs.readFile(__dirname + '/index.md', {"encoding":"utf-8", "flag":"r"}, function (err, data) {
			marked(data, {gfm: false, breaks:false, renderer: new marked.Renderer()}, function (err, file_contents) {
				fs.writeFile(__dirname + '/index.html', swig.render(site, {autoescape: false, locals:{content:file_contents}}), function (err) {
					if (err) throw err;
					console.log("index.md converted")
					callback()
				})
			})
		})	
	})
}

makeIndex(makePages)