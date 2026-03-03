import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useAddFormSubmission } from "../hooks/useQueries";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  preferredDate: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  preferredDate?: string;
  message?: string;
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Full name is required.";
  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.phone.trim()) errors.phone = "Phone number is required.";
  if (!values.projectType) errors.projectType = "Please select a project type.";
  if (!values.preferredDate)
    errors.preferredDate = "Please pick a preferred date.";
  if (!values.message.trim()) errors.message = "Message is required.";
  return errors;
}

export function ContactPage() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    preferredDate: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const { mutateAsync: submitForm, isPending } = useAddFormSubmission();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (value: string) => {
    setValues((prev) => ({ ...prev, projectType: value }));
    if (errors.projectType) {
      setErrors((prev) => ({ ...prev, projectType: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate(values);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await submitForm(values);
      setSubmitted(true);
    } catch {
      setErrors({ message: "Submission failed. Please try again." });
    }
  };

  return (
    <main>
      {/* ── Page Hero ── */}
      <section className="relative pt-32 pb-16 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-gold/20 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="font-body text-gold/90 text-xs tracking-[0.3em] uppercase">
                Get in Touch
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
              Let's Build Together
            </h1>
            <p className="font-body text-white/60 max-w-xl text-sm sm:text-base">
              Reach out for project consultations, property inquiries, or trade
              partnership discussions. Our team responds within 24 hours.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* ── Two-column Content ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* ── Left: Contact Info + Map ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display font-bold text-2xl text-navy mb-6">
                  Contact Information
                </h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-gold/10 rounded-lg shrink-0">
                      <MapPin size={18} className="text-gold" />
                    </div>
                    <div>
                      <div className="font-body font-semibold text-navy text-sm mb-0.5">
                        Head Office
                      </div>
                      <div className="font-body text-sm text-muted-foreground leading-relaxed">
                        14th Floor, Infinity Tower,
                        <br />
                        Bandra Kurla Complex,
                        <br />
                        Mumbai, Maharashtra 400051
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-gold/10 rounded-lg shrink-0">
                      <Phone size={18} className="text-gold" />
                    </div>
                    <div>
                      <div className="font-body font-semibold text-navy text-sm mb-0.5">
                        Phone
                      </div>
                      <div className="font-body text-sm text-muted-foreground">
                        +91 22 6600 8800
                      </div>
                      <div className="font-body text-sm text-muted-foreground">
                        +91 98200 55500 (Mobile)
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-gold/10 rounded-lg shrink-0">
                      <Mail size={18} className="text-gold" />
                    </div>
                    <div>
                      <div className="font-body font-semibold text-navy text-sm mb-0.5">
                        Email
                      </div>
                      <div className="font-body text-sm text-muted-foreground">
                        info@rharshz.com
                      </div>
                      <div className="font-body text-sm text-muted-foreground">
                        projects@rharshz.com
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="rounded-lg overflow-hidden border border-silver-light shadow-card">
                <div className="relative h-56 bg-silver-light flex items-center justify-center">
                  <img
                    src="/assets/generated/infrastructure-bridge.dim_800x600.jpg"
                    alt="Mumbai Office Location"
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy/40">
                    <MapPin size={32} className="text-gold mb-2" />
                    <span className="font-body text-white text-sm font-semibold">
                      BKC, Mumbai
                    </span>
                    <span className="font-body text-white/60 text-xs">
                      Maharashtra, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-silver-light rounded-lg p-6">
                <h3 className="font-display font-semibold text-navy text-base mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2">
                  {[
                    ["Monday – Friday", "9:00 AM – 7:00 PM"],
                    ["Saturday", "10:00 AM – 5:00 PM"],
                    ["Sunday", "Closed"],
                  ].map(([day, hours]) => (
                    <div
                      key={day}
                      className="flex justify-between items-center"
                    >
                      <span className="font-body text-sm text-navy">{day}</span>
                      <span className="font-body text-sm text-muted-foreground">
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── Right: Form ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {submitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center py-12 px-6">
                    <CheckCircle size={56} className="text-gold mx-auto mb-5" />
                    <h2 className="font-display font-bold text-2xl text-navy mb-3">
                      Request Received
                    </h2>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                      Your consultation request has been received. Our team will
                      contact you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setValues({
                          name: "",
                          email: "",
                          phone: "",
                          projectType: "",
                          preferredDate: "",
                          message: "",
                        });
                      }}
                      className="mt-8 inline-flex items-center px-6 py-3 border border-navy text-navy font-body font-semibold text-sm rounded hover:bg-navy hover:text-white transition-colors"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="font-display font-bold text-2xl text-navy mb-2">
                    Book a Consultation
                  </h2>
                  <p className="font-body text-sm text-muted-foreground mb-8">
                    Fill in the details below and one of our specialists will
                    reach out to discuss your project.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="name"
                        className="font-body text-xs font-semibold text-navy uppercase tracking-wider"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        placeholder="Rajiv Sharma"
                        className={`font-body text-sm h-11 ${errors.name ? "border-destructive" : ""}`}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <p className="font-body text-xs text-destructive">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="email"
                          className="font-body text-xs font-semibold text-navy uppercase tracking-wider"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={`font-body text-sm h-11 ${errors.email ? "border-destructive" : ""}`}
                          autoComplete="email"
                        />
                        {errors.email && (
                          <p className="font-body text-xs text-destructive">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <Label
                          htmlFor="phone"
                          className="font-body text-xs font-semibold text-navy uppercase tracking-wider"
                        >
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={values.phone}
                          onChange={handleChange}
                          placeholder="+91 98200 00000"
                          className={`font-body text-sm h-11 ${errors.phone ? "border-destructive" : ""}`}
                          autoComplete="tel"
                        />
                        {errors.phone && (
                          <p className="font-body text-xs text-destructive">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Project Type + Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="projectType"
                          className="font-body text-xs font-semibold text-navy uppercase tracking-wider"
                        >
                          Project Type *
                        </Label>
                        <Select
                          value={values.projectType}
                          onValueChange={handleSelectChange}
                        >
                          <SelectTrigger
                            id="projectType"
                            className={`font-body text-sm h-11 ${errors.projectType ? "border-destructive" : ""}`}
                          >
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Residential">
                              Residential
                            </SelectItem>
                            <SelectItem value="Commercial">
                              Commercial
                            </SelectItem>
                            <SelectItem value="Infrastructure">
                              Infrastructure
                            </SelectItem>
                            <SelectItem value="Trade">Trade</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.projectType && (
                          <p className="font-body text-xs text-destructive">
                            {errors.projectType}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <Label
                          htmlFor="preferredDate"
                          className="font-body text-xs font-semibold text-navy uppercase tracking-wider"
                        >
                          Preferred Date *
                        </Label>
                        <Input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          value={values.preferredDate}
                          onChange={handleChange}
                          className={`font-body text-sm h-11 ${errors.preferredDate ? "border-destructive" : ""}`}
                          min={new Date().toISOString().split("T")[0]}
                        />
                        {errors.preferredDate && (
                          <p className="font-body text-xs text-destructive">
                            {errors.preferredDate}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="message"
                        className="font-body text-xs font-semibold text-navy uppercase tracking-wider"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project — scope, location, budget, and any specific requirements..."
                        className={`font-body text-sm min-h-[120px] resize-none ${errors.message ? "border-destructive" : ""}`}
                      />
                      {errors.message && (
                        <p className="font-body text-xs text-destructive">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full inline-flex items-center justify-center gap-2 py-4 bg-gold text-navy font-body font-bold text-sm tracking-wide rounded transition-all duration-200 hover:bg-gold-dark hover:shadow-gold disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isPending && (
                        <Loader2 size={16} className="animate-spin" />
                      )}
                      {isPending
                        ? "Submitting..."
                        : "Submit Consultation Request"}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
