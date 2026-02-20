import { motion } from "framer-motion";
import catalogWomen from "@/assets/catalog-women.jpg";
import catalogMen from "@/assets/catalog-men.jpg";
import catalogWedding from "@/assets/catalog-wedding.jpg";
import catalogKids from "@/assets/catalog-kids.jpg";
import catalogFestive from "@/assets/catalog-festive.jpg";
import catalogModern from "@/assets/catalog-modern.jpg";

const categories = [
  { title: "Женские", subtitle: "Элегантные национальные платья", image: catalogWomen, price: "от 1000 сом" },
  { title: "Мужские", subtitle: "Чапаны и национальные костюмы", image: catalogMen, price: "от 1000 сом" },
  { title: "Свадебные", subtitle: "Кыз узатуу, никях", image: catalogWedding, price: "договорная" },
  { title: "Детские", subtitle: "Яркие этно-наряды", image: catalogKids, price: "от 500 сом" },
  { title: "Праздничные", subtitle: "Нооруз и торжества", image: catalogFestive, price: "от 1000 сом" },
  { title: "Костюмы и чапаны", subtitle: "Этно-стиль на каждый день", image: catalogModern, price: "договорная" },
];

const CatalogSection = () => {
  return (
    <section id="catalog" className="py-20 md:py-28">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Коллекция</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Наш <span className="text-gradient-gold">каталог</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.title}
              href={`https://wa.me/996703969318?text=Ассалому%20алейкум!%20Я%20с%20сайта%20Ayan%20Etno.%20Интересует%20категория%20«${encodeURIComponent(cat.title)}».%20Подскажите,%20пожалуйста,%20наличие%20и%20цены!`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden shadow-card cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-card" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <span className="inline-block bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3 backdrop-blur-sm">
                  {cat.price}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                  {cat.title}
                </h3>
                <p className="text-muted-foreground text-sm">{cat.subtitle}</p>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-gradient-gold text-primary-foreground px-6 py-3 rounded-md font-semibold text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Подробнее
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://www.instagram.com/ayan_etno"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 ornament-border ornament-border-hover text-foreground px-6 py-3 rounded-md font-semibold text-sm transition-all hover:bg-muted/30"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Больше фото в Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CatalogSection;
