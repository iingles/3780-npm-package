// Just copied these from eariler assignments


// Write a function which accepts 2 valid dates and returns the difference between them as a number of days
exports.compare = (date1, date2) => {
    // Convert strings into JS dates (expects mm/dd/yy format)
    const dt1 = new Date(date1)
    const dt2 = new Date(date2)

    // Result is returned in milliseconds, need to divide by milliseconds in a day
    return Math.ceil(Math.abs(dt2 - dt1) / (1000*60*60*24))
}

// Write a function to reverse a string
exports.revstr = (inString) => {    
    // Use the array method reverse() - split the string into an array, reverse it, then just return the array
    return inString.split('').reverse().join('')
}

// Write a function to replace all spaces in a string with underscores
exports.underscore = (inString) => {
    // Use a regular expression with the replace() method

    str = inString.replace(/ /g, '_')

    return str
}

// Create a function which returns random hex color code
exports.hexCode = () => {
    // Generate random RGB values
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`     
}

// Append an item to an array 
exports.append = (arr, item) => {
    arr.push(item)
    return arr
}



