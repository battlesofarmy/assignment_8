
export default function Banner() {
  return (
    <>
        <section>
            <div className="container bg-gray-300 px-32 py-24 rounded-lg">
                <div className="flex items-center">
                   <div>
                    <h2 className="text-6xl w-4/5 font-simibold" style={{lineHeight: "4rem"}}>Books to freshen up your bookshelf</h2>
                    <button className="mybtn mx-2 bgPrimary mt-10 mb-4">View The List</button>
                   </div>
                   <div>
                    <img className="w-full" src="banner_book.png" alt="I am a img" />
                   </div>
                </div>
            </div>
        </section>
    </>
  )
}
