import fetcher from "../fetcher.js"
import { handleClick } from "../handle-click.js"

// função para executar a ação de click no pack feminino estagiario
async function femBtnClick() {
    const selects = document.getElementsByName('feminine-pack')

    const data = await fetcher()
    const femininePack = data.femininePack

    let packMessage = `Olá, gostaria de adquirir este kit:\nEstagiario: pack feminino\n\n`

    const total = document.getElementById('fem-total-price').textContent

    handleClick(selects, femininePack, packMessage, total)
}

const femBtn = document.getElementById('fem-btn')

femBtn.addEventListener('click', femBtnClick)