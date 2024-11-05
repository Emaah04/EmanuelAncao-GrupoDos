import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";


export default function HomePage() {
    const imgBanner = './new_bass_comp.jpg';
    return (
        <div>
            <div
                className="h-[900px] w-[100vw] bg-cover bg-center"
                style={{ backgroundImage: `url(${imgBanner})` }}
            >
                <div className="container mx-auto max-w-[1170px] flex flex-col h-[700px] justify-center">
                    <h2 className="text-[#530f0f] font-bold text-[100px] leading-[80px] uppercase">
                        featured 
                    </h2>
                    <h2 className="text-[#530f0f] font-bold text-[100px] leading-[80px] uppercase">Cycle</h2>
                    <Link to="/" className="bg-amber-500 px-[50px] py-[5px] text-[18px] uppercase leading-[46px] flex w-[210px] text-center text-[#ffffff] mt-[30px]">Compra Ahora</Link>
                
                </div>
            </div>
            <div className="container mx-auto max-w-[1170px] my-[50px]">
                <ItemList />
    
            </div>
        </div>
    );
}