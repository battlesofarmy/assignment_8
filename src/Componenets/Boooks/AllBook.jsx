import { useLoaderData, useParams } from 'react-router-dom';
import { saveJobApplication, wishListBooks } from '../../Utilities/LocalStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function AllBook() {
  const books = useLoaderData();
  const {id} = useParams();
  const idInt = parseInt(id);
  const book = books.find( book => book.id === idInt);


  const handleReadBooks=()=>{
    saveJobApplication(id)
  }


  
  
  const handleWishList = ()=>{
    const wishlistBook = JSON.parse(localStorage.getItem("wishlist")); // Parse localStorage string


    if(wishlistBook){
    const val = wishlistBook.find(item => parseInt(item) === parseInt(id));

      if(!val){
        toast("Your Book Added to the Wishlist");
      }else{
        toast("Sorry it's Already Exists");
      }
    }
    
    wishListBooks(id);
  }
  
  
  
  
  return (
    
    <>
    <h2 className='container text-4xl'>Total Read Books: {}</h2>
    {
      // console.log(readBook)
    }
    <ToastContainer />
    
    <section className='pb-32 pt-2'>
      <div className="container">
        <div className="grid grid-cols-6 my-5 gap-10">
          <div className="col-span-3 bg-gray-300 flex justify-center items-center">
            <img style={{width: "300px", height: 'auto'}} src={book.img_url} alt="adsf" />
            
          </div>

          <div className="col-span-3">
            <h2 className='text-4xl font-semibold'>{book.title}</h2>
            <h4 className='my-4' style={{fontWeight: '500', fontSize: '20px'}}>By : {book.author}</h4>
            <hr />
            <h4 className='my-4 text-xl'>{book.type}</h4>
            <hr />
            <p className='my-4'> <b>Review : </b> {book.review} </p>
            <p className='m-5'><b className='mr-2'>Tags: </b>
            {
              book.tags.map((ele)=>(
                <>
                  <button className="tag mr-2">{ele}</button>
                </>
              ))
            }
                {/* <button className="tag mr-2">Young Adult</button> */}
            </p>
            <hr />

            <div className='flex gap-12 my-6'>
              <div>
              <div className='my-2'>Number Of Pages: </div>
              <div className='my-2'>Publisher: </div>
              <div className='my-2'>Year of Publishing: </div>
              <div className='my-2'>Rating: </div>
              </div>
              <div className='font-bold'>
                <p className='my-2'>{book.pages}</p>
                <p className='my-2'>{book.publisher}</p>
                <p className='my-2'>{book.year_of_published}</p>
                <p className='my-2'>{book.rating}</p>
              </div>
            </div>

            <div className='flex gap-8'>
              <button onClick={handleReadBooks} className='btn btn-outline'>Read</button>
              <button onClick={handleWishList} className='btn btn-primary'>Wishlist</button>

            </div>
          </div>

          
        </div>
      </div>
    </section>
    
    </>
  )
}
