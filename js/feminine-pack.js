import { createSelect } from "./create-select.js"
import fetcher from "./fetcher.js"

async function femininePack() {
    // obtendo os dados dos pack
    const packs = await fetcher()

    // obtendo somente o pack necessário
    const femininePack = packs.femininePack
    const cardList = document.getElementById('feminine-list')

    // criando os selects dinamicamente com os dados passados
    femininePack.forEach(pack => {
        const listItem = createSelect(pack)
        cardList.appendChild(listItem)
    });
}

femininePack()