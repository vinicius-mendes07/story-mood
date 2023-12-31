import { createSelect } from "../create-select.js"
import { feminineCalc } from "./feminime-calc.js"
import fetcher from "../fetcher.js"

// função para criar os selects do pack feminino estagiario
async function femininePack() {
    // obtendo os dados dos pack
    const data = await fetcher()
        // obtendo somente o pack necessário
        const femininePack = data.femininePack
        const cardList = document.getElementById('feminine-list')
    
        // criando os selects dinamicamente com os dados passados
        femininePack.forEach(pack => {
            const listItem = createSelect(pack, 'feminine-pack')
            cardList.appendChild(listItem)
        });

        feminineCalc()
}

femininePack()