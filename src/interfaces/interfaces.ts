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
