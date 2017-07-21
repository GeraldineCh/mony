var tecactusApi = new TecactusApi("GT4OPuPeCYanWRMxvnEXnscxjhDYQNK3rrXnIhoT");

// consulta Sunat usando número de RUC
tecactusApi.Sunat.getByRuc("20337564373")
  .then(function (response) {
    console.log("consulta correcta!");
    console.log(response.data)
  })
  .catch(function (response) {
    console.log("algo ocurrió");
    console.log("código de error: " + response.code);
    console.log("mensaje de respuesta: " + response.status);
    console.log(response.data)
  });