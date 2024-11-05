import Item from "../Item/Item"
import { getProducts } from "../../data/asyncMock"
import { useEffect, useState } from "react"
import Loading from "../Loading/Loading";

export default function ItemList({ products: initialProducts }){
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(!initialProducts);

    useEffect(() => {
        if(!initialProducts) {
            getProducts().then((data) =>{
                setProducts(data)
                setLoading(false)
            });
        }else{
            setLoading(false)
        }
    }, [initialProducts]);

    return(
        <>
            {loading ?(
                <div>
                    <Loading />
                </div>
            ):(
                <div className="flex flex-wrap">
                    {products.map((prod) =>(
                        <div className="w-[250px] h-[250px]" key={prod.id}>
                            <Item {...prod} />
                        </div>
                        
                    ))}
                </div>
            )}

        </>
    )
}