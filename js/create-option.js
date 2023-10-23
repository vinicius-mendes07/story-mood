export function createOption(item) {
    const option = document.createElement('option')
    option.value = item.name
    option.textContent = item.name
    return option
}