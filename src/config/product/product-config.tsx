import { ReactComponent as startIcon } from "../../assets/svg-icon/product/Star.svg";

export interface ProductAutosliderProps {
  id: number;
  image: string;
  name: string;
  title: string;
  quote: string;
}

export interface ProductItemListProps {
  id: number;
  image: string[];
  ProductName: string;
  rating: string;
  starIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  startcount: number;
  productPrice: string;
}

export const ProductAutoslider: ProductAutosliderProps[] = [
  {
    id: 1,
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e3643f4ecf26b682.jpg?q=20",
    name: "",
    title: "",
    quote: "",
  },
  {
    id: 2,
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/bc4de135c7ee66ba.jpeg?q=20",
    name: "",
    title: "",
    quote: "",
  },
  {
    id: 3,
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e3643f4ecf26b682.jpg?q=20",
    name: "",
    title: "",
    quote: "",
  },
  {
    id: 4,
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/07a1378ee0d7d615.jpeg?q=20",
    name: "",
    title: "",
    quote: "",
  },
];

export const ProductItemList: ProductItemListProps[] = [
  {
    id: 1,
    image: [
      "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/m/v/i/-original-imagvpakkhbzmbym.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/128/128/xif0q/smartwatch/h/d/a/-original-imagvpakfa8uxjh2.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/128/128/xif0q/smartwatch/m/v/i/-original-imagvpakkhbzmbym.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/128/128/xif0q/smartwatch/t/k/s/-original-imagvpaknrjw9hgd.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/128/128/xif0q/smartwatch/y/a/o/-original-imagvpakxrhuxywz.jpeg?q=70&crop=false",
    ],
    ProductName: "Apple Watch Series 4",
    productPrice: "$120.00",
    rating: "4.5",
    starIcon: startIcon,
    startcount: 2,
  },
  {
    id: 2,
    image: [
      "https://rukminim2.flixcart.com/image/128/128/xif0q/shopsy-hand-messenger-bag/c/k/r/cs56-hb-brfi-brown-1pc-shop-cs56-hb-brfi-brown-1pc-shop-original-imahyz3szcvra5zq.jpeg?q=70&crop=false",

      "https://rukminim2.flixcart.com/image/128/128/xif0q/hand-messenger-bag/u/i/s/women-s-stylish-handbags-12-black-women-handbag-hand-held-bag-original-imah27t2gjjyqyfh.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-hand-messenger-bag/m/n/6/cs56-hb-brfi-brown-1pc-shop-cs56-hb-brfi-brown-1pc-shop-original-imahyz3sgfkgzdjx.jpeg?q=70&crop=false",
    ],
    ProductName: "Girl Handy Beg",
    productPrice: "$299.00",
    rating: "4.5",
    starIcon: startIcon,
    startcount: 3,
  },
  {
    id: 3,
    image: [
      "https://rukminim2.flixcart.com/image/128/128/xif0q/headphone/m/u/5/-original-imahf3h3cgzg6mrc.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/128/128/xif0q/headphone/u/l/z/-original-imagr5j7tfsrgx5q.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/128/128/xif0q/headphone/i/a/x/-original-imagqre89m84dgkm.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/128/128/xif0q/headphone/h/7/w/-original-imagr5j7hh8g5kgg.jpeg?q=70&crop=false",
    ],
    ProductName: "Beats Headphone",
    productPrice: "$590.00",
    rating: "4.5",
    starIcon: startIcon,
    startcount: 2,
  },
];
