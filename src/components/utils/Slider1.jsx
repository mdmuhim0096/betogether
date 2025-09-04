import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Slider1 = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    const data = ["item", "item", "item", "item", "item", "item", "item", "item", "item", "item", "item", "item", "item", "item", "item", "item", "item",]


    return (
        <div className="w-full h-screen flex justify-center items-center">
            < Carousel
                responsive={responsive}
                className="w-full py-7"
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1400}
                arrows={true}
                showDots={true}
                renderButtonGroupOutside={true}
                containerClass="Carousel"
                
            >
                {
                    data.map((data, index) => (
                        <div
                            key={index}
                            id="card"
                            className="w-full h-[70vh] shadow-xl rounded-xl bg-gradient-to-tr from-zinc-400 via-zinc-800 to-zinc-950"
                        >{data + " " + index}</div>
                    ))
                }
            </ Carousel>
        </div>
    )
}

export default Slider1