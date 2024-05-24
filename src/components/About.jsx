import { useState } from "react";
import bannerImage from "../assets/my-pic.png";
const About = () => {
   const [data , setData]= useState({
        image: bannerImage,
        tittle:"Software Engineer",
        desc1:`As a MERN stack developer, one must possess a comprehensive understanding of each component of the stack. MongoDB, a NoSQL database, is used for storing data in a flexible, JSON-like format. Express.js, a minimal and flexible Node.js web application framework, facilitates the creation of web servers and APIs. React.js, a powerful JavaScript library developed by Facebook, is utilized for building user interfaces with reusable components, providing a fast and interactive user experience. Node.js, a server-side JavaScript runtime, enables developers to build scalable and high-performance server-side applications.`,
        desc:` MERN stack developers often work on both the front end and back end of web applications, utilizing their expertise in JavaScript, HTML, CSS, and other related technologies. They are proficient in designing and implementing RESTful APIs, integrating third-party services and libraries, optimizing application performance, and ensuring the security of web applications.`,
        actionButton:{
            tittle: "Read More..",
            link: "/readmore",

        }
    });
    return (
       
    <div className="main-cointainer bg-gray-200 py-16">
       <h1 className="text-center pb-16 text-5xl underline font-bold">About me</h1>
     <div className="flex items-center">
        {/* image container */}
        <div className="w-full flex justify-center">
           <img className="rounded-full shadow-lg w-fit" src={data.image}  />
        </div>
        {/* text container */}
        <div className="w-full flex justify-start">
            
            <div className="space-y-5 w-2/3"><h1 className="text-5xl font-semibold ">{data.tittle}</h1>
            <p>
             {
                data.desc1
             }
            </p>
            <p>
           {
            data.desc2
           }
            </p>
            <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.tittle}
                </button></div>
        </div>
     </div>
    </div>
   
    );
};

export default About;