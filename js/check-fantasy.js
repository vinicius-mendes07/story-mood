export function checkFantasy(check, pack, packTotal, totalElement) {
    check.addEventListener('change', () => {
        let total = 0
        if (check.checked) {
            const fantasyTotal = pack.reduce((sum, product) => sum += +product.items[0].price, 0)

            total = fantasyTotal + packTotal
            totalElement.textContent = total.toFixed(2) + '€'
        } else {
            total = packTotal
            totalElement.textContent = total.toFixed(2) + '€'
        }
    })

}
