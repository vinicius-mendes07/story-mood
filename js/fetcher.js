export default async function fetcher() {
    const res = await fetch("./js/packs.json")
    const data = await res.json()
    return data
}