let myObject = {
    title: '1994 Horror',
    Author: 'George Cornwell',
    PageCount: 326
}
console.log(myObject);
console.log(myObject.Author);
console.log(`${myObject.title} by ${myObject.Author}`);

myObject.title = 'Animal Farm';
console.log(`${myObject.title} by ${myObject.Author}`);
