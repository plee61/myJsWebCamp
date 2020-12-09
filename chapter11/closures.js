const createTip = (percent) => {
    return (bill) => {
        return (bill * (percent/100))

    }
}
const tip20 = createTip(20)
console.log(tip20(100))