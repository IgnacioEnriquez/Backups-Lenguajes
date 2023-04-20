
// ---------------------------- PUNTO 1 EJERCICIO ----------------------------


mostrarArchivo1 = function()
{
    let xhr_inicial = new XMLHttpRequest();

    xhr_inicial.addEventListener('readystatechange', e => {
        
        if (e.target.readyState === 4) {
            // console.log('e.target.status:', e.target.status);
            if (e.target.status === 200) {
                console.log(e.target.responseText);
            }
        }
    });
    
    xhr_inicial.open("get","archivo-1.txt");
    
    xhr_inicial.send();

}

mostrarArchivo2 = function()
{
    let xhr_inicial = new XMLHttpRequest();

    xhr_inicial.addEventListener('readystatechange', e => {
        
        if (e.target.readyState === 4) {
            // console.log('e.target.status:', e.target.status);
            if (e.target.status === 200) {
            
                const container = document.querySelector(".container");
                const p = document.createElement("p");
                p.innerHTML = e.target.responseText;
                container.appendChild(p);    
            }
        }
    });
    
    xhr_inicial.open("get","2/archivo-2.txt");    
    
    xhr_inicial.send();

}

mostrarArchivo1();

// ---------------------------- PUNTO 2 EJERCICIO ---------------------------

const button = document.createElement("button");
button.type = "button";
button.innerText = "mostrar archivo-1";
button.onclick = mostrarArchivo1;
document.body.appendChild(button);

// ---------------------------- PUNTO 3 EJERCICIO ---------------------------

const button2 = document.createElement("button");
button2.type = "button";
button2.innerText = "mostrar archivo-2";
button2.onclick = mostrarArchivo2;
document.body.appendChild(button2);