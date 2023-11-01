import { calculateTotal } from "../calculate-total.js"
import fetcher from "../fetcher.js"

export async function feminineCalc() {
    // função para calcular o valor total do pack estagiario feminino
    const data = await fetcher()
    const femininePack = data.femininePack

    if (window !== 'undefined') {
        const selects = document.getElementsByName('femininePack')
        selects.forEach((select) => {
            select.addEventListener("change", () => {
                const selects = document.getElementsByName('femininePack')

                const total = calculateTotal(selects, femininePack)

                const femTotal = document.getElementById('fem-total-price')
                femTotal.textContent = total.toFixed(2) + '€'
            })
        })
    }
}