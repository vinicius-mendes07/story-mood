export function itemModal() {
    // cria a div que vai conter o modal
    const selectInfoWrapper = document.createElement('div')
    selectInfoWrapper.style = `
        // width: fit-content;
        position: relative;
        height: 16px;
        width: 16px;
        display: flex;
        visibility: hidden;
    `
    // imagem que ativa o modal
    const infoImage = document.createElement('img')
    infoImage.src = '../assets/images/question-icon.svg'
    infoImage.alt = 'question icon'
    infoImage.style = `
        width:16px;
        height: 16px;
    `

    // evento para ativar o modal
    infoImage.addEventListener('mouseover', () => {
        selectInfo.style.opacity = '1'
        selectInfo.style.visibility = 'visible'
    })

    // evento para desativar o modal
    infoImage.addEventListener('mouseout', () => {
        selectInfo.style.opacity = '0'
        selectInfo.style.visibility = 'hidden'
    })

    // modal propriamente dito
    const selectInfo = document.createElement('div')
    selectInfo.style = `
        background-color: #fff;
        position: absolute;
        width: 280px;
        padding: 20px;
        border-radius: 10px;
        top: 100%;
        right: -15px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        opacity: 0;
        transition: .3s;
        z-index: 2;
        visibility: hidden;
    `

    const titleAndPrice = document.createElement('div')
    titleAndPrice.style = `
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        `

    const itemTitle = document.createElement('h4')
    itemTitle.textContent = 'item title'

    const price = document.createElement('span')
    price.textContent = '1,4€'
    price.style = `
    color: var(--dark-red);
    font-weight: 500;
    font-size: 18px;
    `

    const itemDescription = document.createElement('p')
    itemDescription.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dolorem labore et autem eligendi quos necessitatibus deleniti aliquam nostrum, quam ullam accusamus '

    const itemImage = document.createElement('img')
    itemImage.src = '../assets/images/logo-story-mood.png'
    itemImage.style = `
        width: 100px
    `

    titleAndPrice.appendChild(itemTitle)
    titleAndPrice.appendChild(price)

    selectInfo.appendChild(titleAndPrice)
    selectInfo.appendChild(itemDescription)
    selectInfo.appendChild(itemImage)

    selectInfoWrapper.appendChild(infoImage)
    selectInfoWrapper.appendChild(selectInfo)

    return selectInfoWrapper
}