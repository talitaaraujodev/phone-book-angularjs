angular.module("listaTelefonica").filter("elipsis", function () {
  return (input, size) => {
    if (size > input.length) return input;

    var output = input.substring(0, size || 2) + "...";
    return output;
  };
});
