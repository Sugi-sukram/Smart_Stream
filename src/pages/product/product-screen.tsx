import React, { useState } from "react";
import ProductAutosliderComp from "../../components/sub-component/product-component/product-auto-slider";
import ProductcardInfo from "../../components/sub-component/product-component/product-card-info";
import "../../styles/common-styles/common-style.scss";
import "../../styles/product/product-style.scss";
import {
  ProductItemList,
  ProductItemListProps,
} from "../../config/product/product-config";


const Product: React.FC = () => {
  const [productItem, setProductItem] =
    useState<ProductItemListProps[]>(ProductItemList);
  return (
    <div className="screen-color screen-column-space">
      <h1 className="screen-title">Product</h1>
      <ProductAutosliderComp />
      <div className="product-card-container">
        {productItem.map((product: ProductItemListProps, index: number) => (
          <ProductcardInfo key={index.toString()} productList={product}/>
        ))}
      </div>
    </div>
  );
};

export default Product;
