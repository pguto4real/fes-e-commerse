function renderBooks(){
  const booksWrapper = document.querySelector('.books');
  // console.log(booksWrapper);


  const books = getBooks();
 
const bookData = books.map((element)=>{
 
return  `<div class="book">
                            <div class="book__wrapper">

                                <img class="book__img" src="${element.url}" alt="">

                                <div class="book__description">
                                    <div class="book__title">

                                          ${element.title}

                                    </div>
                                    <p class="book__description--author">
                                        By : ${element.author}
                                    </p>
                                    <div class="book__ratings">
                                         ${getStar(element.rating)}
                                   
                                    </div>
                                    <div class="book__price">
                                       <span class="book__price--normal">  ${element.salePrice == null ? '' :'$'+element.salePrice}</span>   $${element.originalPrice}

                                    </div>
                                    
                                </div>

                            </div>

                        </div>`
  }) 
  // console.log(bookData.);
  booksWrapper.innerHTML = bookData.join('')
}
renderBooks();
function getStar(number){
  let star = "";
  for(let i = 1;i<number;i++){
  star += `<i class="fas fa-star" aria-hidden="true"></i>`

  }
  if(!Number.isInteger(number)){
star += `<i class="fas fa-star-half-alt" aria-hidden="true"></i>`
  }
 return star;
}
// getStar(4.5)
// FAKE DATA
function getBooks() {
  return [
    {
      id: 1,
      title: "Crack the Coding Interview",
                url: "assets/crack the coding interview.png",
      originalPrice: 49.95,
      salePrice: 14.95,
      rating: 4.5,
      author:"Gayle Laakmann"
    },
    {
      id: 2,
      title: "Atomic Habits",
      url: "assets/atomic habits.jpg",
      originalPrice: 39,
      salePrice: null,
      rating: 5,
      author:"James Clear"
    },
    {
      id: 3,
      title: "Deep Work",
      url: "assets/deep work.jpeg",
      originalPrice: 29,
      salePrice: 12,
      rating: 5,
      author:"Cal Newport"
    },
    {
      id: 4,
      title: "The 10X Rule",
      url: "assets/book-1.jpeg",
      originalPrice: 44,
      salePrice: 19,
      rating: 4.5,
      author:"Grant Cardone"
    },
    {
      id: 5,
      title: "Be Obsessed Or Be Average",
      url: "assets/book-2.jpeg",
      originalPrice: 32,
      salePrice: 17,
      rating: 4,
      author:"Grant Cardone"
    },
    {
      id: 6,
      title: "Rich Dad Poor Dad",
      url: "assets/book-3.jpeg",
      originalPrice: 70,
      salePrice: 12.5,
      rating: 5,
      author:"Robert Kiyosaki"
    },
    {
      id: 7,
      title: "Cashflow Quadrant",
      url: "assets/book-4.jpeg",
      originalPrice: 11,
      salePrice: 10,
      rating: 4,
      author:"Robert Kiyosaki"
    },
    {
      id: 8,
      title: "48 Laws of Power",
      url: "assets/book-5.jpeg",
      originalPrice: 38,
      salePrice: 17.95,
      rating: 4.5,
      author:"Robert Greene"
    },
    {
      id: 9,
      title: "The 5 Second Rule",
      url: "assets/book-6.jpeg",
      originalPrice: 35,
      salePrice: null,
      rating: 4,
      author:"Mel Robbins"
    },
    {
      id: 10,
      title: "Your Next Five Moves",
      url: "assets/book-7.jpg",
      originalPrice: 40,
      salePrice: null,
      rating: 4,
      author:"Patrick Bet-David"
    },
    {
      id: 11,
      title: "Mastery",
      url: "assets/book-8.jpeg",
      originalPrice: 30,
      salePrice: null,
      rating: 4.5,
      author:"Robert Greene"
    },
  ];
}
