const apiURL =
  "https://www.googleapis.com/books/v1/volumes?q=web+development&maxResults=16";

const booksList = document.querySelector(".books-list");

fetch(apiURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("فشل في جلب البيانات من Google Books API");
    }
    return response.json();
  })
  .then((data) => {
    booksList.innerHTML = "";

    data.items.forEach((book) => {
      const title = book.volumeInfo.title;
      const authors = book.volumeInfo.authors?.join(", ") || "مؤلف غير معروف";
      const thumbnail =
        book.volumeInfo.imageLinks?.thumbnail || "./images/placeholder.png";
      const previewLink = book.volumeInfo.previewLink;

      const li = document.createElement("li");

      li.innerHTML = `
        <div class="book-img">
          <img src="${thumbnail}" alt="${title}">
        </div>
        <div class="book-info">
          <h3>${title}</h3>
          <p>The Author: ${authors}</p>
          <a href="${previewLink}" target="_blank">Preview Link</a>
        </div>
      `;

      booksList.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("حدث خطأ:", error);
  });
