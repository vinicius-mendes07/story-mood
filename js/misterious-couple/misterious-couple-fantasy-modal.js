import { createFantasyModal } from "../create-fantasy-modal.js";
import fetcher from "../fetcher.js";

async function misteriousCoupleFantasyModal() {
    const data = await fetcher()
    const misteriousCoupleFantasyPack = data.misteriousCoupleFantasy

    const modalContainer = createFantasyModal(misteriousCoupleFantasyPack)

    const body = document.querySelector('body')
    body.appendChild(modalContainer)
}

const misteriousCoupleFantasyBtn = document.getElementById('misterious-couple-fantasy')

misteriousCoupleFantasyBtn.addEventListener('click', misteriousCoupleFantasyModal)
