let res = document.getElementById("res")
// Fita elementos
let res_fita = document.getElementById("res_fita")
let metro_fita = document.getElementById("valorMetro")
let quant_fita = document.getElementById("quantFita")
// Adereços elementos
let res_adr = document.getElementById("res_adr")
let adr_valor = document.getElementById("adr_valor")
let adrQuant = document.getElementById("adrQuant")

let desconto = document.getElementById("descontoValue");

// Adicionando valores na lista de fitas
let fitas = []
let contf = 0
function adicionarF() {
    if (metro_fita.value.length == 0 || quant_fita.value.length == 0) {
        alert("[ERRO] Você não terminou de digitar os valores!")
    } else {
        let gasto_fita = Number(metro_fita.value) * Number(quant_fita.value)
        fitas.push(gasto_fita)
    
        contf++
        res_fita.innerHTML += `Fita ${contf}: ${gasto_fita} $ Reais \n`
    }
    metro_fita.value = ""
    quant_fita.value = ""
    metro_fita.focus()
}

// Adicionando valores na lista de adereços
let aderecos = []
let conta = 0
function adicionarA() {
    if (adr_valor.value.length == 0 || adrQuant.value.length == 0) {
        alert("[ERRO] Você não terminou de digitar os valores!")
    } else {
        let gasto_adr = Number(adr_valor.value) * Number(adrQuant.value)
        aderecos.push(gasto_adr)

        conta++
        res_adr.innerHTML += `Adr ${conta}: ${gasto_adr} $ Reais \n`
    }
    adr_valor.value = ""
    adrQuant.value = ""
    adr_valor.focus()
}

function calcular() {
    let horasDia = document.getElementById("horasDia")
    let salario = document.getElementById("sal")
    let porcem = document.getElementById("porcem")
    let diasMes = document.getElementById("diaMes")
    let minutos = document.getElementById("pecaMinutos")

    let energia = Number(minutos.value) * 0.01
    let gasto_cola = Number(minutos.value) * 0.01
    let valor_hora = (Number(salario.value) / Number(diasMes.value)) / Number(horasDia.value)
    // Somando os gastos com fitas:
    let soma_fitas = 0
    for(f in fitas) {
        soma_fitas += fitas[f]
    }
    // Somando os gastos com adereços
    let soma_adere = 0
    for(a in aderecos) {
        soma_adere = soma_adere + aderecos[a]
    }

    if (horasDia.value.length == 0 || salario.value.length == 0 || porcem.value.length == 0 ||
        diasMes.value.length == 0 || minutos.value.length == 0) {
            alert("[ERRO] Não podemos finalizar o cálculo, porque você não terminou de digitar os valores.")
        } else {
            let preco_total = soma_fitas + soma_adere + energia + gasto_cola + valor_hora
            let porcentagem = (preco_total * Number(porcem.value)) / 100

            let preco_final = preco_total + porcentagem

            if (Number(desconto.value) == 0) {
                alert("sem desconto");
                res.innerHTML = `<strong>Preço: ${preco_final.toFixed(2)}$</strong>`
            } else {
                alert("com desconto");
                // Calculando desconto
                let descontoValor = (Number(desconto.value) * preco_final) / 100;
                let preco_final2 = preco_final - descontoValor;

                res.innerHTML = `<strong>P: ${preco_final.toFixed(2)}$ / ${preco_final2.toFixed(2)}$</strong>`
            }
        }
        // Apagando os valores digitados
        metro_fita.value = ""
        quant_fita.value = ""
        adr_valor.value = ""
        adrQuant.value = ""
        minutos.value = ""
        // Limpando os elementos necessários
        res_fita.innerHTML = ""
        res_adr.innerHTML = ""
        fitas = []
        aderecos = []
        contf = 0
        conta = 0
}