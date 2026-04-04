import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";

import category1 from "@/assets/category-1.jpeg";
import category2 from "@/assets/category-2.jpeg";
import category3 from "@/assets/category-3.jpeg";
import category4 from "@/assets/category-4.jpeg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpeg";
import product3 from "@/assets/product-3.jpeg";
import product4 from "@/assets/product-4.jpeg";
import product5 from "@/assets/product-5.jpeg";
import product6 from "@/assets//product-6 .jpeg";
import product7 from "@/assets//producut-7.jpeg";
import product8 from "@/assets//prodcut-8.jpeg";
import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";

const Index = () => {
  const categories = [
    { image: category1, title: "Crochet Bouquets" },
    { image: category2, title: "Wedding Hoops," },
    { image: category3, title: "Quilling Frames" },
    { image: category4, title: "Crochet hair accessories" },
  ];

  const products = [
    {
      image: product1,
      title: "🌸 Realistic Flower Hair Claw Clip – Large, Elegant & Durable (8cm) 🌸",
      price: 299,
      originalPrice: 599,
    },
    {
      image: product2,
      title: "Premium Gift Hamper Box - Perfect for All Occasions",
      price: 899,
      originalPrice: 1299,
    },
    {
      image: product3,
      title: "Colorful Hair Scrunchies Set - Pack of 12 Premium Quality",
      price: 199,
      originalPrice: 399,
    },
    {
      image: product4,
      title: "Elegant Bangle Set - Wedding Collection",
      price: 449,
      originalPrice: 799,
    },
     {
      image: product5,
      title: "Elegant Bangle Set - Wedding Collection",
      price: 350,
      originalPrice: 500,
    },
     {
      image: product6,
      title: "Elegant Bangle Set - Wedding Collection",
      price: 350,
      originalPrice: 500,
    },
       {
      image: product7,
      title: "Crochet Bouquets",
      price: 350,
      originalPrice: 500,
    },
       {
      image: product8,
      title: "Crochet Bouquets",
      price: 350,
      originalPrice: 500,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      <main>
        {/* Categories Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-8 flex-wrap">
              {categories.map((category, index) => (
                <CategoryCard
                  key={index}
                  image={category.image}
                  title={category.title}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Hero Banners */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative overflow-hidden rounded-lg group cursor-pointer shadow-card hover:shadow-xl transition-all duration-300">
                <img
                  src={heroBanner1}
                  alt="Gift Hampers Collection"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg group cursor-pointer shadow-card hover:shadow-xl transition-all duration-300">
                <img
                  src={heroBanner2}
                  alt="Kids Collection"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Best Selling Gifts 😍✨
              </h2>
              <p className="text-muted-foreground text-lg">Packed with Love</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  originalPrice={product.originalPrice}
                />
              ))}
            </div>
          </div>
        </section>

       
      </main>

      {/* Footer */}
      <footer className="bg-topbar text-primary-foreground py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">DIVIS HAND MADE</h3>
            <p className="mb-4">Your One-Stop Shop for Beautiful Hair Accessories</p>
            <div className="flex justify-center gap-6 mb-6">
              <a href="#" className="hover:opacity-80 transition-opacity">Best Sellers</a>
              <a href="#" className="hover:opacity-80 transition-opacity">About Us</a>
              <a href="#" className="hover:opacity-80 transition-opacity">Contact</a>
              <a href="#" className="hover:opacity-80 transition-opacity">FAQs</a>
            </div>
            <p className="text-sm opacity-80">© 2026 Divi's. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
