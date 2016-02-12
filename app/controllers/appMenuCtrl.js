(function() {
  'use strict';

  angular
    .module('wagecomp')
    .controller('AppMenuCtrl', AppMenuCtrl);

  AppMenuCtrl.$inject = ['$scope', '$location'];

  function AppMenuCtrl($scope, $location) {
    console.log('Hello from AppMenuCtrl!');

    var gui = require('nw.gui'),
      win = gui.Window.get(),
      menu = [
        { label: 'Calculator' },
        { label: 'Analytics' },
        {
          label: 'Settings',
          submenu: [
            { label: 'Billing Entity' },
            { label: 'Access' }
          ]
        }
      ],
      onClick = function() {
        var path = '/' + this.label.split(' ')[0].toLowerCase();
        $location.path(path);
        $scope.$apply();
      },
      initMenu = function() {
        var appMenu = new gui.Menu({ 'type': 'menubar' }),
          createEntry = function(label, submenu) {
            var entry = { label: label, click: onClick };
            if(submenu) { entry.submenu = submenu; }

            return new gui.MenuItem(entry);
          },
          traverse = function(node, parent) {
            var i = 0,
              nodeLen = node.length;
            for(i; i<nodeLen; i++) {
              if(parent) {
                parent.append(createEntry(node[i].label));
              } else {
                if(node[i].submenu) {
                  var options = new gui.Menu();
                  appMenu.append(createEntry(node[i].label, options));
                  traverse(node[i].submenu, options);
                } else {
                  appMenu.append(createEntry(node[i].label));
                }
              }
            }
          };

        traverse(menu);

        win.menu = appMenu;
      };

    // init menu
    initMenu();
  }
}());