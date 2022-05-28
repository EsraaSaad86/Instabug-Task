angular
  .module('appModule')
  .filter('hightlightFilter', function ($sce) {
    return function (text, args) {
      const re = new RegExp(args, 'gi');
      text = text.replace(re, '<span class="highlighted-text">$&</span>');
      return $sce.trustAsHtml(text);
    };
  })
  .component('employeesList', {
    templateUrl: 'components/employees-list/employees-list.html',
    controller: EmployeesListComponent,
    controllerAs: 'EmployeesListComponentVm',
    bindings: {
      employeesList: '<',
      searchTerm: '<',
      inputChanged: '<',
    },
  });

function EmployeesListComponent() {}
