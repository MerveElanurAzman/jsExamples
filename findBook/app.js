let book1 = {
    name:"Pride and Prejudice",
    author:"Jane Austen",
    price:25,
    shelf: "1.5.SHELF"
}
let book2 = {
    name:"To Kill a Mockingbird",
    author:"Harper Lee",
    price: 56,
    shelf: "2.3.SHELF"
}
let book3 = {
    name:"Frankenstein",
    author:"Mary Shelley",
    price:34,
    shelf: "3.4.SHELF"
}
let book4 = {
    name:"1984",
    author:"George Orwell",
    price:45,
    shelf: "4.1.SHELF"
}
let book5 = {
    name:"Animal Farm",
    author:"George Orwell",
    price:59,
    shelf: "5.3.SHELF"
}
let book6 = {
    name:"Anna Karenina",
    author:"Leo Tolstoy",
    price:70,
    shelf: "5.5.SHELF"
}
let book7 = {
    name:"Moby-Dick",
    author:"Herman Melville",
    price:30,
    shelf: "3.5.SHELF"
}

let book8 = {
    name:"Crime and Punishment",
    author:"Fyodor Dostoevsky",
    price:65,
    shelf: "1.3.SHELF"
}
let book9 = {
    name:"The Color Purple",
    author:"Alice Walker",
    price:45,
    shelf: "3.2.SHELF"
}
let book10= {
    name:"Crime and Punishment",
    author:"Fyodor Dostoevsky",
    price:65,
    shelf: "2.4.SHELF"
}
let books = [book1,book2,book3,book4,book5,book6,book7,book8,book9,book10];

let shelf11={
    code: "1.1.SHELF",
    view: false
}
let shelf12={
    code: "1.2.SHELF",
    view: false
}
let shelf13={
    code: "1.3.SHELF",
    view: false
}
let shelf14={
    code: "1.4.SHELF",
    view: false
}
let shelf15={
    code: "1.5.SHELF",
    view: false
}


let shelf21={
    code: "2.1.SHELF",
    view: false
}
let shelf22={
    code: "2.2.SHELF",
    view: false
}
let shelf23={
    code: "2.3.SHELF",
    view: false
}
let shelf24={
    code: "2.4.SHELF",
    view: false
}
let shelf25={
    code: "2.5.SHELF",
    view: false
}

let shelf31={
    code: "3.1.SHELF",
    view: false
}
let shelf32={
    code: "3.2.SHELF",
    view: false
}
let shelf33={
    code: "3.3.SHELF",
    view: false
}
let shelf34={
    code: "3.4.SHELF",
    view: false
}
let shelf35={
    code: "3.5.SHELF",
    view: false
}


let shelf41={
    code: "4.1.SHELF",
    view: false
}
let shelf42={
    code: "4.2.SHELF",
    view: false
}
let shelf43={
    code: "4.3.SHELF",
    view: false
}
let shelf44={
    code: "4.4.SHELF",
    view: false
}
let shelf45={
    code: "4.5.SHELF",
    view: false
}

let shelf51={
    code: "5.1.SHELF",
    view: false
}
let shelf52={
    code: "5.2.SHELF",
    view: false
}
let shelf53={
    code: "5.3.SHELF",
    view: false
}
let shelf54={
    code: "5.4.SHELF",
    view: false
}
let shelf55={
    code: "5.5.SHELF",
    view: false
}


let shelfs= [

    [shelf51,shelf52,shelf53,shelf54,shelf55],
    [shelf41,shelf42,shelf43,shelf44,shelf45],
    [shelf31,shelf32,shelf33,shelf34,shelf35],
    [shelf21,shelf22,shelf23,shelf24,shelf25],
    [shelf11,shelf12,shelf13,shelf14,shelf15]
];


function createShelf()
{
    console.clear();
    let line="";

    for(let i =0;i<shelfs.length;i++)
        {
        
            for(let j=0;j<5;j++)
                {
                    line+="|";
                
                    if(shelfs[i][j].view ==true)
                    {
                        line+= shelfs[i][j].code;

                    }
                    else
                    {
                        line+= "---";
                    }
                
                }

                console.log(line + "|");
                console.log("----------------------");
                 line="";
        }

    
}

function findBook(bookName)
{

    let shelfCode=null;
    books.forEach(function(book)
    {
        if(book.name.toUpperCase().includes(bookName.toUpperCase(),0))
        {
            shelfCode=book.shelf;

           
        }
    }

);
return shelfCode;
}

function showShelf(shelfCode)
{
    for(let i =0;i<shelfs.length;i++)
    {
        for(let j =0;j<5;j++)
            {
                if(shelfs[i][j].code ==shelfCode)
                {
                   
                    shelfs[i][j].view=true;
                  

                    break;
                }
            }
    }
}




createShelf();

let bookName = prompt( "Please enter a book name ")
let shelfCode=findBook(bookName);


if(shelfCode!=null)
{
    showShelf(shelfCode);
    createShelf();

}
else
{
    alert("The book you entered is not available in our library. ");
}


