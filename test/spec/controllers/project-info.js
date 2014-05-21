'use strict';

describe('Controller: ProjectInfoCtrl', function () {

  // load the controller's module
  beforeEach(module('firstNgAppApp'));

  var ProjectInfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectInfoCtrl = $controller('ProjectInfoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
