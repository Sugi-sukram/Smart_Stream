import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "../../../styles/product/product-style.scss";
import ButtonComponent from "../../element-compnent/button-component";
import { text } from "stream/consumers";
import { ReactComponent as Loveit } from "../../../assets/svg-icon/product/love-it.svg";

interface ProductcardInfoProps {
  productList: {
    id: number;
    image: string[];
    ProductName: string;
    rating: string;
    starIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    startcount: number;
    productPrice: string;
  };
}

const ProductcardInfo: React.FC<ProductcardInfoProps> = ({ productList }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = productList.image.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, productList.image]);

  useEffect(() => {
    const slider = setInterval(() => {
      // setIndex((prevIndex) => prevIndex + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, []);

  return (
    <section className="section-Product">
      <div className="section-Productcard">
        {productList.image.map((image: string, personIndex: number) => {
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === productList.image.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={personIndex.toString()} className={position}>
              <img src={image} className="product-person-img" alt="Product" />
            </article>
          );
        })}

        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
      <div className="product-info-container">
        <p className="product-name">{productList.ProductName}</p>
        <div className="star-rating">
          {Array.from({ length: 5 }, (_, index) => (
            <productList.starIcon
              key={index}
              fill={productList.startcount > index ? "#FF9500" : "#000000"}
            />
          ))}
          <div className="product-rating">({productList.rating})</div>
         <div className="likeicon"><Loveit /></div>
        </div>
        <div className="product-price">{productList.productPrice}</div>
        <ButtonComponent
          title={"Edit Product"}
          height={"35px"}
          width={"100px"}
          backgroundColor={"#E2EAF8"}
          styles={{ borderRadius: 10,cursor:"pointer" }}
          color={"#202224"}
          margin={"0px 0px"}
          className={"button-component-hover common-btn"}
          handleClick={() => {}}
        />
      </div>
    </section>
  );
};

export default ProductcardInfo;
