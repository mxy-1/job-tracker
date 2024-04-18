export const formatDate = (dateString: string):string => {
    const date = new Date(dateString)
    const day = date.getUTCDate().toString().padStart(2, "0")
    const month = (date.getUTCMonth()+1).toString().padStart(2, "0")
    const year = date.getUTCFullYear().toString().slice(2)
    return `${day}/${month}/${year}`
}

export const getCurrentDate = ():string => {
    const d = new Date()
    const day = d.getDate().toString().padStart(2, "0")
    const month = (d.getMonth() + 1).toString().padStart(2, "0")
    const year = d.getFullYear()
    return `${year}-${month}-${day}`
}