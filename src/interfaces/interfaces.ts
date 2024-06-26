export interface menuItem {
  title: string;
  link: string;
}

export interface HamburgerMenuItems {
  items: menuItem[];
}

export interface cardStorage {
  img: string;
  title: string;
  location: string;
  bedAmout: number;
  bathAmout: number;
  size: number;
}

export interface cardBigStorage extends cardStorage {
  pricePerMonth: number;
}

export interface FAQItemStorage {
  title: string;
  content: string;
}

export interface reviewStorage {
  id: number;
  imgUrl: string;
  name: string;
  location: string;
  content: string;
}
