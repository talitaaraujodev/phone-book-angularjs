angular.module("listaTelefonica").factory("operatorsAPI", ($http, config) => {
  const _getOperators = () => {
    return $http.get(config.baseUrl + "/operators");
  };
  return {
    getOperators: _getOperators,
  };
});
