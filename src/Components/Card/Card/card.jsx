import React from 'react';
import { Card } from 'antd';
import { StyleName, WrapperPrice, WrapperReportText } from './style';

export const CardProduct = ({ proudctId,proudctName,productType,proudctPrice,proudctImage, widthCard = "170px", heightCard = "325px", widthImage ="170px", heightImage ="240px" }) => {
  return (
    <Card
      id={proudctId}
      style={{ width:widthCard, height:heightCard }}
      hoverable
      bodyStyle={{ padding: '10px' }}
      cover={<img alt="example" src={proudctImage} style={{ width:widthImage, height:heightImage }} />}
    >
      <StyleName>{proudctName}</StyleName>
      <WrapperReportText>{productType}</WrapperReportText>
      <WrapperPrice>{proudctPrice}.000 VND</WrapperPrice>
    </Card>
  );
}
