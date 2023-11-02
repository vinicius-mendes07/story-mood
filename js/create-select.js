import { createOption } from "./create-option.js"
import { itemModal } from "./item-modal.js"

export function createSelect(category, selectName) {
    // elemento que envolve o select
    const li = document.createElement('li')
    li.classList.add('info')

    // imagem de check
    const image = document.createElement('img')
    image.classList.add('check-img')
    image.src = './assets/images/check.svg'
    image.alt = 'check image'

    // criando o select
    const select = document.createElement('select')
    select.classList.add('info-text')
    select.name = selectName
    select.id = category.categoryName

    // criando a primeira opção do select caso tenha mais de um item
    if (category.items.length > 1) {
        const firstOption = document.createElement('option')
        firstOption.value = ''
        firstOption.textContent = category.categoryName
        firstOption.selected = true
        firstOption.disabled = true
        select.appendChild(firstOption)
    }

    // criando as demais opções com base nos dados passados
    category.items.forEach(item => {
        const option = createOption(item)
        select.appendChild(option)
    });


    li.append(image)
    li.append(select)

    const { selectInfoWrapper, itemName, price, itemDescription, itemImage } = itemModal()
    
    const selectedOption = select.selectedOptions[0].value
    if (selectedOption === '') {
        selectInfoWrapper.style.visibility = 'hidden'
    } else {
        selectInfoWrapper.style.visibility = 'visible'
        const index = category.items.findIndex((item) => item.name === selectedOption)
        if (index !== -1) {
            itemName.textContent = category.items[index].name ?? 'item name'
            price.textContent = category.items[index].price + '€' ?? '0'
            itemDescription.textContent = category.items[index].description ?? 'item description'
            itemImage.src = category.items[index].imageUrl ?? './assets/images/story-mood.png'
            itemImage.alt = category.items[index].name ?? 'image of item'
        }
    }

    select.addEventListener('change', () => {
        const selectedOption = select.selectedOptions[0].value
        if (selectedOption === '') {
            selectInfoWrapper.style.visibility = 'hidden'
        } else {
            selectInfoWrapper.style.visibility = 'visible'
            const index = category.items.findIndex((item) => item.name === selectedOption)
            if (index !== -1) {
                itemName.textContent = category.items[index].name ?? 'item name'
                price.textContent = category.items[index].price + '€' ?? '0'
                itemDescription.textContent = category.items[index].description ?? 'item description'
                itemImage.src = category.items[index].imageUrl ?? './assets/images/story-mood.png'
                itemImage.alt = category.items[index].name ?? 'image of item'
            }
        }
    })

    li.appendChild(selectInfoWrapper)

    return li
}