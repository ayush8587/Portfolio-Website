const Services = () => {
    return (
        <>
         <div className="main-container py-16">
            <h1 className="text-center pb-16 text-5xl underline font-bold">My Services</h1>
            <div className="service-container space-x-5 px-10 flex mt-12">
             <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-200 p-5 text-center shadow-lg rounded-xl space-y-4 ">
             <i class="fa-solid text-5xl  fa-laptop"></i>
                <h1 className="text-4xl">Web Development</h1>
                <p>
                    Frontend developers offer a range of services essential for crafting compelling and user-friendly web experiences. These professionals specialize in building the visible parts of websites or web applications that users interact with directly.
                </p>
                <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">check</button>
             </div>
             <div className=" cursor-pointer  hover:bg-gray-100 space-y-3 bg-slate-200 p-5 text-center shadow-lg rounded-xl space-y-4">
             <i class="fa-solid  text-5xl fa-globe"></i>
                <h1 className="text-4xl">UI/UX Designing</h1>
                <p>
                Backend developers offer a suite of critical services essential for building robust and scalable web applications. These professionals specialize in developing the server-side logic, databases, and APIs that power the functionality of websites and web-based systems.
                </p>
                <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">check</button>
             </div>
             <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-200 p-5 text-center shadow-lg rounded-xl space-y-4">
             <i class="fa-solid  text-5xl fa-database"></i>
                <h1 className="text-4xl">AI/ML Modelling</h1>
                <p>
                    
MongoDB and SQL are two popular types of databases, each with its own unique strengths and use cases. MongoDB is a NoSQL database, while SQL databases typically refer to relational databases like MySQL, PostgreSQL, or SQL Server.
                </p>
                <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">check</button>
             </div>
             </div>
         </div>
        </>

    );
};

export default Services;