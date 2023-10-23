export default async function fetcher() {
    const res = await fetch("/packs.json") 
    const data = await res.json() 
    return data
}