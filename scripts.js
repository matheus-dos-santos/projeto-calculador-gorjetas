
function calculatetip(event){
event.preventDefault()
let conta = document.getElementById('conta').value;
let qualidadedoservico = document.getElementById('qualidade-servico').value;
let numerodepessoas = document.getElementById('pessoas').value;


if(conta == '' | qualidadedoservico == 0 ){
    alert("por favor,  preencha os campos");
    return;
}if(numerodepessoas == "" | numerodepessoas <= 1){
    numerodepessoas = 1;
    document.getElementById('each').style.display = "none";
}else{
    document.getElementById('each').style.display = "block";
}

let total = (conta * qualidadedoservico) / numerodepessoas;
total = total.toFixed(2);
document.getElementById('tip').innerHTML = total;
document.getElementById('totaltip').style.display = "block";

}


document.getElementById('totaltip').style.display = "none";

 const buttonSubmit = document.querySelector('button[type="submit"]')
 buttonSubmit.addEventListener('click', calculatetip);