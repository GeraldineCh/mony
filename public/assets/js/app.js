

document.getElementById("btn-save").addEventListener("click", function () {
  var tradename = document.getElementById("trade-name").val();
  var amountraised = document.getElementById("amount-raised").val();
  var amount = document.getElementById("amount").val();
  var description = document.getElementById("description").val();
  localStorage.setItem("tradename", tradename);
  localStorage.setItem("amountraised", amountraised);
  localStorage.setItem("description", description);
  localStorage.setItem("amount", amount);
  console.log("as");
});

