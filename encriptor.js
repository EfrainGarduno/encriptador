function usuarioEncripta_Desencripta(char) {
    let textoUsuario = document.getElementById("textarea").value;
    textoUsuario = validarTexto(textoUsuario);
    let textoEncriptado_Desencriptado=""
    console.log("Estoy entrando a la función")
    if (textoUsuario !== undefined) {
        if (char=="E"){
            textoEncriptado_Desencriptado = encriptarTexto(textoUsuario);
        }else{
            textoEncriptado_Desencriptado = desencriptarTexto(textoUsuario);
        }
        mostrarTextoEncriptado_Desencriptado(textoEncriptado_Desencriptado);
        limpiarCaja();
    }
}



function encriptarTexto(texto) {
    const reglas = {
        
        'E': 'luli',
        'I': 'tajas',
        'A': 'chaz',
        'O': 'durne',
        'U': 'cjed',
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat',
        '0': 'tati',
        '1': 'loni',
        '2': 'fabi',
        '3': 'quia',
        '4': 'sora',
        '5': 'tis',
        '6': 'miley',
        '7': 'zaju',
        '8': 'torin',
        '9': 'solep'
      
    }

    let textoEncriptado = '';
    for (let char of texto) {
        textoEncriptado += reglas[char] || char;
    }

    return textoEncriptado;
}

function desencriptarTexto(texto) {
    const reglas = {
        
        'luli': 'E',
        'tajas': 'I',
        'chaz': 'A',
        'durne': 'O',
        'cjed': 'U',
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u',
        'tati':'0',
        'loni':'1',
        'fabi':'2',
        'quia':'3',
        'sora':'4',
        'tis':'5',
        'miley':'6',
        'zaju':'7',
        'torin':'8',
        'solep':'9' 
    }

    let textoDesencriptado = texto;

    for (let [encriptado, desencriptado] of Object.entries(reglas)) {
        textoDesencriptado = textoDesencriptado.split(encriptado).join(desencriptado);
    }

    return textoDesencriptado;
}

function mostrarTextoEncriptado_Desencriptado(texto) {
    const divEncriptado = document.getElementById("encriptado");
    divEncriptado.innerHTML = `
    <p class="texto__estilizado" id="textoEncriptado">${texto}</p>
    <button class="copiar__boton" onclick="copiarTexto()">Copiar texto</button>
    <button id="limpiar" class="limpiar__boton" onclick="limpiarDesencriptado()">Limpiar Resultado</button>
    `;

}


function limpiarCaja() {
    document.querySelector("#textarea").value = ""; 
}


function copiarTexto() {
    const texto = document.querySelector("#encriptado p").textContent;
    document.querySelector("#textarea").value = texto;
    limpiarDesencriptado();
    Swal.fire("Texto copiado!");
}


function limpiarDesencriptado() {
    document.getElementById("encriptado").innerHTML = `
            <img class="desencriptador__imagen" src="img/observa.png" alt="Muñeco observando">
            <h2 class="desencriptador__subtitulo">Ningun mensaje fue encontrado</h2>
            <p class="desencriptador__texto">Ingresa el texto que deseas encriptar o desencriptar.</p>   
    `;
}


function validarTexto(texto) {
    /* texto=texto.toLowerCase()*/
    let str = document.getElementById("textarea");
    if (str.value.trim() === ""){
        Swal.fire("Por favor ingresa un texto");
        return;
    }
    if (/[^a-z0-9A-ZÑ.ñ\s]/.test(texto)) {
        Swal.fire("El texto no puede contener letras acentuadas ni símbolos.");
        limpiarCaja();
        return undefined;
    }
    return texto;
}

