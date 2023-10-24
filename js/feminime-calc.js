import fetcher from "./fetcher.js"

export async function feminineCalc() {

    const data = await fetcher()
    const femininePack = data.femininePack

    if (window !== 'undefined') {
        const selects = document.getElementsByName('femininePack')
        selects.forEach((select) => {
            select.addEventListener("change", () => {
                const selects = document.getElementsByName('femininePack')
                let total = 0

                selects.forEach((select) => {
                    const selectedOptionValue = select.selectedOptions[0].value
                    if (selectedOptionValue !== '') {
                        femininePack.forEach((category) => {
                            category.items.forEach((item) => {
                                if (item.name === selectedOptionValue) {
                                    const itemPrice = Number(item.price).toFixed(2)
                                    console.log(itemPrice)
                                    total += Number(item.price)
                                    console.log(total)
                                }
                            })
                        })
                    }
                })
                const femTotal = document.getElementById('fem-total-price')
                femTotal.textContent = total.toFixed(2) + '€'
            })
        })
    }
}