app.controller("MainController", [
  "$scope",
  "contactsAPI",
  "operatorsAPI",
  "serialGenerator",

  function ($scope, contactsAPI, operatorsAPI, serialGenerator) {
    $scope.phonePattern = /^\d{4}-\d{4}$|^\(\d{2}\) \d{5}-\d{4}$/;

    $scope.title = "Lista Telefônica";
    $scope.contacts = [];
    $scope.operators = [];
    $scope.contact = {};
    $scope.error = "";

    const loadContacts = () => {
      contactsAPI
        .getContacts()
        .then((res) => {
          $scope.contacts = res.data;
          $scope.error = "";
        })
        .catch((erro) => {
          console.log("Erro:", erro);
          $scope.error = "Não foi possivel carregar os contatos!";
        });
    };

    const loadOperators = () => {
      operatorsAPI
        .getOperators()
        .then((res) => {
          $scope.operators = res.data;
        })
        .catch((erro) => {
          console.log("Erro:", erro);
          $scope.error = "Não foi possível carregar as operadoras!";
        });
    };

    $scope.addContact = function (form, contact) {
      if (form.$valid) {
        contact.serial = serialGenerator.generate();

        contactsAPI.saveContact(contact).then((res) => {
          delete $scope.contact;
          form.$setPristine();
          form.$setUntouched();
          loadContacts();
        });
      }
    };

    $scope.removeContact = function () {
      $scope.contacts = $scope.contacts.filter((contact) => !contact.selected);
    };

    $scope.hasSelectedContacts = function () {
      return $scope.contacts.some((contact) => contact.selected);
    };

    loadContacts();
    loadOperators();
  },
]);
