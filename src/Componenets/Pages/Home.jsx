// import AllBook from "../Boooks/AllBook";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Parts/Banner";
import SingleBook from "../Parts/SingleBook";

export default function Home() {
  const books = useLoaderData();
//   const {id} = useParams();
//   const idInt = parseInt(id);
//   const book = books.find( book => book.id === idInt);


  return (
    <>
          <Banner></Banner>
          <section className="py-16">
            <div className="container">
                <h2 className="text-4xl font-bold text-center my-10">Books</h2>
                   <div className="books grid grid-cols-3 gap-10">

                    {
                        // console.log( books.img_url)
                        books.map((ele, i)=>(
                            <>
                              <Link to={"/book/" + ele.id}>

                                   <SingleBook  

                                   img={ele.img_url}
                                   title={ele.title}
                                   rating={ele.rating}
                                   author={ele.author} 
                                   type={ele.type} 
                                   tags={ele.tags}

                                   key={i}></SingleBook>
                              </Link>

                            </>
                        ))
                    }

                   </div>
            </div>
          </section>
    </>
  )
}
