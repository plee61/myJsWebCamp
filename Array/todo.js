//const tolearnList = ['JavaScript', 'JQuery','.Net','Java','Phone development']

//Part 2 Search Array tutorial
//convert array to object array
const tolearnList = [{title:'JavaScript', status:'completed'}, 
                    {title: 'JQuery', status:'uncompleted'},
                    {title: '.Net', status: 'uncompleted'},
                    {title: 'Java', status: 'uncompleted'},
                    {title: 'GitHub', status: 'completed'},
                    {title: 'Phone development', status: 'uncompleted'}]
//sort
const sortToLearnList = function (subList){
    
    subList.sort(function (a,b) {
        if (a.status === 'uncompleted' && b.status === 'completed') 
        {
            return -1
        }
        else if (a.status === 'completed' && b.status === 'uncompleted')
        {
            return 1
        }   
        else {
            return 0
        }
            
    }
    )
}
sortToLearnList(tolearnList,'uncompleted')
console.log(tolearnList)
//filter
const getListTolearn = function(subList, status){
    return subList.filter(function(subject){
        return subject.status === status
    }
    )
}
//console.log(getListTolearn(tolearnList,'uncompleted'))

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

// deleteLearnList(tolearnList,'Java')
// console.log(tolearnList)
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