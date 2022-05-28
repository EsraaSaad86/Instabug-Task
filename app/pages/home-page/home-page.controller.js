angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees, $location) {
  const homePageVm = this;
  homePageVm.employees = [];

  homePageVm.updateSearchTerm = function (searchText, inputChanged) {
    $location.search('filter', searchText);
    homePageVm.searchText = searchText;
    homePageVm.inputChanged = inputChanged;
  };

  homePageVm.clearSearchTerm = function () {
    $location.search('filter', null);
    homePageVm.searchText = '';
  };

  activate();

  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
      });
  }
}
