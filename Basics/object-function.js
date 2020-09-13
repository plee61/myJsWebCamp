let myBook = {
    title: '1994 Horror',
    Author: 'George Cornwell',
    PageCount: 326
}

let otherBook = {
    title: 'A People History',
    Author: 'Howard Zim',
    PageCount: 723
}

let getSummary = function (book) {
    return {
        summary:`${book.title} by ${book.Author}`,
        pageCountSymmary:`${book.title} is ${book.PageCount} pages long`
    }
    
}
let bookSummary = getSummary(myBook)
let otherBooksummary = getSummary(otherBook)

console.log(bookSummary.pageCountSymmary)