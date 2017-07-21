
  // $('.owl-carousel').owlCarousel({
  //     loop:true,
  //     margin:10,
  //     nav:true,
  //     responsive:{
  //         0:{
  //             items:1
  //         },
  //         600:{
  //             items:3
  //         },
  //         1000:{
  //             items:5
  //         }
  //     }
  // })

  $( () => {
    var space =/^\s+$/;
var share = document.getElementById("post-content");
var content_LS;
var content =[{usuario: "ALBERT EINSTEIN", contenido: " La vida es una especie de bicicleta. Si quieres mantener el equilibrio, pedalea hacia delante"}];

if(!localStorage.getItem('publicar')){
  localStorage.setItem('publicar',JSON.stringify(content));
  content_LS = JSON.parse(localStorage.getItem('publicar'));
}
else{
  content_LS = JSON.parse(localStorage.getItem('publicar'));
}

window.addEventListener("load", function(){
  mostrarContent(content_LS);


})
document.getElementById("publicar").addEventListener("click", function(e)
{
    e.preventDefault();
    var user = document.getElementById("user");
    var area = document.getElementById("area");
    validatePost(user,area);

});

function validatePost(user,area){
    if(!space.test(user.value) && !space.test(area.value) && user.value && area.value){
      createPanel(document.createTextNode(user.value), document.createTextNode(area.value));
      cleanBox(user, area);
    } else{
     alert("Don't exist content");
  }
}

function createPanel(user, area){
  var shareContent = document.createElement("div");
  var cdf = document.createDocumentFragment();
  var firstChild = share.firstElementChild;
  var boxArea = document.createElement("span");
  var boxUser = document.createElement("p");
  shareContent.classList.add("div-share");
  shareContent.setAttribute("id", "id-div-share")

  boxArea.appendChild(area);
  boxUser.appendChild(user);
  cdf.appendChild(boxArea);
  cdf.appendChild(boxUser);
  shareContent.appendChild(cdf);
  share.appendChild(shareContent);
  share.insertBefore(shareContent, firstChild);

   contentforShare(document.getElementById("id-div-share").firstChild.outerText,
                  document.getElementById("id-div-share").lastChild.outerText);
  //  safePanel( document.getElementById("id-div-share").firstChild, document.getElementById("id-div-share").lastChild.)
}

function cleanBox(u,a) {
  u.value ="";   a.value ="";
}
function contentforShare(content,user) {
  if(!space.test(content) && !space.test(user) &&content !="" && user!=""){ //ME PERMITE QUE A LA HORA DE RECARGAR GUARDE CONTENIDO VACÍO
    content_LS.push({usuario:user,contenido:content});
    localStorage.setItem("publicar",JSON.stringify(content_LS));
  }
}
function mostrarContent(array){
    array.map(e => createPanel(document.createTextNode(e.usuario), document.createTextNode(e.contenido)));
    share.classList.add('active');
};
  })
