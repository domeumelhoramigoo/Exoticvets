(function(){
var f=document.getElementById("f-marcacao"),m=document.getElementById("msg");
if(!f)return;
function c(s){return String(s||"").replace(/[<>]/g,"").trim().slice(0,400)}
f.addEventListener("submit",function(e){
e.preventDefault();
if(f.hp.value){return}
var n=c(f.nome.value),a=c(f.animal.value),t=c(f.tel.value);
if(!n||!a||!/^[+0-9 ]{9,20}$/.test(t)||!f.rgpd.checked){m.className="msg er";m.textContent="Preencha nome, animal, telemóvel válido e aceite o tratamento dos dados.";return}
var corpo="Nome: "+n+"\nTelemóvel: "+t+"\nAnimal: "+c(f.especie.value)+" - "+a+"\nMensagem: "+c(f.obs.value);
location.href="mailto:EMAIL_A_DEFINIR?subject="+encodeURIComponent("Pedido de marcação - ExoticVets")+"&body="+encodeURIComponent(corpo);
m.className="msg ok";m.textContent="A abrir o seu email para enviar o pedido. Se preferir, contacte-nos por WhatsApp.";
});
})();
