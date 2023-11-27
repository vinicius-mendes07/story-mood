export function fantasyModalItem(item) {

    const itemContainer = document.createElement('div')
    itemContainer.style = `
        width: 100%;
        display: flex;
        gap: 5px;
    `

    const imageWrapper = document.createElement('div')
    imageWrapper.style = `
        width: 75px;
        height: 75px;
    `

    const itemImage = document.createElement('img')
    itemImage.style = `
        width: 100%;
        height: 100%;
    `
    itemImage.src = item.imageUrl
    
    const itemInfo = document.createElement('div')
    itemInfo.style = `
        width: 100%;
    `

    const itemName = document.createElement('h6')
    itemName.style = `
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        color: var(--light-blue);
    `
    itemName.textContent = item.name

    const itemPrice = document.createElement('span')
    itemPrice.style = `
        color: var(--light-blue);
    `
    itemPrice.textContent = item.price + '€'

    const itemDescription = document.createElement('p')
    itemDescription.style = `
        font-family: sans-serif;
        font-size: 12px;
        font-weight: 300;
    `
    itemDescription.textContent = item.description

    itemName.appendChild(itemPrice)

    itemInfo.appendChild(itemName)
    itemInfo.appendChild(itemDescription)

    imageWrapper.appendChild(itemImage)
    itemContainer.appendChild(imageWrapper)
    itemContainer.appendChild(itemInfo)

    return itemContainer
}
