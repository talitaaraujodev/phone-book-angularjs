app.controller("MainController", [
  "$scope",
  function ($scope) {
    $scope.phonePattern = /^\d{4}-\d{4}$|^\(\d{2}\) \d{5}-\d{4}$/;

    $scope.title = "Lista Telefônica";

    $scope.contacts = [
      {
        name: "João",
        phone: "1234-5678",
        operator: { name: "Tim", cod: 41 },
        selected: false,
        createdAt: new Date(),
      },
      {
        name: "Maria",
        phone: "8765-4321",
        operator: { name: "Tim", cod: 41 },
        selected: false,
        createdAt: new Date(),
      },
      {
        name: "Pedro",
        phone: "1234-4321",
        operator: { name: "Tim", cod: 41 },
        selected: false,
        createdAt: new Date(),
      },
    ];

    $scope.contact = {};

    $scope.operators = [
      { name: "Oi", cod: "14", category: "Celular" },
      { name: "Vivo", cod: "15", category: "Celular" },
      { name: "Tim", cod: "41", category: "Celular" },
      { name: "GVT", cod: "25", category: "Fixo" },
      { name: "Embratel", cod: "21", category: "Fixo" },
    ];

    $scope.addContact = function (form, contact) {
      if (form.$valid) {
        $scope.contacts.push(
          angular.copy({ ...contact, selected: false, createdAt: new Date() })
        );
        $scope.contact = {};
        form.$setPristine();
        form.$setUntouched();
      }
    };

    $scope.removeContact = function () {
      $scope.contacts = $scope.contacts.filter((contact) => !contact.selected);
    };
    $scope.hasSelectedContacts = function () {
      return $scope.contacts.some((contact) => contact.selected);
    };
  },
]);
