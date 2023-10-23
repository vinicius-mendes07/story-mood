import { createSelect } from "./create-select.js"
import fetcher from "./fetcher.js"

function femininePack() {
    // obtendo os dados dos pack
    fetcher().then((packs) => {
        // obtendo somente o pack necessário
        const femininePack = packs.femininePack
        const cardList = document.getElementById('feminine-list')
    
        // criando os selects dinamicamente com os dados passados
        femininePack.forEach(pack => {
            const listItem = createSelect(pack, 'femininePack')
            cardList.appendChild(listItem)
        });
    })

}

femininePack()