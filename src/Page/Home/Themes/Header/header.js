import "./header.scss"
import {Link} from "react-router-dom"
import { SlUser } from "react-icons/sl";
import { MdOutlineAttachEmail } from "react-icons/md";
import { Formatter} from "../../../../Utils/formatter";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiOutlineMenu, AiOutlinePhone, AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { ROUTER } from "../../../../Utils/router";
import logo from '../../../../Asset/logo.png'
import { AuToSlider } from "../../../../Components/Slider/sliderAd";
const Header = () => {
    const [isCategoryShow,setIsCategoryShow] = useState(true)
    const [menus] = useState([
        {
            name: "Trang chủ",
            path: ROUTER.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTER.USER.PRODUCTS,
        },
        {
            name: "Sản phẩm",
            path: "",
            isShowSubmenu: false,
            child:[
                {
                    name: "Toán học",
                    paht: "",
                },
                {
                    name: "Văn học",
                    paht: "",
                },
                {
                    name: "Hóa học",
                    paht: "",
                },
                {
                    name: "Vật lý",
                    paht: "",
                },
            ]
        },
        {
            name: "Đơn hàng",
            path: "",
        },
        {
            name: "Liên hệ",
            path: "",
        },
        
    ])
    const [bookCategory]  = useState([
        {
            name: "Văn học",
            path: ROUTER.USER.PRODUCTS,
        },
        {
            name: "Vật lý",
            path: "",
        },
        {
            name: "Toán học",
            path: "",
        },
        {
            name: "Lịch sử",
            path: "",
        },
        {
            name: "Ngoại ngữ",
            path: "",
        },
        {
            name: "Địa lý",
            path: "",
        },
        {
            name: "Hóa học",
            path: "",
        },
        {
            name: "Hội họa",
            path: "",
        },
        {
            name: "Âm nhạc",
            path: "",
        },
        {
            name: "GDCD",
            path: "",
        },
        
    ])
    const sliders = [
        "https://theme.hstatic.net/200000845405/1001223012/14/home_slider_image_2.jpg?v=369",
        "https://theme.hstatic.net/200000845405/1001223012/14/home_slider_image_1.jpg?v=369",
        "https://book365.vn/upload/resize_cache/uf/5f2/950_290_1/u8o6rq84711k2t5i2jnrn4vumfw1xh8v.png",
        "https://bookfun.vn/wp-content/uploads/2024/06/top-10-cuon-sach-hay-nen-doc.png.webp",
    ]
    return(
        <>
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header-top-left">
                            <ul>
                                <li>
                                    <MdOutlineAttachEmail/>
                                    <span>ebook@thanglong.edu.vn</span>
                                </li>
                                <li>
                                    <span>Miễn phí ship đơn từ {Formatter(100000)}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 header-top-right">
                            <ul>
                                <li><Link to={""}><FaGithub />           </Link></li>
                                <li><Link to={""}><FaFacebookMessenger /></Link></li>
                                <li><Link to={""}><FaFacebookSquare />   </Link></li>
                                <li><Link to={""}><FaGoogle />           </Link></li>
                                <li>
                                    <Link to={"dang-nhap"}>
                                        <SlUser />
                                        <span>Đăng nhập</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="header-logo">
                            <Link to={ROUTER.USER.HOME}>
                                <img 
                                    src={logo} 
                                    alt="Logo" 
                                    style={{ width: '40px', height: '40px' }}
                                />
                                EBook
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <nav className="header-menu">
                            <ul>
                                {
                                    menus?.map((menu,key_menu)=>(
                                        <li key={key_menu} className={key_menu === 0 ? "active":""}>
                                            <Link to = {menu?.path}>{menu?.name}</Link>
                                            {menu.child && (
                                                <ul className="header-menu-dropdown">
                                                    {
                                                        menu.child.map((childItem,childKey)=>(
                                                            <li key={`${key_menu}-${childKey}`} >
                                                                <Link to = {childItem.path}>{childItem.name}</Link>
                                                            </li>))
                                                    }
                                                </ul>
                                            )}
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3">
                        <div className="header-cart">
                            <div className="header-cart-price">
                                <span>{Formatter(100000)}</span>
                            </div>
                            <ul>
                                <li>
                                   <Link to ="" style={{color:"#1c1c1c"}}>
                                        <AiOutlineShoppingCart/>
                                        <span>19</span>
                                   </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row hero-categories-container">
                    <div className="col-lg-3">
                        <div className="hero-categories">
                            <div className="hero-categories-all" onClick={() => setIsCategoryShow(!isCategoryShow)}>
                                <AiOutlineMenu/>
                                <span>Danh sách sản phẩm</span>
                            </div>
                            <ul className={isCategoryShow ? "" :"hidden"}>
                                {
                                    bookCategory?.map((menu,key_menu)=>(
                                        <li key={key_menu}>
                                            <Link to = {menu.path}>{menu.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                            <div className="hero-search-form">
                                <from>
                                    <input 
                                        type="text" 
                                        placeholder="Tìm kiếm sản phẩm"
                                    />
                                    <button type="submit" className="site-btn">Tìm kiếm</button>
                                </from>
                            </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="hero-search-phone">
                            <div className="hero-search-phone-icon">
                                <AiOutlinePhone/>
                            </div>
                            <div className="hero-search-phone-text">
                                <p>0345.755.059</p>
                                <span>Hỗ trợ 24/7</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-9">
                        <div className="hero-search-slider">
                            <AuToSlider arrImages={sliders}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header