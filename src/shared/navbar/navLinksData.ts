export const navLinks = (handleDashboardClick: () => void) => [
  {
    name: "Home",
    dropdown: [
      { name: "Cricket Club", path: "cricketClub" },
      { name: "Coaching", path: "/coaching" },
      { name: "Cricket Equipment Store", path: "/store" },
    ],
  },
  {
    name: "Pages",
    dropdown: [
      { name: "About Us", path: "/about" },
      { name: "Our Programs", path: "/programs" },
      { name: "Our Team", path: "/team" },
      { name: "FAQs", path: "/faqs" },
      { name: "Membership", path: "/membership" },
      { name: "Online Booking", path: "/booking" },
    ],
  },
  {
    name: "Events",
    dropdown: [
      { name: "Events List", path: "/events/list" },
      { name: "Events Calendar", path: "/events/calendar" },
      { name: "Single Event", path: "/events/single" },
    ],
  },
  {
    name: "Blog",
    dropdown: [
      { name: "Standard", path: "/blog/standard" },
      { name: "List", path: "/blog/list" },
      { name: "Masonry", path: "/blog/masonry" },
    ],
  },
  {
    name: "Shop",
    dropdown: [
      { name: "Product List", path: "/shop/products" },
      { name: "Product Single", path: "/shop/product" },
      { name: "Cart", path: "/cart" },
      { name: "Checkout", path: "/checkout" },
    ],
  },
  { name: "Contact", path: "/contact" },
  { name: "Dashboard", onClick: handleDashboardClick },
];
