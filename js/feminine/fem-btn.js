import { btnClick } from "../btn-click.js"
import fetcher from "../fetcher.js"

// função para executar a ação de click no pack feminino estagiario
async function femBtnClick() {
    const selects = document.getElementsByName('femininePack')

    const data = await fetcher()
    const femininePack = data.femininePack

    let packMessage = `Olá, gostaria de adquirir este kit:\nEstagiario: pack feminino\n\n`
    const message = btnClick(selects, femininePack)
    if(message) {   
        packMessage += message
        const femTotal = document.getElementById('fem-total-price')
        packMessage += `\nTotal: ${femTotal.textContent}`
        window.open("https://api.whatsapp.com/send?phone=+5566996796020&text="+encodeURIComponent(packMessage), '_blank')
    }
}

const femBtn = document.getElementById('fem-btn')

femBtn.addEventListener('click', femBtnClick)