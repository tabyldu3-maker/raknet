import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="РљС‹СЂРіС‹Р·СЃРєРёРµ РЅР°С†РёРѕРЅР°Р»СЊРЅС‹Рµ РєРѕСЃС‚СЋРјС‹"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-primary font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            РџСЂРѕРєР°С‚ Рё РїСЂРѕРґР°Р¶Р°
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
            РќР°С†РёРѕРЅР°Р»СЊРЅС‹Рµ РєРѕСЃС‚СЋРјС‹
            <br />
            <span className="text-gradient-gold">РљС‹СЂРіС‹Р·СЃС‚Р°РЅР°</span>
          </h1>
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8">
            РђСЂРµРЅРґР° РѕС‚ <span className="text-primary font-semibold">1000 СЃРѕРј</span> Р·Р° 3 РґРЅСЏ.
            Костюмы, СЃРІР°РґРµР±РЅС‹Рµ, РїСЂР°Р·РґРЅРёС‡РЅС‹Рµ Рё РїРѕРІСЃРµРґРЅРµРІРЅС‹Рµ СЌС‚РЅРѕ-РЅР°СЂСЏРґС‹.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/996703969318?text=РђСЃСЃР°Р»РѕРјСѓ%20Р°Р»РµР№РєСѓРј!%20РЇ%20СЃ%20РІР°С€РµРіРѕ%20СЃР°Р№С‚Р°%20Ayan%20Etno.%20РҐРѕС‚РµР»(Р°)%20Р±С‹%20СѓР·РЅР°С‚СЊ%20Рѕ%20РЅР°Р»РёС‡РёРё%20Рё%20СѓСЃР»РѕРІРёСЏС…%20Р°СЂРµРЅРґС‹%20РЅР°С†РёРѕРЅР°Р»СЊРЅРѕРіРѕ%20РєРѕСЃС‚СЋРјР°.%20РџРѕРґСЃРєР°Р¶РёС‚Рµ,%20РїРѕР¶Р°Р»СѓР№СЃС‚Р°!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-md font-semibold text-base shadow-gold hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              Р—Р°Р±СЂРѕРЅРёСЂРѕРІР°С‚СЊ
            </a>
            <button
              onClick={() => document.querySelector("#catalog")?.scrollIntoView({ behavior: "smooth" })}
              className="ornament-border ornament-border-hover text-foreground px-8 py-4 rounded-md font-semibold text-base transition-all w-full sm:w-auto hover:bg-muted/30"
            >
              РЎРјРѕС‚СЂРµС‚СЊ РєР°С‚Р°Р»РѕРі
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;

