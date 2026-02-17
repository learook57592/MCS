import {
  Building2,
  Ruler,
  FileCheck,
  Settings,
  Clock,
  Briefcase,
  HardHat,
  Download,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

import { Navbar } from "@/components/navbar";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-primary selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-20 bg-slate-900 overflow-hidden"
      >
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blueprint opacity-40"></div>
          {/* Decorative lines */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-white/5"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-white/5"></div>
          <div className="absolute top-1/3 left-0 w-full h-px bg-white/5"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-white/5"></div>

          {/* Radial Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900"></div>
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-block"
          >
            <span className="bg-primary/20 text-primary border border-primary/50 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
              Сотрудничество - залог успеха
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight leading-tight mb-6 max-w-5xl mx-auto"
          >
            Проектирование металлоконструкций <br />
            <span className="text-primary">КМ КМД</span> в Tekla Structures
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          >
            Профессиональное проектирование для промышленного и гражданского
            строительства. От конструктивных расчетов до деталировочных
            чертежей.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <ScrollLink to="contact" smooth={true} offset={-80}>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest text-sm px-8 py-6 rounded-sm shadow-[0_0_20px_rgba(255,102,0,0.3)] transition-all hover:scale-105"
              >
                Оставить заявку
              </Button>
            </ScrollLink>
            <ScrollLink to="portfolio" smooth={true} offset={-80}>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800 font-bold uppercase tracking-widest text-sm px-8 py-6 rounded-sm"
              >
                Наши проекты
              </Button>
            </ScrollLink>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-[10px] uppercase tracking-widest">
            Листайте
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="О компании"
            subtitle="."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 bg-slate-50 border border-slate-100 rounded-lg hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                <Briefcase className="w-8 h-8 text-slate-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">
                Современный подход
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Молодая команда с опытными наставниками - свежие идеи,
                проверенные решения и глубокое понимание отрасли.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-slate-50 border border-slate-100 rounded-lg hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                <FileCheck className="w-8 h-8 text-slate-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">
                Членство в СРО
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Полный допуск к проектированию объектов любого уровня
                ответственности, соблюдение строгих стандартов безопасности.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-8 bg-slate-50 border border-slate-100 rounded-lg hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                <HardHat className="w-8 h-8 text-slate-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">
                Полный цикл
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Комплексная поддержка: от концепции и расчетов нагрузок до
                финальных деталировочных чертежей и ЧПУ-файлов. Мы всегда на
                связи.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden"
      >
        {/* Pattern Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="Наши услуги"
            subtitle=" Индивидуальный подход к каждому проекту. Специализированные решения на каждом этапе."
            light
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* KM Card */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-primary transition-colors duration-300"
            >
              <div className="h-2 bg-primary w-0 group-hover:w-full transition-all duration-500"></div>
              <div className="p-8 md:p-12">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-slate-700 rounded-md">
                    <Building2 className="w-10 h-10 text-primary" />
                  </div>
                  <span className="text-4xl font-black text-slate-700 group-hover:text-slate-600 transition-colors">
                    КМ
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Конструкции Металлические (КМ)
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Разработка основного каркаса. Мы гарантируем конструктивную
                  надежность и оптимизацию расхода металла.
                </p>

                <ul className="space-y-3">
                  {[
                    "Конструктивные расчеты в САПР комплексах",
                    "Учет особенностей эксплуатации",
                    "Поддержка при экспертизе",
                    "Оптимизация материалов",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* KMD Card */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-primary transition-colors duration-300"
            >
              <div className="h-2 bg-primary w-0 group-hover:w-full transition-all duration-500"></div>
              <div className="p-8 md:p-12">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-slate-700 rounded-md">
                    <Ruler className="w-10 h-10 text-primary" />
                  </div>
                  <span className="text-4xl font-black text-slate-700 group-hover:text-slate-600 transition-colors">
                    КМД
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Деталировочные чертежи (КМД)
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Точные чертежи для производства. Мы используем Tekla
                  Structures для создания BIM-моделей, исключающих ошибки
                  сборки.
                </p>

                <ul className="space-y-3">
                  {[
                    "Качественные сборочные чертежи",
                    "Удобные сонтажные схемы",
                    "Учет особенностей оформления",
                    "Экспорт любых форматов для ЧПУ",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section id="why-us" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeading title="Почему мы" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Clock,
                title: "Скорость",
                desc: "Быстрые сроки благодаря автоматизированным BIM-процессам и опытной команде.",
              },
              {
                icon: Ruler,
                title: "Точность",
                desc: "Принцип нулевых ошибок: 3D моделирование выявляет коллизии до начала производства.",
              },
              {
                icon: Briefcase,
                title: "Экономия",
                desc: "Оптимизация металла снижает вес и стоимость без ущерба для безопасности.",
              },
              {
                icon: Download,
                title: "Форматы",
                desc: "Выдача в PDF, DWG, NC, IFC — полная совместимость с вашим производством.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold mb-2 uppercase">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Наши проекты"
            subtitle="Разнообразный опыт в промышленном, коммерческом и гражданском секторах."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Промышленный складской комплекс",
              "Атриум торгового центра",
              "Авиационный ангар",
              "Терминал логистического хаба",
              "Кровля стадиона",
              "Производственный цех",
            ].map((title, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[4/3] bg-slate-800 overflow-hidden rounded-lg cursor-pointer"
              >
                {/* Placeholder visual - Tech pattern */}
                <div className="absolute inset-0 bg-blueprint opacity-50 group-hover:scale-110 transition-transform duration-700"></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="h-1 w-12 bg-primary mb-3"></div>
                  <h4 className="text-white text-xl font-bold uppercase mb-1">
                    {title}
                  </h4>
                  <p className="text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Проектирование и моделирование • 2023
                  </p>
                </div>

                <div className="absolute top-4 right-4 bg-slate-900/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="text-white w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section
        id="process"
        className="py-20 bg-slate-50 border-y border-slate-200"
      >
        <div className="container mx-auto px-4">
          <SectionHeading title="Процесс работы" />

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "Заявка",
                  desc: "Исходные данные и требования",
                },
                {
                  step: "02",
                  title: "Оценка",
                  desc: "Коммерческое предложение",
                },
                {
                  step: "03",
                  title: "Договор",
                  desc: "Согласование и предоплата",
                },
                {
                  step: "04",
                  title: "Проект",
                  desc: "Инжиниринг и моделирование",
                },
                {
                  step: "05",
                  title: "Выдача",
                  desc: "Чертежи и файлы для ЧПУ",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                    <span className="text-xl font-bold text-slate-400 group-hover:text-primary transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold uppercase mb-2 text-slate-800">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 max-w-[150px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 md:py-32 bg-slate-900 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="text-white">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/50 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-6">
                  Контакты
                </div>
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                  Готовы запустить работу
                  <span className="text-primary"> ?</span>
                </h2>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-md">
                  Свяжитесь с нами для предварительной оценки. Наши инженеры
                  проанализируют ваш запрос и предоставят коммерческое
                  предложение в течение 1 часа.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-800 rounded-md">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h5 className="text-white font-bold uppercase text-sm mb-1">
                        Телефон
                      </h5>
                      <p className="text-slate-400">+7 (995) 933-75-00</p>
                      <p className="text-slate-500 text-xs mt-1">
                        Пн-Сб, 7:00 - 19:00 МСК
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-800 rounded-md">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h5 className="text-white font-bold uppercase text-sm mb-1">
                        Email
                      </h5>
                      <p className="text-slate-400">kmd.solution@mail.ru</p>
                      <p className="text-slate-500 text-xs mt-1">
                        Для заявок и предлолжений
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-800 rounded-md">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h5 className="text-white font-bold uppercase text-sm mb-1">
                        Офис
                      </h5>
                      <p className="text-slate-400">
                        ул. Советской Армии, 238А
                      </p>
                      <p className="text-slate-500 text-xs mt-1">Самара </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tighter uppercase">
                MetConSol
              </span>
            </div>

            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} MetConSol. Все права защищены.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="text-slate-500 hover:text-white transition-colors text-sm"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-slate-500 hover:text-white transition-colors text-sm"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
