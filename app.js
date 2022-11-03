
const areia = document.querySelector("#Areia")
const pcResina = document.querySelector("#pRESINA")
const pcCatalisador = document.querySelector("#pCATALISADOR")

let formulario = document.getElementById('formulario')

pcResina.disabled=true
pcCatalisador.disabled=true

let valordaAreia = null





/**
 * 
 * @param {*valordaAreia} num 
 * essa funcao salva em tempo real a quantidade de areia digitada
 */
const saveareia = (num) => {
    valordaAreia = parseInt(num)
    console.log(valordaAreia)
}


/**
 * essa funcao troca as opcoes das porcentagens de acordo com o tipo de areia
 */
const aparecer = () => {
  let resinas = document.getElementById("pRESINA")
  let catalizadores = document.getElementById("pCATALISADOR")

  resinas.innerHTML = "--"
  catalizadores.innerHTML = "--"

  
  if(areia.value == "areia de silica"){
    
    pcResina.disabled=false
    pcCatalisador.disabled=false

    resinaSilica = ["","0.8","0.9","1.0","1.1","1.2","1.3","1.4","1.5"];
    catalisadorSilica =["","20","25","30","35","40","45","50"]

    resinaSilica.forEach((e,k) => {
      pcResina[k] = new Option(e,k)
    })
    catalisadorSilica.forEach((e,k) => {
      pcCatalisador[k] = new Option(e,k)
    })
  }
  else if(areia.value == "areia de cromita"){
    
  
    pcResina.disabled=false
    pcCatalisador.disabled=false

    resinaSilica = ["","2","2.1","2.2","2.3","2.4","2.5","2.6","2.7"];
    catalisadorSilica =["","20","25","30","35","40","45","50"]

    resinaSilica.forEach((e,k) => {
      pcResina[k] = new Option(e,k)
    })
    catalisadorSilica.forEach((e,k) => {
      pcCatalisador[k] = new Option(e,k)
    })
  }

  else if(areia.value == "areia de zirconita"){
  
    pcResina.disabled=false
    pcCatalisador.disabled=false

    resinaSilica = ["","0.8","0.9","1.0","1.1","1.2"];
    catalisadorSilica =["","15","20","25"]

    resinaSilica.forEach((e,k) => {
      pcResina[k] = new Option(e,k)
    })
    catalisadorSilica.forEach((e,k) => {
      pcCatalisador[k] = new Option(e,k)
    })
  }

  else {
    pcResina.disabled=true
    pcCatalisador.disabled=true

  }

  
}


// funcao que reseta todo o fomulario
const Resetar = () => {
  

  pcResina.disabled=true
  pcCatalisador.disabled=true


  let resinas = document.getElementById("pRESINA")
  let catalizadores = document.getElementById("pCATALISADOR")
  resinas.innerHTML = "--"
  catalizadores.innerHTML = "--"
}

formulario.addEventListener('submit', function(event){
  event.preventDefault()

  let tipoAreia = areia.options[areia.selectedIndex].text
  console.log("Tipo da areia:" ,tipoAreia)
  let valorResina = parseFloat(pcResina.options[pcResina.selectedIndex].text)
  console.log("Valor da resina:" ,valorResina)
  let valorCatalisador = parseFloat(pcCatalisador.options[pcCatalisador.selectedIndex].text)
  console.log("Valor do Catalisador:", valorCatalisador)
  let pesoAreia = parseInt(document.getElementById("valorareia").value)
  console.log(pesoAreia)

  let soma = ((valorResina / 100)+10)
  console.log(soma)

  let resultado = document.getElementById("results")
  resultado.innerHTML = soma


})