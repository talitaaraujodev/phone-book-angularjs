angular.module("listaTelefonica").factory("contactsAPI", ($http, config) => {
  const _getContacts = () => {
    return $http.get(config.baseUrl + "/contacts");
  };

  const _saveContact = (contato) => {
    return $http.post(config.baseUrl + "/contacts", contato);
  };

  return {
    getContacts: _getContacts,
    saveContact: _saveContact,
  };
});
