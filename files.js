var _ = require('lodash');
var files = {
  dist: [
    'release/ct-ui-router-extras.js'
  ],
  min: [
      'release/ct-ui-router-extras.min.js'
  ],
  src: [
    'src/module.js',
    'src/util.js',
    'src/deepStateRedirect.js',
    'src/stickyStateProvider.js',
    'src/stickyState.js',
    'src/futureState.js',
    'src/previousState.js',
    'src/fsfactories/ngload.js',
    'src/fsfactories/iframe.js'
  ],
  test: [
    'test/deepStateRedirectSpec.js',
    'test/futureStateSpec.js',
    'test/stickyStateSpec.js'
  ],
  testUtil: [ 'test/testUtil.js', 'bower_components/lodash/dist/lodash.js'],
  angular: [ 'bower_components/angular/angular.js' ],
  angular_mocks: [ 'bower_components/angular-mocks/angular-mocks.js' ],
  ui_router: [ 'bower_components/angular-ui-router/release/angular-ui-router.js' ],
  ui_router_0_2_0: [ 'ui-router-versions/0.2.0/angular-ui-router.js' ],
  ui_router_0_2_8: [ 'ui-router-versions/0.2.8/angular-ui-router.js' ],
  ui_router_0_2_10: [ 'ui-router-versions/0.2.10/angular-ui-router.js' ],
  ui_router_HEAD: [ 'ui-router-versions/2014-07-05/angular-ui-router.js' ]
};

var devfiles = {
  src: files.src,
  test: files.test,
  testUtil: files.testUtil,
  angular: files.angular,
  angular_mocks: files.angular_mocks,
  ui_router: files.ui_router
};

var buildfiles = {
  src: files.dist,
  test: files.test,
  testUtil: files.testUtil,
  angular: files.angular,
  angular_mocks: files.angular_mocks,
  ui_router: files.ui_router
};

var minfiles = {
  src: files.min,
  test: files.test,
  testUtil: files.testUtil,
  angular: files.angular,
  angular_mocks: files.angular_mocks
};

var min0200files = _.extend(minfiles, { ui_router: files.ui_router_0_2_0 });
var min0208files = _.extend(minfiles, { ui_router: files.ui_router_0_2_8 });
var min0210files = _.extend(minfiles, { ui_router: files.ui_router_0_2_10 });
var minHEADfiles = _.extend(minfiles, { ui_router: files.ui_router_HEAD });

if (exports) {
  exports.files = files;
  exports.devfiles = devfiles;
  exports.buildfiles = buildfiles;
  exports.min0208files = min0208files;
  exports.min0210files = min0210files;
  exports.minHEADfiles = minHEADfiles;
}

