import { createSelect } from "../create-select.js"
import { misteriousCoupleCalc } from "./misterious-couple-calc.js"
import fetcher from "../fetcher.js"

// função para criar os selects do pack misterioso de casais iniciante
async function misteriousCouplePack() {
    // obtendo os dados dos pack
    const data = await fetcher()
    // obtendo somente o pack necessário
    const misteriousCouplePack = data.misteriousCouplePack
    const cardList = document.getElementById('misterious-couple-list')

    // criando os selects dinamicamente com os dados passados
    misteriousCouplePack.forEach(pack => {
        const listItem = createSelect(pack, 'misterious-couple-pack')
        cardList.appendChild(listItem)
    });

    misteriousCoupleCalc()
}

misteriousCouplePack()