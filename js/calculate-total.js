export function calculateTotal(selects, pack) {

    let total = 0

    selects.forEach((select) => {
        const selectedOptionValue = select.selectedOptions[0].value
        if (selectedOptionValue !== '') {
            pack.forEach((category) => {
                category.items.forEach((item) => {
                    if (item.name === selectedOptionValue) {
                        total += Number(item.price)
                    }
                })
            })
        }
    })
    return total
}