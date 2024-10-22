import { FaRegStar } from "react-icons/fa";


export default function SingleBook({img, title, author, rating, type, tags}) {
      
  return (
    <>
                 <div className="book border rounded-xl shadow-md p-6">
                        <div className="bg-gray-300 rounded-xl py-8 flex justify-center">
                            <img className="" style={{width: '120px', height: '160px'}} src={img} alt="johfa" />
                        </div>
                        <div>
                            <div className="flex my-5">
                              {
                                tags.map(ele=>(
                                  <>
                                     <button className="tag mr-2">{ele}</button>
                                  </>
                                ))
                              }
                            </div>
                            <h4 className="text-2xl font-semibold mb-3">{title}</h4>
                            <p className="font-semibold">By : {author} </p>
                            <hr className="my-4" style={{borderStyle: "dashed", borderWidth: "1px"}}/>
                            <div className="flex justify-between">
                               <p>{type}</p>
                               <div className="flex">
                                  <p>{rating}</p>
                                  <FaRegStar className="mt-1 ml-3" />
                               </div>
                            </div>
                        </div>
                    </div>
    </>
  )
}
