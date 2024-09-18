export type Images = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type GalleryImage = Images & {
  alt: string;
};

export type GalleryProps = {
  imageOne: GalleryImage;
  imageTwo: GalleryImage;
  imageThree: GalleryImage;
};

// export type Product = {
//   product_id: string;
//   category: string;
//   name: string;
//   newProduct?: boolean;
//   description: string;
//   price: number;
//   features: string[];
//   boxContents: {
//     item: string;
//     quantity: number;
//   }[];
//   images: {
//     mobile: string;
//     tablet: string;
//     desktop: string;
//   };
//   gallery: GalleryProps;
// };

type ValidFieldNames =
  | "name"
  | "email"
  | "phone"
  | "address"
  | "zipCode"
  | "city"
  | "country"
  | "eMoneyNumber"
  | "eMoneyPin";

export type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  eMoneyNumber: string;
  eMoneyPin: string;
};
