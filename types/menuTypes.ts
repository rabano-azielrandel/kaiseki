export type MenuItem = {
  name: string;
  description: string;
  solo_price: string;
  set_price?: string;
  image: string;
  rating: string;
};

export type CardType = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  content: MenuItem[];
};