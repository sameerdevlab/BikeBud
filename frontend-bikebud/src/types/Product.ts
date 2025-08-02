export interface Product {
  id: string;
  imageSrc: string;
  altText: string;
  title: string;
  price: number;
  originalPrice: number;
  discount: string;
  features: string[];
  bookingUrl: string;
}