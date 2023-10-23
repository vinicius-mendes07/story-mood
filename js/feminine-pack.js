import { createSelect } from "./create-select.js"
import fetcher from "./fetcher.js"

async function femininePack() {
    const packs = await fetcher() 
    const femininePack = packs.femininePack
    const cardList = document.getElementById('feminine-list')

    

    femininePack.forEach(pack => {
        console.log(pack)
        const listItem = createSelect(pack)
        cardList.appendChild(listItem)
    });
}

femininePack()