//const tolearnList = ['JavaScript', 'JQuery','.Net','Java','Phone development']

//Part 2 Search Array tutorial
//convert array to object array
const tolearnList = [{title:'JavaScript', status:'uncompleted'}, 
                    {title: 'JQuery', status:'uncompleted'},
                    {title: '.Net', status: 'uncompleted'},
                    {title: 'Java', status: 'uncompleted'},
                    {title: 'Phone development', status: 'uncompleted'}]

function deleteLearnList(learnList, title) 
{
    const titleIndex = learnList.findIndex(function(item,index)
        {
            return item.title === title
            
        }
    )
    if (titleIndex >= 0)
    {
        console.log(titleIndex)
        learnList.splice(titleIndex,1)
    }
}
deleteLearnList(tolearnList,'Java')
console.log(tolearnList)
// //Delete the 3rd item
// tolearnList.splice(2,1)
// //Add a new item onto the end
// tolearnList.push('Dot Net')
// //Remove the first item from the list
// tolearnList.shift()
// const indexDesc = ['first','second','third','fourth','fifth','six','seventh']
// tolearnList.forEach(function(item,index)
//     {
//         let desc = indexDesc[index]
//         console.log(`${index + 1}. The ${desc} item is ${item}`)
//     }
// )
// console.log(`you have ${tolearnList.length} things to learn!`)
// console.log(tolearnList)
// console.log(`You have ${tolearnList.length} things to learn`)
// console.log('item 1 ~' + tolearnList[0])
// console.log('item 2 ~' + tolearnList[1])
// console.log('item 3 ~' + tolearnList[2])
// console.log('item 4 ~' + tolearnList[3])
// console.log('item 5 ~' + tolearnList[4])