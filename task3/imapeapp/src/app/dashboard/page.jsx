export default function Dashboard(){
    return(
        <>
         <section>
            <div className="bg-blue-950 w-[20em] h-[20em] rounded-[50%] flex items-center justify-center p-6">
                <h1 className="text-center">DRAG AND DROP HERE</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center">
                <div className="w-[20em] h-[15em] rounded-lg bg-black"></div>
                <div className="w-[20em] h-[15em] rounded-lg bg-black"></div>
                <div className="w-[20em] h-[15em] rounded-lg bg-black"></div>
                <div className="w-[20em] h-[15em] rounded-lg bg-black"></div>
            </div>
         </section>
        </>
    )
}