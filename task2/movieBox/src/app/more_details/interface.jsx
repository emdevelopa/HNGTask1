import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Interface({ title, id, backdrop_path, poster_path, year, overview, runtime, genres, writer, director, stars, vote_average, mostWatch }) {
  const [sidePanel, setSidePanel] = useState(true);

  const runtimeMinutes = runtime;
  // Calculate hours and minutes
  const hours = Math.floor(runtimeMinutes / 60);
  const minutes = runtimeMinutes % 60;

  // Format the result
  const formattedRuntime = hours + "h " + minutes + "m";

  return (
    <>
      <nav className="flex justify-end md-[650px]:hidden z-20 fixed w-full bg-[#00000072]">
        <Image
          src="Menu.svg"
          alt="menuBtn"
          height={0}
          width={40}
          style={{ width: "auto", height: "auto" }}
          onClick={() => {
            setSidePanel(!sidePanel);
          }}
        />
      </nav>
      <section className="flex justify-between relative font-normal">

        <aside className={`border z-20 border-[grey] relative py-[4em] rounded-tr-[3em] rounded-br-[3em] max-md-[650px]:translate-x-[-100%] md-[650px]:w-[18%] max-md-[650px]:absolute ${sidePanel ? "max-md-[650px]:hidden" : "w-[80%] bg-[#fff] max-md-[650px]:translate-x-[0%]"}`}>
          <div className="absolute top-4 right-8 md-[650px]:hidden"><FaTimes onClick={() => {
            setSidePanel(!sidePanel);
          }} /> </div>
          <div className="flex flex-col gap-16">
            <div className="px-4">
              <Image src="LogoBlack.svg" alt="logo" width={150} priority height={0} style={{ width: "auto", height: "auto" }} />
            </div>
            <section className="flex flex-col text-[#666] font-semibold text-[20px] justify-around gap-8">
              <Link className="flex gap-3 px-7" href='/'>
                <Image src="Home.svg" alt="logo" width={150} priority height={0} style={{ width: "auto", height: "auto" }} /><p>Home</p>
              </Link>
              <div className=" bg-[#BE123C1A] text-[#BE123C] relative left-0 right-0 flex px-7 py-6 border-r-[5px] border-r-[#BE123C]">
                <Link className={`flex gap-3`} href={`http://localhost:3000/more_details#title=${title}#id=${id}`}>
                  <Image src="MovieProjector.svg" alt="logo" width={150} priority height={0} style={{ width: "auto", height: "auto" }} /><p>Movies</p>
                </Link>
              </div>
              <Link className="flex gap-3 px-7" href={`http://localhost:3000/more_details#TVseries`}>
                <Image src="TVShow.svg" alt="logo" width={150} priority height={0} style={{ width: "auto", height: "auto" }} /><p>TV Series</p>
              </Link>
              <Link className="flex gap-3 px-7" href='http://localhost:3000/more_details#Upcoming'>
                <Image src="Calendar.svg" alt="logo" width={150} priority height={0} style={{ width: "auto", height: "auto" }} /><p>Upcoming</p>
              </Link>
            </section>
            <section className="px-6">
              <section className="border w-[90%] border-[#BE123CB2] rounded-2xl px-4 pb-[1em] pt-[3em] flex flex-col gap-2">
                <h2 className="text-[#333333CC] font-semibold">Play movie quizzes and earn free tickets</h2>
                <p className="text-[#666] text-[15px]">50k people are playing now</p>
                <div className="flex justify-center">
                  <button className="rounded-[4em] bg-[#BE123C33] text-[#BE123C] py-1 px-4">Start playing</button>
                </div>
              </section>
            </section>
            <div className="text-[#666] font-semibold text-[20px] px-6">
              <Link className="flex gap-3" href='/'>
                <Image src="Logout.svg" alt="logo" width={150} priority height={0} style={{ width: "auto", height: "auto" }} /><p>Log out</p>
              </Link>
            </div>
          </div>
        </aside>
        <main className="w-[82%]  max-md:w-full px-6 max-md-[650px]:px-0">
          <section className=" relative p-2">
            <div className="relative">
              <div className='h-[25em] w-full z-10 absolute bg-[#0000003a] flex items-center justify-center'>
                <div className="flex flex-col justify-center items-center">
                  <div className="bg-[#E8E8E833] backdrop-blur-[2px] w-[110px] h-[110px] rounded-[100%] flex items-center justify-center cursor-pointer">
                    <Image src="Play2.svg" alt="logo" width={150} priority height={0} style={{ width: "auto", height: "auto" }} />
                  </div>
                  <p className="text-[#E8E8E8] text-[25px] font-semibold">Watch Trailer</p>
                </div>
              </div>
              <div className='h-[25em] p-6 flex justify-between bg-cover bg-center bg-no-repeat relative rounded-2xl' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backdrop_path})` }}>
              </div>
            </div>
            <div className="flex justify-between p-2  max-md-[480px]:gap-2 max-md-[480px]:items-start">
              <div className="flex items-center text-[18px] font-semibold text-[#404040] max-md-[480px]:flex-col max-md-[480px]:items-start max-md-[480px]:justify-normal justify-center gap-2 max-md-[480px]:text-[18px]">
                <h2 className="max-md-[480px]:text-[18px]">{title}</h2>
                <div className="max-md-[480px]:flex md-[480px]:justify-between md-[480px]:gap-4 md-[480px]:items-center md-[480px]:flex max-md-[480px]:gap-2 flex-row max-md-[480px]:items-center">
                  <div className="w-[8px] h-[8px] bg-[#404040] rounded-[50%]"></div>
                  <h2>{year}</h2>
                  <div className="w-[8px] h-[8px] bg-[#404040] rounded-[50%]"></div>
                  <h2>PG-13</h2>
                </div>
                <div className="max-md-[480px]:flex gap-2 items-center md-[480px]:items-center md-[480px]:flex">
                  <div className="w-[8px] h-[8px] bg-[#404040] rounded-[50%]"></div>
                  <h2>{formattedRuntime}</h2></div>
                
                <div className="flex text-[16px] text-[#B91C1C] md-[480px]:gap-1 gap-2 pl-5 max-md-[480px]:pl-0">
                  {genres}
                </div>
              </div>

              <div className="flex items-center gap-2 max-md-[480px]:text-[16px]">

                <Image src="Star.svg" alt="logo" className="max-md-[450px]:w-[50%]" width={0} priority height={0} style={{ width: "20%", height: "auto" }} />
                <p className="text-[#E8E8E8] font-semibold md-[480px]:text-[20px]">{vote_average.toFixed(1)}</p>
                <p className="text-[#666] font-semibold md-[480px]:text-[20px]">| 350k</p>
              </div>
            </div>
            <div className="flex max-md-[650px]:flex-col max-md-[650px]:gap-4 gap-8">
              <div className="md-[650px]:w-[70%]">
                <p className="pb-6">{overview}
                </p>

                <div className="flex flex-col gap-8">
                  <p>Director : <span className="text-[#BE123C]">{director}</span></p>
                  <p>Writers : <span className="text-[#BE123C]">{writer}</span></p>
                  <p>Stars : <span className="text-[#BE123C]">{stars}</span></p>
                  <div className="flex border rounded-lg z-20 relative">
                    <div className="bg-[#BE123C] px-2 py-4 rounded-lg max-md-[650px]:w-[30em] w-[30em] flex justify-center font-bold text-[#fff]">Top rated movie #65</div>
                    <select className="w-full  outline-none px-2 py-1 text-[#666] font-semibold md-[480px]:text-[20px]">
                      <option value="Awards 9 nominations">Awards 9 nominations</option>
                      <option value="movie2">Movie 2</option>
                      <option value="movie3">Movie 3</option>
                      <option value="movie4">Movie 4</option>
                    </select>

                  </div>

                </div>

              </div>
              <div className="w-[30%] max-md-[650px]:w-full flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <div className="bg-[#BE123C] px-2 py-4 rounded-lg w-full flex justify-center items-center font-bold text-[#fff]"> <Image src="TwoTickets.svg" alt="logo" className="max-md-[450px]:w-[50%]" width={0} priority height={0} style={{ width: "auto", height: "auto" }} />See Showtimes</div>
                  <div className="bg-[#BE123C1A] px-2 py-4 rounded-lg w-full flex justify-center items-center font-bold text-[#000] gap-3 border border-[#BE123C]"><FaBars />More watch options</div>
                </div>
                <div className="flex gap-[1px] relative">
                  {mostWatch.length > 0 ? (
                    mostWatch.map((m) => (
                    <div key={m.id} className="w-full h-[15em] bg-cover bg-center bg-no-repeat rounded-tl-md rounded-bl-md" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${m.poster_path})` }}></div>
                  ))) : ("")}
                  <div className=' w-full z-10 absolute bg-[#12121280] backdrop-blur-[2px] font-bold flex items-center bottom-0 justify-around text-[#fff] text-[14px] py-4 rounded-md'><FaBars />
                    <p>The Best Movies and Shows in September</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
    </>
  );
}
