import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12 md:mb-16", className)}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider mb-4",
          light ? "text-white" : "text-slate-800",
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center"
        >
          <div
            className={cn(
              "h-1 w-20 bg-primary mb-6",
              light ? "bg-orange-500" : "bg-primary",
            )}
          ></div>
          <p
            className={cn(
              "text-lg md:text-xl max-w-2xl mx-auto font-light",
              light ? "text-slate-300" : "text-slate-600",
            )}
          >
            {subtitle}
          </p>
        </motion.div>
      )}
    </div>
  );
}
