angular.module("listaTelefonica").filter("name", function () {
  return (input) => {
    var nameList = input.split(" ");

    nameList = nameList.map((name) => {
      if (/(da|de)/.test(name)) return name;
      return name.charAt(0).toUpperCase() + name.substring(1);
    });

    nameList = nameList.join(" ");

    return nameList;
  };
});
