// ===============================
// Portal de Matrículas PUCPR
// ===============================

const form = document.getElementById("formMatricula");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const protocolo = gerarProtocolo();

    Swal.fire({
        icon: "success",
        title: "Matrícula enviada!",
        html: `
            <h4>Protocolo</h4>
            <h2>${protocolo}</h2>

            <br>

            <p>
                Sua matrícula foi enviada para análise.
            </p>

            <p>
                Em breve você receberá um e-mail com os próximos passos.
            </p>
        `,
        confirmButtonText: "Fechar"
    });

    form.reset();

});

// ===============================

function gerarProtocolo(){

    const numero = Math.floor(Math.random()*900000)+100000;

    return "PUCPR-" + numero;

}

// ===============================
// Máscara CPF
// ===============================

const cpf = document.getElementById("cpf");

cpf.addEventListener("input",()=>{

let valor = cpf.value.replace(/\D/g,'');

valor = valor.replace(/(\d{3})(\d)/,"$1.$2");

valor = valor.replace(/(\d{3})(\d)/,"$1.$2");

valor = valor.replace(/(\d{3})(\d{1,2})$/,"$1-$2");

cpf.value = valor;

});

// ===============================
// Máscara Telefone
// ===============================

const telefone = document.getElementById("telefone");

telefone.addEventListener("input",()=>{

let valor = telefone.value.replace(/\D/g,'');

valor = valor.replace(/^(\d{2})(\d)/g,"($1) $2");

valor = valor.replace(/(\d)(\d{4})$/,"$1-$2");

telefone.value = valor;

});

// ===============================
// Scroll Suave
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

document.querySelector(link.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});

});

});