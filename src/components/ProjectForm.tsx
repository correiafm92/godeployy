
import React from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  brandName: z.string().min(2, {
    message: "O nome da marca deve ter pelo menos 2 caracteres.",
  }),
  businessType: z.string({
    required_error: "Por favor selecione um tipo de negócio.",
  }),
  email: z.string().email({
    message: "Por favor insira um email válido.",
  }),
  socialHandle: z.string().min(1, {
    message: "Por favor insira o @ da sua marca."
  }).startsWith('@', {
    message: "O @ da marca deve começar com @."
  })
});

type ProjectFormValues = z.infer<typeof formSchema>;

const businessTypes = [
  { value: "saude", label: "Saúde" },
  { value: "tecnologia", label: "Tecnologia" },
  { value: "gastronomia", label: "Gastronomia" },
  { value: "marketing", label: "Marketing" },
  { value: "estetica", label: "Estética" },
  { value: "outro", label: "Outro" }
];

interface ProjectFormProps {
  onSuccess?: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ onSuccess }) => {
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      brandName: "",
      email: "",
      socialHandle: "@",
    },
  });

  const onSubmit = async (data: ProjectFormValues) => {
    try {
      // In future: Replace with Supabase integration
      console.log("Form data to be sent to Supabase:", data);
      
      toast.success("Orçamento enviado com sucesso! Entraremos em contato em breve.");
      
      if (onSuccess) {
        onSuccess();
      }
      
      // Reset form after successful submission
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Erro ao enviar o formulário. Por favor tente novamente.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="brandName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Nome da marca</FormLabel>
              <FormControl>
                <Input placeholder="Digite o nome da sua marca" {...field} className="bg-white/10 text-white border-white/20" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="businessType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Tipo de negócio</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white/10 text-white border-white/20">
                    <SelectValue placeholder="Selecione o tipo de negócio" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-wine-light border-white/20">
                  {businessTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value} className="text-white hover:bg-white/10">
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Email</FormLabel>
              <FormControl>
                <Input placeholder="seu@email.com" {...field} type="email" className="bg-white/10 text-white border-white/20" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="socialHandle"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">@ da marca</FormLabel>
              <FormControl>
                <Input placeholder="@suamarca" {...field} className="bg-white/10 text-white border-white/20" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
        >
          Solicitar orçamento
        </Button>
      </form>
    </Form>
  );
};

export default ProjectForm;
