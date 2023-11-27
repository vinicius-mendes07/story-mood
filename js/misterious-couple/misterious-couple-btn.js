import fetcher from "../fetcher.js"
import { handleClick } from "../handle-click.js"
import { fantasyMessage } from "../fantasy-message.js"

// função para executar a ação de click no pack misterioso de casais iniciante
async function misteriousCoupleBtnClick() {
    const selects = document.getElementsByName('misterious-couple-pack')

    const data = await fetcher()
    const misteriousCouplePack = data.misteriousCouplePack
    const misteriousCoupleFantasy = data.misteriousCoupleFantasy

    let packMessage = `Olá, gostaria de adquirir este kit:\nPack iniciante para casais\n\n`
    const total = document.getElementById('misterious-couple-total-price').textContent

    const check = document.getElementById('misterious-couple-fantasy-check')

    const misteriousCoupleFantasyMessage = fantasyMessage(check, misteriousCoupleFantasy)

    handleClick(selects, misteriousCouplePack, packMessage, total, misteriousCoupleFantasyMessage)
}

const misteriousCoupleBtn = document.getElementById('misterious-couple-btn')

misteriousCoupleBtn.addEventListener('click', misteriousCoupleBtnClick)