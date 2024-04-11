
const Product = (props: any) => {
    return (
        <div className="pro_comp bg-white rounded-lg cursor-pointer overflow-hidden flex flex-col gap-4 hover:scale-105 hover:ease-in-out duration-300">
            <img src={props.img} loading="lazy" alt="product images" className="border-none" />
            <div className="bg-white *:bg-transparent px-4 pb-2 text-[#27272a]">
                <p className="font-bold">{props.name}</p>
            <p className="text-[14px] font-normal text-wrap">{props.stack}</p>
            </div>
        </div>
    )
}

export default Product
