'use strict';

// don't rely on console displays for real apps! we would normally manipulate
// the content on the page with a success function.
//
// for our application, we'd probably call it "displayBooks"
// or something similar

const writeTable = function(data){

  let books_array;
  if(data.books){
    books_array = data.books;
  }else{
    books_array = data.book;
  }

  console.log('books_array: ', books_array);

  for(let i = 0, max=books_array.length; i < max; i++){
    let newHTML = '\
    <tr>\
      <td id="book-id-number-' + String(i) + '"></td>\
      <td id="book-title-' + String(i) + '"></td>\
      <td id="book-author-' + String(i) + '"></td>\
    </tr>\
      ';

      $('#result-table').append(newHTML);

      if(data.books){
        console.log('books_array: ', books_array);
        $('#book-id-number-' + String(i)).text(JSON.stringify(books_array[i].id));
        $('#book-title-' + String(i)).text(JSON.stringify(books_array[i].title));
        $('#book-author-' + String(i)).text(JSON.stringify(books_array[i].author));
      }else{
        console.log('books_array: ', books_array);
        $('#book-id-number-' + String(i)).text(books_array.id);
        $('#book-title-' + String(i)).text(books_array.title);
        $('#book-author-' + String(i)).text(books_array.author);
      }
  }
};

const onSuccess = function (data) {
  writeTable(data);
  $('#output-title').show();
  $('#result-table').show();
  if (data.book) {
    console.log(data.book);
  } else {
    console.table(data.books);
  }
};

const onError = function (response) {
  console.error(response);
};

const onSuccessfulDelete = function (){
  let message = 'Book was successfully deleted!!!';
  console.log(message);
};

module.exports = {
  onSuccess,
  onError,
  onSuccessfulDelete,
};
