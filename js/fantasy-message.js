export function fantasyMessage(check, pack) {
    let message = ``

    if (check.checked) {
        message = `\nPack fantasia:\n\n`
        pack.forEach((product) => {
            message += `${product.categoryName}: ${product.items[0].name} - ${product.items[0].price}€\n`
        })
    } else {
        message = ``
    }
    return message
}