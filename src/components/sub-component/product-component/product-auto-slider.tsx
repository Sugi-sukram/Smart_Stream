import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import {
  ProductAutoslider,
  ProductAutosliderProps,
} from "../../../config/product/product-config";
import "../../../styles/product/product-style.scss";

const ProductAutosliderComp: React.FC = () => {
  const [productSlider, setProductSlider] = useState<ProductAutosliderProps[]>(ProductAutoslider);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = productSlider.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, productSlider]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="section-center" style={{ backgroundColor: "#4880FF" }}>
        {productSlider.map((person: any, personIndex: any) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === productSlider.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
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
    </section>
  );
};

export default ProductAutosliderComp;
