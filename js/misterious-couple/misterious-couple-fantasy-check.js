import { checkFantasy } from "../check-fantasy.js"
import fetcher from "../fetcher.js"
import { misteriousCoupleCalc } from "./misterious-couple-calc.js"

async function misteriousCoupleFantasyCheck() {
    const check = document.getElementById('misterious-couple-fantasy-check')
    const data = await fetcher()
    const misteriousCoupleFantasyPack = data.misteriousCoupleFantasy

    const misteriousCoupleTotal = document.getElementById('misterious-couple-total-price')
    const misteriousCoupleTotalInNumber = await misteriousCoupleCalc()

    checkFantasy(check, misteriousCoupleFantasyPack, misteriousCoupleTotalInNumber, misteriousCoupleTotal)
}

misteriousCoupleFantasyCheck()