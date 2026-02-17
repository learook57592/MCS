import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "О компании", to: "about" },
    { name: "Услуги", to: "services" },
    { name: "Преимущества", to: "why-us" },
    { name: "Портфолио", to: "portfolio" },
    { name: "Процесс", to: "process" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-sm shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
            <span className="text-white font-bold text-xl group-hover:-rotate-45 transition-transform duration-300">
              M
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl tracking-tighter leading-none font-heading uppercase">
              MetConSol
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-slate-300 hover:text-primary text-sm font-medium uppercase tracking-wide cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="h-6 w-px bg-slate-700 mx-2"></div>

          <div className="flex flex-col items-end mr-4">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-slate-300 hover:text-white text-xs transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>+1 (555) 123-4567</span>
            </a>
            <a
              href="mailto:kmd.solution@mail.ru"
              className="flex items-center gap-2 text-slate-300 hover:text-white text-xs transition-colors"
            >
              <Mail className="w-3 h-3" />
              <span>kmd.solution@mail.ru</span>
            </a>
          </div>

          <Link to="contact" smooth={true} offset={-80} duration={800}>
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold uppercase tracking-wider rounded-sm shadow-lg shadow-primary/20">
              Оставить заявку
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900 border-t border-slate-800 overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-300 hover:text-primary text-lg font-medium uppercase tracking-wide cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px w-full bg-slate-800 my-2"></div>
              <Link
                to="contact"
                smooth={true}
                offset={-80}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-sm">
                  Оставить заявку
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
