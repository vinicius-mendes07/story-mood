export function btnClick(selects, pack) {
    let go = false
    for (let i = 0; i < selects.length; i++) {
        const selectedOptionValue = selects[i].selectedOptions[0].value
        if (selectedOptionValue === '') {
            alert("Você deve selecionar um item de cada categoria.")
            selects[i].focus()
            go = false
            break
        } else {
            go = true
        }
    }
    if (go) {
        let selectedItems = []
        selects.forEach((select) => {
            const selectedOption = select.selectedOptions[0].value
            pack.forEach((category) => {
                const index = category.items.findIndex((item) => item.name === selectedOption)
                if(index != -1) selectedItems.push({
                    categoryName: category.categoryName,
                    item: category.items[index]
                })
            })
        })
        let message = ``
        selectedItems.forEach((selectedItem) => {
            message += `${selectedItem.categoryName}: ${selectedItem.item.name} - ${selectedItem.item.price}€\n`
        })

        return message
    }
}