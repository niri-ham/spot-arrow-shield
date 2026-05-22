import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { ContactSubmission } from "@/data/types";

const schema = z.object({
  full_name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(30),
  property_kind: z.enum(["home", "business"]),
  service_needed: z.string().trim().min(1, "Please select a service").max(100),
  city: z.string().trim().min(2, "Please enter your city").max(100),
  message: z.string().trim().max(2000),
});

type FormValues = z.infer<typeof schema>;

const SERVICES = [
  "Security camera installation",
  "Remote monitoring setup",
  "Camera maintenance and technical support",
  "Network design and installation",
  "Network optimization and security",
  "Access control system installation",
  "Structured cabling",
  "Systems integration",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      property_kind: "home",
      service_needed: "",
      city: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    const submission: ContactSubmission = values;
    // TODO(Lovable Cloud): persist to supabase.from("contact_submissions").insert(submission)
    // Optionally trigger an email notification via a server function.
    console.log("[ContactForm] submission (mock)", submission);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-primary/30 bg-card p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-4 font-display text-2xl font-semibold">Thanks — we got it.</h3>
        <p className="mt-2 text-muted-foreground">
          A Spot Arrow specialist will reach out within one business day.
        </p>
      </div>
    );
  }

  const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting } } = form;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl border border-border bg-card p-6 md:p-8 space-y-6"
      noValidate
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name" error={errors.full_name?.message}>
          <Input {...register("full_name")} placeholder="Jane Doe" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <Input type="email" {...register("email")} placeholder="you@example.com" />
        </Field>
        <Field label="Phone number" error={errors.phone?.message}>
          <Input type="tel" {...register("phone")} placeholder="863-398-7761" />
        </Field>
        <Field label="City / service location" error={errors.city?.message}>
          <Input {...register("city")} placeholder="Orlando, FL" />
        </Field>
      </div>

      <Field label="Home or business" error={errors.property_kind?.message}>
        <RadioGroup
          value={watch("property_kind")}
          onValueChange={(v) => setValue("property_kind", v as "home" | "business")}
          className="flex gap-6 pt-1"
        >
          <label className="flex items-center gap-2 cursor-pointer text-sm">
            <RadioGroupItem value="home" id="kind-home" /> Home / Residential
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm">
            <RadioGroupItem value="business" id="kind-business" /> Business / Commercial
          </label>
        </RadioGroup>
      </Field>

      <Field label="Service needed" error={errors.service_needed?.message}>
        <Select
          value={watch("service_needed")}
          onValueChange={(v) => setValue("service_needed", v, { shouldValidate: true })}
        >
          <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
          <SelectContent>
            {SERVICES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
          </SelectContent>
        </Select>
      </Field>

      <Field label="Message">
        <Textarea
          rows={5}
          {...register("message")}
          placeholder="Tell us a bit about your property and what you're looking for…"
        />
      </Field>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow"
      >
        {isSubmitting ? (
          <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</>
        ) : (
          <><Send className="mr-2 h-4 w-4" /> Send Message</>
        )}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        We respond within one business day. Your information is never shared.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
