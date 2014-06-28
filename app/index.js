'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var WchybridappGenerator = yeoman.generators.Base.extend({
  init: function() {
    this.pkg = require('../package.json');

    this.on('end', function() {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Web Components based Hybrid App generator for your Wordpress Blog!'));

    var prompts = [{
      name: 'appname',
      message: 'Enter the name of your blog',
      default: 'The Jackal Of Javascript' // shameless publicity :D
    }, {
      name: 'jsonurl',
      message: 'Enter the JSON end point for your blog\'s feed.',
      default: 'http://thejackalofjavascript.com/api' // shameless publicity :P
    }];

    this.prompt(prompts, function(props) {
      this.appname = props.appname;
      this.jsonurl = props.jsonurl;
      done();
    }.bind(this));
  },

  app: function() {
    this.mkdir('hooks');
    this.mkdir('merges');
    this.mkdir('platforms');
    this.mkdir('plugins');
    this.mkdir('www');

    this.copy('hooks/README.md', 'hooks/README.md');
    this.directory('www/', 'www/');
  },

  projectfiles: function() {
    this.copy('editorconfig', '.editorconfig');
  }
});

module.exports = WchybridappGenerator;
