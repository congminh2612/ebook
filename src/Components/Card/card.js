import React from 'react';
import { Card } from 'antd';
import "./card.scss"
const { Meta } = Card;
export const CardBook = ({image}) =>{
    return(
        <Card
            hoverable
            style={{width: 210,}}
            cover={
                <img 
                    alt="book" 
                    src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935270704889.jpg" 
                />
            }
        >
            <Meta 
                title="Việt Nam - Lịch Sử Không Biên Giới" 
            />
            <h3 className='card-price'>Giá: 100.000 VND</h3>
        </Card>
    )
}

