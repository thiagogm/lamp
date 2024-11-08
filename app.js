/**
 * Simples simulador de uma lâmpada
 * @author Thiago Moura
 */
//variáveis de apoio lógica

let chave = false // o interruptor inica desligado
let lampada = true //a lâmpada está ok

function quebrar(){
    document.getElementById('lamp').src="img/broken.jpg"
    //reproduzindo um arquivo de áudio no JS
    //Passo 1: copiar o arquivo de áudio para o projeto
    //Passo 2: Usar a classe Audio(biblioteca interna do JS
    let som = new Audio()
    som.src = "sound/glassbreaking.wav"
    som.play()
    // apoio a lógica para o javascript identificar a lâmpada quebrada
    lampada = false
}

function onoff(){
    if (chave === false && lampada === true){
        // ligar chave

    document.getElementById('interruptor').src="img/swon.png"
    chave = true // O JS agora sabe que a chave está acesa

    //acender a lâmpada
    document.getElementById('lamp').src="img/on.jpg"

    } else if (lampada === true) {
    document.getElementById('interruptor').src="img/swoff.png"
    chave = false
    
        //desligar a lâmpada
    document.getElementById('lamp').src="img/off.jpg"
    }
    
}