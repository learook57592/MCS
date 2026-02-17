import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import type { InsertInquiry } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      // Validate data against schema before sending
      const validated = api.inquiries.create.input.parse(data);

      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const errorData = await res.json();
          // Try to parse as specific validation error, or fallback
          try {
            const error = api.inquiries.create.responses[400].parse(errorData);
            throw new Error(error.message);
          } catch {
            throw new Error("Validation failed");
          }
        }
        throw new Error("Failed to send inquiry");
      }

      return api.inquiries.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Quote Requested",
        description:
          "We have received your inquiry and will contact you shortly.",
        variant: "default",
        className: "bg-green-600 text-white border-none",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });
}
