export const convertTimestampToDate = (timestamp: number) => {
    var date = new Date(timestamp * 1000)

    const stringDate = JSON.stringify(date)
    const finalDate = stringDate.substring(1,11)
    return finalDate;
}