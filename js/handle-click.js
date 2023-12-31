import { mountMessage } from "./mount-message.js"

export function handleClick(selects, pack, packMessage, total, fantasyMessage = ``) {
    const message = mountMessage(selects, pack)
    if(message) {   
        packMessage += message
        packMessage += fantasyMessage
        packMessage += `\nTotal: ${total}`
        window.open("https://api.whatsapp.com/send?phone=+5566996796020&text="+encodeURIComponent(packMessage), '_blank')
    }
}