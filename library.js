const myLibrary = [];

function Book(title, author, noOfPages, isRead) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
  this.isRead = isRead; //boolean

}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.noOfPages} pages, ${this.isRead ? "read already" : "not read yet"}`;

}

function addBookToLibrary(obj) {
    let book = new Book(obj.title, obj.author, obj.noOfPages, obj.isRead);
    myLibrary.push(book);

    
}

function deleteBookFromLibrary(index) {
    delete myLibrary[index];
    let book = document.querySelector(".book-" + String(index));

    book.remove();
    

}

function displayLibrary(){
    let library = document.querySelector(".myLibrary");
    while (library.firstChild) {
        library.firstChild.remove();
    }
    

    for (let i = 0; i < myLibrary.length; i++){
        if (myLibrary[i] === undefined) continue;

        let book = document.createElement("div");
        book.classList.add("book-" + String(i));
        let info = document.createElement("p");
        let button = document.createElement("button");
        button.textContent = "Delete book";

        info.textContent = myLibrary[i].info();
        button.addEventListener("click", () => {
                                            deleteBookFromLibrary(i);
                                            console.table(myLibrary);
                                        

        });

        book.appendChild(info);
        book.appendChild(button);
        library.appendChild(book);

    }

}

let button = document.querySelector('#addNewBook');
button.addEventListener("click", (event) => {
                                    event.preventDefault();
                                    const form = document.querySelector('form');
                                    const formData = new FormData(form);
                                    
                                    const data = {};
                                    formData.forEach((value, key) => {
                                        data[key] = value;
                                    });
                                    if (data.title.trim() === "") return;
                                    if (data.author.trim() === "") return;
                                    if (data.noOfPages.trim() === "") return;
                                    if (data.isRead === undefined) return;
                                    
                                    addBookToLibrary(data);
                                    displayLibrary(); 
                                    console.table(myLibrary);
                                    }
);


