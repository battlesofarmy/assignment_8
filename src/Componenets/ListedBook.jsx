import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { MdInsertPageBreak, MdPersonOutline } from "react-icons/md";


export default function ListedBook() {
  const books = useLoaderData();  // All books data
  const readBook = JSON.parse(localStorage.getItem("readbooks"));  // Parse localStorage string
  const wishList = JSON.parse(localStorage.getItem("wishlist"));  // Parse localStorage string

  const [readBooksList, setReadBooksList] = useState([]);
  const [wishListBooks, setWishListBooks] = useState([]);

  useEffect(() => {
    if (readBook && books) {
      // Find the books in 'books' whose IDs match the IDs in 'readBook'
      const matchedBooks = books.filter(book => readBook.includes(String(book.id)));
      setReadBooksList(matchedBooks);  // Update the state with the matched books
    }
  }, [books, readBook]);


  // wishList
  useEffect(() => {
    if (wishList && books) {
      // Find the books in 'books' whose IDs match the IDs in 'readBook'
      const matchedBooks = books.filter(book => wishList.includes(String(book.id)));
      setWishListBooks(matchedBooks);  // Update the state with the matched books
    }
  }, [books, wishList]);

  console.log(wishListBooks)

  return (
    <>
      <section>
        <div className="container">
          <h2 className="text-4xl text-center py-12 rounded-lg font- bg-gray-300">Books</h2>
          {/* The tab  */}
          <div role="tablist" className="tabs tabs-lifted my-5">
            <input defaultChecked  type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Book To Read" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              {/* Tab content 1 */}


                          
                <div className="my-6">
                  {readBooksList.length > 0 ? (
                    readBooksList.map((book) => (
                      <div key={book.id} className="book-card border shadow-lg grid p-10 grid-cols-5 my-5">
                        <div className="col-span-1 flex">
                          <img src={book.img_url} alt={book.title} />
                        </div>
                        <div className="col-span-4">
                          <h3 className="text-2xl font-semibold">{book.title}</h3>
                          <p className="xl my-2" style={{fontWeight: '500'}}>By: {book.author}</p>
                          {/* Tag and puslishing year  */}
                          <div className="flex gap-10">
                            <p className="mt-6"><b>Tags: </b></p>
                            {/* tags  */}
                            <div>
                              {/* print single tag  */}
                                <div className="flex my-5">
                                  {
                                    book.tags.map(ele=>(
                                      <>
                                          <button className="tag mr-2">{ele}</button>
                                      </>
                                    ))
                                  }
                                </div>
                            </div>
                            {/* publishing year  */}
                            <div className="my-6 flex" style={{fontWeight: '600'}}>
                                <CiLocationOn className="mt- mx-2" style={{fontSize: "22px"}}/>
                                <p>Year of Publishing: {book.year_of_published}</p>
                            </div>
                          </div>

                          {/* publisher and number of pages  */}
                          <div className="flex">
                            <div className="flex">
                              <MdPersonOutline style={{fontSize: '20px'}} className="mt- mr-2"></MdPersonOutline>
                              <p>Publisher: {book.publisher}</p>
                            </div>
                            <div className="ml-5 flex">
                              <MdInsertPageBreak  style={{fontSize: '20px'}} className="mt- mr-2"></MdInsertPageBreak>
                              <p>Pages: </p>
                            </div>
                          </div>
                          <hr className="my-5" />
                          <div className="flex gap-6">
                              <button style={{padding: '5px 18px',fontWeight: '600', background: '#e0eeff', borderRadius: '100px'}}>Catagory: {book.type}</button>
                              <button style={{padding: '5px 18px',fontWeight: '600', background: '#fff3e0', borderRadius: '100px'}}>Rating: {book.rating}</button>
                              <button style={{padding: '5px 18px',fontWeight: '600', background: '#23be0a', borderRadius: '100px', color: 'white'}}>View Details</button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No books found in the list.</p>
                  )}
                </div>



            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="WishList Book"
               />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              {/* wish list start  */}
                                         
                <div className="my-6">
                  {wishListBooks.length > 0 ? (
                    wishListBooks.map((book) => (
                      <div key={book.id} className="book-card border shadow-lg grid p-10 grid-cols-5 my-5">
                        <div className="col-span-1 flex">
                          <img src={book.img_url} alt={book.title} />
                        </div>
                        <div className="col-span-4">
                          <h3 className="text-2xl font-semibold">{book.title}</h3>
                          <p className="xl my-2" style={{fontWeight: '500'}}>By: {book.author}</p>
                          {/* Tag and puslishing year  */}
                          <div className="flex gap-10">
                            <p className="mt-6"><b>Tags: </b></p>
                            {/* tags  */}
                            <div>
                              {/* print single tag  */}
                                <div className="flex my-5">
                                  {
                                    book.tags.map(ele=>(
                                      <>
                                          <button className="tag mr-2">{ele}</button>
                                      </>
                                    ))
                                  }
                                </div>
                            </div>
                            {/* publishing year  */}
                            <div className="my-6 flex" style={{fontWeight: '600'}}>
                                <CiLocationOn className="mt- mx-2" style={{fontSize: "22px"}}/>
                                <p>Year of Publishing: {book.year_of_published}</p>
                            </div>
                          </div>

                          {/* publisher and number of pages  */}
                          <div className="flex">
                            <div className="flex">
                              <MdPersonOutline style={{fontSize: '20px'}} className="mt- mr-2"></MdPersonOutline>
                              <p>Publisher: {book.publisher}</p>
                            </div>
                            <div className="ml-5 flex">
                              <MdInsertPageBreak  style={{fontSize: '20px'}} className="mt- mr-2"></MdInsertPageBreak>
                              <p>Pages: </p>
                            </div>
                          </div>
                          <hr className="my-5" />
                          <div className="flex gap-6">
                              <button style={{padding: '5px 18px',fontWeight: '600', background: '#e0eeff', borderRadius: '100px'}}>Catagory: {book.type}</button>
                              <button style={{padding: '5px 18px',fontWeight: '600', background: '#fff3e0', borderRadius: '100px'}}>Rating: {book.rating}</button>
                              <button style={{padding: '5px 18px',fontWeight: '600', background: '#23be0a', borderRadius: '100px', color: 'white'}}>View Details</button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No books found in the list.</p>
                  )}
                </div>
              {/* wish list end  */}
            </div>


          </div>
      {/* end the tab  */}

        </div>
      </section>
    </>
  );
}
