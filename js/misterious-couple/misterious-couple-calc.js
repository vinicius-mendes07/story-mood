import { calculateTotal } from "../calculate-total.js"
import fetcher from "../fetcher.js"

export async function misteriousCoupleCalc() {
    // função para calcular o valor total do pack misterioso de casais iniciante
    const data = await fetcher()
    const misteriousCouplePack = data.misteriousCouplePack

    if (window !== 'undefined') {
        const selects = document.getElementsByName('misterious-couple-pack')
        selects.forEach((select) => {

                const total = calculateTotal(selects, misteriousCouplePack)

                const misteriousCoupleTotal = document.getElementById('misterious-couple-total-price')
                misteriousCoupleTotal.textContent = total.toFixed(2) + '€'
            })
    }
}