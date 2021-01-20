

class Author{
    constructor(firstName, lastName, age, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.city = city;
    }
}

class Book{
    constructor(title, numPages, year, type){
        this.title = title;
        this.numPages = numPages;
        this.year = year;
        this.type = type;
        this.author = null;
    }

    setAuthor(author){
        this.author = author;
    }

}

class Shelf{
    books = [];

    assignBook(book){

        if(this.books.length === 4){
            console.log("You have reached the max number of books for this shelf!");
        } else { 
            this.books.push(book);
        }
        
    }

    displayBooks(){
        console.log(`On this shelf there are ${this.books.length} books.`);
        console.log("This books are:");
        console.log(this.books);
    }

}

class Library{
    shelves = [];
    
    
    constructor(name){
        this.name = name;
    }

    addShelf(shelf){
        this.shelves.push(shelf);
        
    }

    moveBook(book){
        if(this.shelves[0].books.includes(book)){
            this.shelves[0].books.splice(this.shelves[0].books.indexOf(book),1);
            this.shelves[1].books.push(book);
        } else if(this.shelves[1].books.includes(book)){
            this.shelves[1].books.splice(this.shelves[1].books.indexOf(book),1);
            this.shelves[0].books.push(book);
        }
    }

    burnBooks(year){
        
        for(let i=0; i< this.shelves.length; i++){
            let arr = [];
            for(let j = 0; j < this.shelves[i].books.length; j++){
                if(this.shelves[i].books[j].year > year){
                arr.push(this.shelves[i].books[j]);
                }
            }
            this.shelves[i].books = [];
            this.shelves[i].books = [...arr];
        }
    }

    bookByAuthor(name){
        let arr = [];
        for(let i=0; i< this.shelves.length; i++){
            for(let j = 0; j < this.shelves[i].books.length; j++){
                if(this.shelves[i].books[j].author.lastName === name){
                arr.push(this.shelves[i].books[j]);
                }
            }
        }
        console.log(`The author '${name}' have ${arr.length} books in 'My Library'`);
        console.log(arr);
    }

    sortByPages(pages){
        for(let i=0; i< this.shelves.length; i++){
            for(let j = 0; j < this.shelves[i].books.length; j++){
                if(this.shelves[i].books[j].numPages > pages){
                    this.moveBook(this.shelves[i].books[j]);
                }
            }
        }
    }
    
    
}

let book1 = new Book("Title Book1", 120, 2020, "Novel");
book1.setAuthor(new Author("John", "Smith", 23, "Paris"));

let book2 = new Book("Title Book2", 150, 2010, "School Text-Book");
book2.setAuthor(new Author("Jane", "Doe", 33, "Roma"));

let book3 = new Book("Title Book3", 200, 2016, "School Text-Book");
book3.setAuthor(new Author("Mo", "Ashouri", 29, "Berlin"));

let book4 = new Book("Title Book4", 170, 2019, "Novel");
book4.setAuthor(new Author("Marko", "Pacak", 28, "Berlin"));


let shelf1 = new Shelf;
shelf1.assignBook(book1);
shelf1.assignBook(book2);
shelf1.assignBook(book3);
shelf1.assignBook(book4);


console.log(shelf1.books);
console.log(shelf1.books[0]);
console.log(shelf1.books[0].author);



let book5 = new Book("Title Book5", 270, 2009, "School Text-Book");
book5.setAuthor(new Author("Raul", "Eduarte", 26, "Leipzig"));

let book6 = new Book("Title Book6", 250, 2012, "Novel");
book6.setAuthor(new Author("Marko", "Pacak", 25, "Weissenfels"));

let book7 = new Book("Title Book7", 220, 2016, "Novel");
book7.setAuthor(new Author("Florin", "Fiath", 31, "Timisoara"));


let shelf2 = new Shelf;
shelf2.assignBook(book5);
shelf2.assignBook(book6);
shelf2.assignBook(book7);

let library = new Library("My Library");
library.addShelf(shelf1);
library.addShelf(shelf2);

console.log(library);

shelf1.displayBooks();
shelf2.displayBooks();

library.moveBook(book1);
shelf1.displayBooks();
shelf2.displayBooks();

library.moveBook(book7);
shelf1.displayBooks();
shelf2.displayBooks();

console.log(library.shelves[0].books[0].year)



library.burnBooks(2015);
shelf1.displayBooks();
shelf2.displayBooks();

library.bookByAuthor("Pacak");


library.sortByPages(200);
shelf1.displayBooks();
shelf2.displayBooks();