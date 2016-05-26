'use strict';

// don't rely on console displays for real apps! we would normally manipulate
// the content on the page with a success function.
//
// for our application, we'd probably call it "displayBooks"
// or something similar.
const onSuccess = function (data) {
  if (data.book) {
    $('#output-title').show();
    $('#result-table').html('<table id=result-table class="table \
    table-bordered"> \
      <tr> \
        <td>ID</td> \
        <td id="book-id-number"></td> \
      </tr> \
      <tr> \
        <td>Title</td> \
        <td id="book-title"></td> \
      </tr> \
      <tr> \
        <td>Author</td> \
        <td id="book-author"></td> \
      </tr> \
    </table>').append();
    $('#result-table').show();
    console.log(data.book);
    $('#book-id-number').text(JSON.stringify(data.book.id));
    $('#book-title').text(JSON.stringify(data.book.title));
    $('#book-author').text(JSON.stringify(data.book.author));
  } else {
    $('#output-title').show();
    $('#output-text').show();
    console.table(data.books);
    $('#output-text').text(JSON.stringify(data.books));
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
