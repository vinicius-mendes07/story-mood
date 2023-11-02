import { mountMessage } from "../mount-message.js"
import fetcher from "../fetcher.js"

// função para executar a ação de click no pack misterioso de casais iniciante
async function misteriousCoupleBtnClick() {
    const selects = document.getElementsByName('misterious-couple-pack')

    const data = await fetcher()
    const misteriousCouplePack = data.misteriousCouplePack

    let packMessage = `Olá, gostaria de adquirir este kit:\nPack iniciante para casais\n\n`
    const message = mountMessage(selects, misteriousCouplePack)
    if(message) {   
        packMessage += message
        const total = document.getElementById('misterious-couple-total-price')
        packMessage += `\nTotal: ${total.textContent}`
        window.open("https://api.whatsapp.com/send?phone=+5566996796020&text="+encodeURIComponent(packMessage), '_blank')
    }
}

const misteriousCoupleBtn = document.getElementById('misterious-couple-btn')

misteriousCoupleBtn.addEventListener('click', misteriousCoupleBtnClick)