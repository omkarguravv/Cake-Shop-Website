import React from "react";
import cartoon from "../../assets/cartoon_cakes_1.avif"
import babyShower from "../../assets/baby_shower_2.avif"
function Designer() {
    const items = [
       {
           title : "Cartoon Cake",
           img: cartoon
       },
       {
        title: "Baby Shower",
        img: babyShower
       }
       ,
       {
        title: " Number Cakes",
        img :cartoon
       }
       ,
       {
        title: "Rainbow Cakes",
        img: cartoon
       }
       ,
       {
        title: "Barbie Cakes",
        img: cartoon
       }
       ,
       {
        title: "Alphabet Cakes",
        img: cartoon
       }
       ,
       {
        title: "Super Hero Cakes",
        img : cartoon
       }

       
    ];
    return (
        <>
            <div className='w-full h-screen bg-gradient[#FFFF] text-black'>
                <div className='max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full '>
                     <div className="text-center text-3xl my-10 font-semibold"><h1>Designer Cake</h1></div>
                <div className="grid gap-10 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 ">
                {items.map((item, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm p-4 " key={key}>
                        <img
                            className="object-cover w-full h-44 rounded-sm"
                            src={item.img}
                            alt="image"
                        />
                        <div className="p-4 text-center">
                            <h4 className="text-xl font-semibold ">
                                
                                {item.title}
                            </h4>
                           
                           
                        </div>
                    </div>
                ))}
            </div>

                </div>
            </div>
        </>
    );
}
export default Designer;