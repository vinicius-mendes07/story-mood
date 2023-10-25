import fetcher from "./fetcher.js"

async function femBtnClick() {
    const selects = document.getElementsByName('femininePack')
    let go = false

    const data = await fetcher()
    const femininePack = data.femininePack

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
    if (go === true) {
        let selectedItems = []
        selects.forEach((select) => {
            const selectedOption = select.selectedOptions[0].value
            femininePack.forEach((category) => {
                const index = category.items.findIndex((item) => item.name === selectedOption)
                if(index != -1) selectedItems.push({
                    categoryName: category.categoryName,
                    item: category.items[index]
                })
            })
        })
        let message = `Olá, gostaria de adquirir este pack:\nEstagiario: pack feminino\n\n`
        selectedItems.forEach((selectedItem) => {
            message += `${selectedItem.categoryName}: ${selectedItem.item.name} - ${selectedItem.item.price}€\n`
        })
        const femTotal = document.getElementById('fem-total-price')
        message += `\n\nTotal: ${femTotal.textContent}`
        window.open("https://api.whatsapp.com/send?phone=+5566996796020&text="+encodeURIComponent(message), '_blank')
    }
}

const femBtn = document.getElementById('fem-btn')

femBtn.addEventListener('click', femBtnClick)