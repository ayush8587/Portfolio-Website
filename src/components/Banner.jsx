import bannerImage from "docs/assets/Ayush Kumar_CSE.png";
import bannerBackground from "docs/assets/banner_wallpaper-C0ZE6RLv.svg";

const Banner=()=>{


    
    return(
       <div  style={
        {
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
        }
    } className="main-cointainer flex items-center">
        <div className=" w-full flex items-center justify-center text-white">
           
            <div className="w-2/3 ">
            <h3 className="text-3xl font-semibold">Hi, I am</h3>
            <h1 className="mt-3 text-3xl font-semibold">Ayush Kumar</h1>
            <h2 className="mt-3 text-3xl">And I am a Software Engineer</h2>
            <p className="mt-3">   
             A MERN stack developer is a skilled professional who 
            </p>
            <p >
            specializes in building web applications using the MERN stack, which consists of MongoDB, Express.js, React.js, and Node.js.
            </p>
            <p>
            This technology stack empowers developers to create robust and dynamic web applications that are both efficient and scalable.
            </p>

            <div className="icons-cointainer flex space-x-5">
           <a className="hover:bg-orange-500 px-3 py-4 w-14 h-14 rounded-full flex justify-center items-center bg-gray-800" href="https://www.linkedin.com/in/sonu-singh-429a86291/"> <i class="fa-brands text-4xl fa-linkedin"></i></a>
           <a className="hover:bg-orange-500 px-3 py-4 w-14 h-14 rounded-full flex justify-center items-center bg-gray-800" href="https://github.com/sonu2k1">
            <i class="fa-brands text-4xl fa-github"></i>
            </a>
            <a className="hover:bg-orange-500 px-3 py-4 w-14 h-14 rounded-full flex justify-center items-center bg-gray-800" href="https://www.instagram.com/sonu_singh_2k1/">
            <i class="fa-brands text-4xl fa-square-instagram"></i>
            </a>

            </div>


             <br />
            <a className=" text-2xl px-3 py-2 bg-orange-500 rounded-full" href="/">Contact Me</a>
            </div>
           
        </div>
        <div className=" w-full flex justify-center">
            <img className="rounded-full my-2 shadow-lg w-fit" src={bannerImage}  />
        </div>
       
        </div>
      
    )
}
export default Banner;