

export const getCurrentYear = (() => {
    let currentTime = new Date()
    return currentTime.getFullYear().toString().slice(-2)
})

export const getCurrentMonthDay = (() => {
    let currentTime = new Date()
    return `${currentTime.toLocaleString('default', { month: 'long' }).toString()} 
		${currentTime.getFullYear().toString()}`
})