import React from "react";
import cartoon from "../../assets/cartoon_cakes_1.avif"
import babyShower from "../../assets/baby_shower_2.avif"
function Designer() {
    const items = [
        {
            title: "Cartoon Cake",
            img: "https://media.bakingo.com/cartoon_cakes_1.jpg?tr=w-184,dpr-1.5,q-70"
        },
        {
            title: "Baby Shower",
            img:"https://media.bakingo.com/baby_shower_2.jpg?tr=w-184,dpr-1.5,q-70"
        }
        ,
        {
            title: " Number Cakes",
            img: "https://media.bakingo.com/half_cake_card_image.jpg?tr=w-184,dpr-1.5,q-70"
        }
        ,
        {
            title: "Rainbow Cakes",
            img: "https://media.bakingo.com/rainbow_cakes_3.jpg?tr=w-184,dpr-1.5,q-70"
        }
        ,
        {
            title: "Barbie Cakes",
            img:"https://media.bakingo.com/barbie_cake_4.jpg?tr=w-184,dpr-1.5,q-70"
        }
        ,
        {
            title: "Alphabet Cakes",
            img: "https://media.bakingo.com/alphabet_cakes_1.jpg?tr=w-184,dpr-1.5,q-70"
        }
        ,
        {
            title: "Super Hero Cakes",
            img: "https://media.bakingo.com/superhero_cakes_3.jpg?tr=w-184,dpr-1.5,q-70"
        }


    ];
    return (
        <>
            <div className='w-full h-screen bg-gradient[#FFFF] text-black'>
                <div className='max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full '>
                    <div className="text-center text-3xl md:text-4xl my-10 font-custom"><h1>Designer Cake</h1></div>
                    <div className="grid gap-10 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 px-4 ">
                        {items.map(data => {
                            return (
                                <div key={data.id} className="bg-white md:w-52  md:h-60   rounded-lg  shadow-lg hover:border-amber-400 hover:border-4 duration-400 ease-in-out items-center ">
                                    <img className="mx-auto h-36 px-4 md:h-48 mt-4 lg:mt-0  md:pt-2 lg:pt-4 rounded items-center  " src={data.img} alt="Wow cakes" />
                                    <p className=' text-center text-sm font-bold   md:font-bold lg:mt-5 md:mt-2  '>{data.title}</p>
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