import { useState } from "react"
import Line from "./Line"
import Rating from "./Rating"
import { useNavigate } from "react-router-dom"


const Navbar = ({dataS}) => {
    const [showAll, setShowAll] = useState(false)
    const navigate = useNavigate()
    
    const toggleShowAll = () => {
        setShowAll(!showAll)
    }

    const categoriesName=[]
    const providerName=[]

    dataS.forEach((item) => {
        if (!categoriesName.includes(item.categories.name)) {
            categoriesName.push(item.categories.name)
        }
        if (!providerName.includes(item.current_seller.name)) {
            providerName.push(item.current_seller.name)
        }
    })



    return (
        <div className="hidden xs:block grid__column-2 h-[100%] bg-[#fff] py-[12px] rounded-[2px] shadow-sm  px-[16px]">
            <h1 className="mb-[12px] text-[1.5rem] font-[500] text-textColor leading-[22px]">Danh mục sản phẩm</h1>
            <ul className="flex flex-col gap-[10px] mb-[10px]">
                {categoriesName.map((item)=>{
                    return (
                        <li key={item} className="cursor-pointer">
                            <p onClick={()=>{navigate(`/search?categories=${item}`)}} className="text-[1.2rem] font-[400] ">{item}</p>
                        </li>
                    )
                })}
            </ul>
            <Line
                className="w-[100%] h-[1px] bg-lineColor"
            />
            <h1 className="my-[12px] text-[1.5rem] font-[500] text-textColor leading-[22px]">Nhà cung cấp</h1>
            <ul className="flex flex-col gap-[12px] mb-[12px]">
                {
                    (showAll?providerName:providerName.slice(0,5)).map((provider) => (
                        <li 
                            key={provider} className="flex items-center gap-[12px] cursor-pointer"
                            onClick={()=>{navigate(`/search?provider=${provider}`)}}
                        >
                            <input
                                type="checkbox"
                                className="w-[16px] h-[16px] border border-lineColor "
                                onChange={()=>{}}
                            />
                            <p className="text-textColor text-[1.4rem] font-[400]">{provider}</p>
                        </li>
                    ))
                }
            </ul>
            <div className="flex items-center gap-[6px] mb-[12px] cursor-pointer" onClick={toggleShowAll}>
                <p className="text-[1.4rem] text-primaryColor font-[500]">
                    {showAll?'Ẩn bớt':'Xem thêm'}
                </p>
                <i className={`fa-solid fa-chevron-${showAll?'up':'down'} text-[1.4rem] text-primaryColor`}></i>
            </div>
            <Line
                className="w-[100%] h-[1px] bg-lineColor"
            />
            <h1 className="my-[12px] text-[1.5rem] font-[500] text-textColor leading-[22px]">Đánh giá</h1>
            <div className="flex flex-col gap-[12px]">
                <Rating
                    text="từ 5 sao"
                    countStar={5}
                    classList="gap-[1px]"
                    styleStar="text-[1.2rem]"
                    styleText="text-[1.4rem] ml-[3px]"
                    onRatingClick={()=>{navigate(`/search?rating=${5}`)}}
                />
                <Rating
                    text="từ 4 sao"
                    countStar={4}
                    classList="gap-[1px]"
                    styleStar="text-[1.2rem]"
                    styleText="text-[1.4rem] ml-[3px]"
                    onRatingClick={()=>{navigate(`/search?rating=${4}`)}}
                />
                <Rating
                    text="từ 3 sao"
                    countStar={3}
                    classList="gap-[1px]"
                    styleStar="text-[1.2rem]"
                    styleText="text-[1.4rem] ml-[3px]"
                    onRatingClick={()=>{navigate(`/search?rating=${3}`)}}
                />
            </div>
        </div>
    )
}

export default Navbar