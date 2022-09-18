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
           <div className='w-full h-screen  bg-[#FEFEFF] text-black'>
                <div className='max-w-screen-lg  mx-auto  justify-center w-full h-full '>

                    <div className='text-center font-custom md:text-4xl text-2xl md:py-4 '>Trending Cakes</div>
                    <div className='md:px-6 grid  sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-y-4 gap-x-12 px-12  sm:px-0 ' >

                        {items.map(data => {
                            return (
                                <div key={data.id} className="bg-white md:w-52  md:h-60   rounded-lg  shadow-lg hover:border-amber-400 hover:border-4 duration-400 ease-in-out items-center ">
                                    <img className="mx-auto h-48 mt-4 lg:mt-0  md:pt-2 lg:pt-4 rounded items-center  " src={data.img} alt="Wow cakes" />
                                    <p className=' text-center font-bold lg:mt-5 md:mt-2  '>{data.title}</p>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </div>
        </>
    );
}
export default Designer;