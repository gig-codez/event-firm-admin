export interface MenuItem {
  path?: string;
  icon?: string;
  type?: string;
  badge?: string;
  Names?: string;
  badgetxt?: string;
  badge1?: boolean;
  background?: string;
  active?: boolean;
  selected?: boolean;
  title?: string;
  menutitle?: string;
  Items?: (MenuItem | NestedMenuItem)[];
  children?: Array<any>;
}

export interface NestedMenuItem extends MenuItem {
  children: (MenuItem | NestedMenuItem)[];
}

export const MENUITEMS: (MenuItem | NestedMenuItem)[] = [
  {
    // menutitle: "DASHBOARD",
    Items: [
      {
        path: "/components/ecommerce/dashboard",
        type: "link",
        active: false,
        selected: false,
        title: "Dashboard",
      },
      {
        path: "/components/ecommerce/products",
        type: "link",
        active: false,
        selected: false,
        title: "Products",
      },
      {
        path: "/components/ecommerce/product-details",
        type: "link",
        active: false,
        selected: false,
        title: "Product Details",
      },
      {
        path: "/components/ecommerce/cart",
        type: "link",
        active: false,
        selected: false,
        title: "Cart",
      },
      {
        path: "/components/ecommerce/wishlist",
        type: "link",
        active: false,
        selected: false,
        title: "Wishlist",
      },
      {
        path: "/components/ecommerce/checkout",
        type: "link",
        active: false,
        selected: false,
        title: "Checkout",
      },
      {
        path: "/components/ecommerce/orders",
        type: "link",
        active: false,
        selected: false,
        title: "Orders",
      },
      {
        path: "/components/ecommerce/add-product",
        type: "link",
        active: false,
        selected: false,
        title: "Add Product",
      },
      {
        path: "/components/ecommerce/account",
        type: "link",
        active: false,
        selected: false,
        title: "Account",
      },
    ],
  },
];
