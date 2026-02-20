import { motion } from "framer-motion";
import { CalendarDays, ShieldCheck, Ruler, Undo2 } from "lucide-react";

const steps = [
  {
    icon: CalendarDays,
    title: "1. Р—Р°Р±СЂРѕРЅРёСЂСѓР№С‚Рµ",
    description: "РќР°РїРёС€РёС‚Рµ РІ WhatsApp РёР»Рё Instagram, РІС‹Р±РµСЂРёС‚Рµ РєРѕСЃС‚СЋРј Рё РґР°С‚Сѓ. РњС‹ РїРѕРґС‚РІРµСЂРґРёРј Р±СЂРѕРЅСЊ.",
  },
  {
    icon: Ruler,
    title: "2. РџСЂРёРјРµСЂРєР°",
    description: "РџСЂРёС…РѕРґРёС‚Рµ РІ РЅР°С€ С€РѕСѓСЂСѓРј РІ РўРѕРєРјРѕРєРµ. РџРѕРґР±РµСЂС‘Рј РёРґРµР°Р»СЊРЅС‹Р№ СЂР°Р·РјРµСЂ Рё РїРѕСЃР°РґРєСѓ.",
  },
  {
    icon: ShieldCheck,
    title: "3. Р—Р°Р»РѕРі Рё Р°СЂРµРЅРґР°",
    description: "РћСЃС‚Р°РІР»СЏРµС‚Рµ Р·Р°Р»РѕРі, Р·Р°Р±РёСЂР°РµС‚Рµ РєРѕСЃС‚СЋРј. РђСЂРµРЅРґР° вЂ” 3 РґРЅСЏ РѕС‚ 1000 СЃРѕРј.",
  },
  {
    icon: Undo2,
    title: "4. Р’РѕР·РІСЂР°С‚",
    description: "Р’РµСЂРЅРёС‚Рµ РєРѕСЃС‚СЋРј РІ С‡РёСЃС‚РѕРј РІРёРґРµ РІ СЃСЂРѕРє вЂ” РїРѕР»СѓС‡РёС‚Рµ Р·Р°Р»РѕРі РѕР±СЂР°С‚РЅРѕ.",
  },
];

const RentalConditions = () => {
  return (
    <section id="rental" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">РљР°Рє СЌС‚Рѕ СЂР°Р±РѕС‚Р°РµС‚</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            РЈСЃР»РѕРІРёСЏ <span className="text-gradient-gold">РїСЂРѕРєР°С‚Р°</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-lg p-6 ornament-border hover:border-primary/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-card rounded-lg p-6 md:p-8 ornament-border max-w-2xl mx-auto"
        >
          <h3 className="font-display text-xl font-bold text-foreground mb-4 text-center">РЎС‚РѕРёРјРѕСЃС‚СЊ</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-muted-foreground">РђСЂРµРЅРґР° РєРѕСЃС‚СЋРјР° (3 РґРЅСЏ)</span>
              <span className="text-primary font-semibold">РѕС‚ 1 000 СЃРѕРј</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-muted-foreground">РЎРІР°РґРµР±РЅС‹Рµ РЅР°СЂСЏРґС‹</span>
              <span className="text-primary font-semibold">РґРѕРіРѕРІРѕСЂРЅР°СЏ</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-muted-foreground">Костюмы</span>
              <span className="text-primary font-semibold">РґРѕРіРѕРІРѕСЂРЅР°СЏ</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-muted-foreground">Р—Р°Р»РѕРі</span>
              <span className="text-primary font-semibold">РІРѕР·РІСЂР°С‰Р°РµС‚СЃСЏ</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RentalConditions;

