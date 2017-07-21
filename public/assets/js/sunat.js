var tecactusApi = new TecactusApi("GT4OPuPeCYanWRMxvnEXnscxjhDYQNK3rrXnIhoT");

// consulta Sunat usando número de RUC
document.getElementById("checkruc").addEventListener('click', function () {
  var ruc = document.getElementById("ruc").value;
  console.log(ruc);
  tecactusApi.Sunat.getByRuc(ruc)
    .then(function (response) {
      console.log("consulta correcta!");
      console.log(response.data);
      addDate(response.data);
    })
    .catch(function (response) {
      console.log("algo ocurrió");
      console.log("código de error: " + response.code);
      console.log("mensaje de respuesta: " + response.status);
      console.log(response.data)
    });
});

function addDate(data) {
  document.getElementById("bussiness-name").innerText = "Razón social: " + data.razon_social;
  document.getElementById("address").innerText = "Dirección: " + data.direccion;
  if(data.estado_contribuyente == "ACTIVO"){
    $("#btn-ruc").removeAttr("disabled");
  }
  else{
    $("#alert").text = "Estado de contribuyente no activo";
  }
}

$('#add').on("click", function () {
  $(this).after('<div class="row">' +  '<div class="col s12 l10 offset-l1">' +
    '<input type="text" placeholder="Dni"><input type="text" placeholder="Nombre"><div></div>');
});