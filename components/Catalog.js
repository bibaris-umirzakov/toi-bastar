import Link from "next/link";

export default function Catalog() {
    return(
        <div className="Catalog">
            <section className="catalog">
                <div className="catalog_title">Каталог</div>
                <div className="relative right-5 top-1/2 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide1" className="btn btn-circle bg-white color-white">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#FFA500] color-white">❯</a>
                </div>
                <div className="carousel rounded-box  ">
                    <div className="carousel-item pr-[20px] w-1/3" id="slide1 ">
                        <img
                            src="cafe.png"
                            alt="Burger" />
                    </div>


                    <div className="carousel-item pr-[20px] w-1/3" id="slide2 ">
                        <img
                            src="restoran.png"
                            alt="Burger" />
                    </div>
                    <div className="carousel-item pr-[20px] w-1/3" id="slide3 ">
                        <img
                            src="banket.png"
                            alt="Burger" />
                    </div>

                    <div className="carousel-item pr-[20px] w-1/3" id="slide3 ">
                        <img
                            src="banket.png"
                            alt="Burger" />
                    </div>



                </div>

            </section>
        </div>
    );
}