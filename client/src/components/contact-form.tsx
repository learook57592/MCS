import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { insertInquirySchema } from "@shared/schema";
import { Loader2, Send } from "lucide-react";

// Use schema from shared for consistency
const formSchema = insertInquirySchema;
type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const mutation = useCreateInquiry();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    mutation.mutate(values, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl border-t-4 border-primary relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <Send className="w-24 h-24 text-slate-900" />
      </div>

      <h3 className="text-2xl font-bold text-slate-800 mb-6 uppercase tracking-tight">
        Начать проект
      </h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600 font-semibold uppercase text-xs tracking-wider">Имя</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Иван Иванов" 
                      {...field} 
                      className="rounded-none border-slate-300 focus:border-primary focus:ring-primary/20 bg-slate-50"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600 font-semibold uppercase text-xs tracking-wider">Компания</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="ООО СпецСтрой" 
                      {...field} 
                      className="rounded-none border-slate-300 focus:border-primary focus:ring-primary/20 bg-slate-50"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-600 font-semibold uppercase text-xs tracking-wider">Телефон</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="+7 (999) 000-00-00" 
                    {...field} 
                    className="rounded-none border-slate-300 focus:border-primary focus:ring-primary/20 bg-slate-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-600 font-semibold uppercase text-xs tracking-wider">Детали проекта</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Расскажите о требованиях (тоннаж, площадь, сроки)..." 
                    className="min-h-[120px] rounded-none border-slate-300 focus:border-primary focus:ring-primary/20 bg-slate-50 resize-none"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-slate-800 hover:bg-primary text-white font-bold uppercase tracking-widest py-6 rounded-none transition-all duration-300"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Обработка...
              </>
            ) : (
              "Отправить запрос"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
