var yeoman = require('yeoman-generator');

var GeneratorGenerator = module.exports = yeoman.generators.Base.extend({
 writing: {
    app: function () {
      this.argument('app_name', { type: String, required: false });
      this.appname = this.app_name || "vrwebgl";
      this.directory('../../template', this.appname);
    }
  }
});