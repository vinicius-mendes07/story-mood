import { createOption } from "./create-option.js"
import { itemModal } from "./item-modal.js"

export function createSelect(category) {
    // elemento que envolve o select
    const li = document.createElement('li')
    li.classList.add('info')

    // imagem de check
    const image = document.createElement('img')
    image.classList.add('check-img')
    image.src = '../assets/images/check.svg'
    image.alt = 'check image'

    // criando o select
    const select = document.createElement('select')
    select.classList.add('info-text')
    select.name = category.categoryName
    select.id = category.categoryName

    // criando a primeira opção do select
    const firstOption = document.createElement('option')
    firstOption.value = ''
    firstOption.textContent = category.categoryName
    firstOption.selected = true
    firstOption.disabled = true
    select.appendChild(firstOption)

    // criando as demais opções com base nos dados passados
    category.items.forEach(item => {
        const option = createOption(item)
        select.appendChild(option)
    });


    li.append(image)
    li.append(select)

    const modal = itemModal()
    select.addEventListener('change', () => {
        if(select.selectedOptions[0].value === '') {
            modal.style.visibility = 'hidden'
            // modal.opacity = 0
        } else {
            modal.style.visibility = 'visible'
            // modal.opacity = 1
        }
        console.log(modal)
    })

        li.appendChild(modal)


    return li
}

/* 
<li class="info">
                                    <img src="./assets/images/check.svg" alt="check image" class="check-img">
                                    <select class="info-text" name="fem-goodies" id="fem-goodies">
                                        <option value="" selected disabled>Goodies Vibrador</option>
                                        <option value="Goodies Vibrador de Ponto g de Algodão e Usb Bunny Silicone Fúcsia">Goodies Vibrador de Ponto g de Algodão e Usb Bunny Silicone Fúcsia</option>
                                        <option value="Goodies Sweety Vibrador Punto g Usb Silicona Fuchsi">Goodies Sweety Vibrador Punto g Usb Silicona Fuchsi</option>
                                        <option value="Goodies Cakey Vibrador Punto g y Conejito Usb Silicona Fuchsia">Goodies Cakey Vibrador Punto g y Conejito Usb Silicona Fuchsia</option>
                                        <option value="Goodies Honey G-spot Vibrador Silicone Usb Fúcsia">Goodies Honey G-spot Vibrador Silicone Usb Fúcsia</option>
                                        <option value="Vibrador Ünihörn Navyspace Com Línguas Giratórias Azul">Vibrador Ünihörn Navyspace Com Línguas Giratórias Azul</option>
                                        <option value="Vibrador de Veludo Engily Ross Com Impulso e Pulsação">Vibrador de Veludo Engily Ross Com Impulso e Pulsação</option>
                                    </select>
                                </li>

*/