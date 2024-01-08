export const getCurrentDate = () => {
    const date: any = new Date()
    const month = date.toLocaleString('en-US', { month: 'long' })
    const day = date.getDate()
    const year = date.getFullYear()
    const currentDay: String = `${month} ${day}, ${year}` 
    return currentDay
}