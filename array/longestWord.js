const longestWord = (sen) => {
    return Math.max(...sen.split(" ").map(item => item.length))
}


console.log(longestWord('hi I am Raja Barad'));