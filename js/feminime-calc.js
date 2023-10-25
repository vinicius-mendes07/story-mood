import { calculateTotal } from "./calculate-total.js"
import fetcher from "./fetcher.js"

export async function feminineCalc() {

    const data = await fetcher()
    const femininePack = data.femininePack

    if (window !== 'undefined') {
        const selects = document.getElementsByName('femininePack')
        selects.forEach((select) => {
            select.addEventListener("change", () => {
                const selects = document.getElementsByName('femininePack')
                // let total = 0

                // selects.forEach((select) => {
                //     const selectedOptionValue = select.selectedOptions[0].value
                //     if (selectedOptionValue !== '') {
                //         femininePack.forEach((category) => {
                //             category.items.forEach((item) => {
                //                 if (item.name === selectedOptionValue) {
                //                     total += Number(item.price)
                //                 }
                //             })
                //         })
                //     }
                // })

                const total = calculateTotal(selects, femininePack)

                const femTotal = document.getElementById('fem-total-price')
                femTotal.textContent = total.toFixed(2) + '€'
            })
        })
    }
}