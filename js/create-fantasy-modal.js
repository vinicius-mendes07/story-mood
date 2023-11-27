import { fantasyModalItem } from "./fantasy-modal-item.js";

export function createFantasyModal(pack) {

    const modalContainer = document.createElement('div')
    modalContainer.style = `
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
    `
    const closeDiv = document.createElement('div')
    closeDiv.style = `
        position: fixed;
        width: 100%;
        height: 100%;
    `
    closeDiv.addEventListener('click', () => {
        document.querySelector('body').removeChild(modalContainer)
    })

    const itemsModal = document.createElement('div')
    itemsModal.style = `
        background-color: #fff;
        max-width: 600px;
        max-height: 90%;
        margin: 10px 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 15px;
        gap: 5px;
        box-shadow: 3px 3px 20px 10px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        overflow: auto;
        z-index: 11;
    `

    const modalHeader = document.createElement('div')
    modalHeader.style = `
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 5px;
        justify-content: space-between;
    `
    
    
    const totalPrice = document.createElement('span')
    totalPrice.style = `
        color: var(--light-blue);
        font-weight: 500;
    `

    const total = pack.reduce((sum, items) => sum += +items.items[0].price, 0)
    totalPrice.textContent = 'Total: ' + total + '€'

    const closeBtn = document.createElement('img')
    closeBtn.style = `
        width: 18px;
        height: 18px;
        cursor: pointer;
    `
    closeBtn.src = '../assets/images/x.png'

    closeBtn.addEventListener('click', () => {
        document.querySelector('body').removeChild(modalContainer)
    })

    modalHeader.appendChild(totalPrice)
    modalHeader.appendChild(closeBtn)

    itemsModal.appendChild(modalHeader)
    
    for (let i = 0; i < pack.length; i++) {
        const {items} = pack[i];
        const itemContainer = fantasyModalItem(items[0])
        itemsModal.appendChild(itemContainer)

        const separator = document.createElement('hr')
        separator.style = `
            width: 80%;
            margin: 0 auto;
            height: 1px;
            border: 0px;
            background-color: #dddddd;
        `
        
        if(i !== pack.length - 1) {
            itemsModal.appendChild(separator)
        }
        
    }

    modalContainer.appendChild(itemsModal)
    modalContainer.appendChild(closeDiv)

    return modalContainer
}
