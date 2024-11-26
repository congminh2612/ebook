import React from "react";
import "./orders.scss"
import { NavBar } from "../../Components/Navbar/navbar";

export const Orders = () => {
    const menu = [
        {
            name:"Chờ xác nhận",
        },
        {
            name:"Chờ vận chuyển",
        },
        {
            name:"Đang giao",
        },
        {
            name:"Hoàn thành",
        },
        {
            name:"Đã hủy",
        },
    ]
    return(
        <div className="container">
            <NavBar name = "Đơn hàng"/>
            <div className="header-orders">
                <ul>
                    { 
                        menu.map((item,key_item) => (
                            <li key={key_item}>{item.name}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="card-order">
                    <div className="row">
                        <div className="col-lg-3">image</div>
                        <div className="col-lg-3">name</div>
                        <div className="col-lg-3">price</div>
                        <div className="col-lg-3">huy</div>
                    </div>
            </div>
        </div>
    )
}