"use client";

import { useMemo, useState } from "react";
import { SERVICE_LINKS } from "@/lib/site";
import { track } from "@/lib/analytics";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  services: string[];
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  services: [],
};

function ContactInput({
  label,
  required = false,
  type,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  required?: boolean;
  type: "text" | "email" | "tel";
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="border-b border-black/10 py-6 md:border-r md:px-6 md:[&:nth-child(2n)]:border-r-0 md:[&:nth-child(odd)]:pl-0">
      <span className="font-inter text-[11px] uppercase tracking-[0.14em] text-black/40">
        {label}{required ? " *" : ""}
      </span>
      <input
        required={required}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="mt-3 w-full bg-transparent font-satoshi text-xl text-black outline-none placeholder:text-black/20"
      />
    </label>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedLabels = useMemo(
    () =>
      form.services
        .map((href) => SERVICE_LINKS.find((service) => service.href === href)?.label)
        .filter(Boolean) as string[],
    [form.services],
  );

  const toggleService = (href: string) => {
    setForm((current) => ({
      ...current,
      services: current.services.includes(href)
        ? current.services.filter((item) => item !== href)
        : [...current.services, href],
    }));
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, services: selectedLabels, website, source: window.location.href }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Please try again or contact us directly.");
      setStatus("Thanks. Your project details have been sent. We'll reply by email.");
      track("contact_submit_success", { source: "contact" });
      setForm(initialState);
    } catch (error) { setStatus(error instanceof Error ? error.message : "Please contact us directly."); }
    finally { setIsSubmitting(false); }
  };

  return (
    <form onSubmit={submit} className="border-t border-black/12">
      <label className="absolute -left-[10000px]" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} /></label>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ContactInput
          label="Name"
          required
          type="text"
          value={form.name}
          placeholder="Your name"
          onChange={(value) => setForm((current) => ({ ...current, name: value }))}
        />
        <ContactInput
          label="Email"
          required
          type="email"
          value={form.email}
          placeholder="you@company.com"
          onChange={(value) => setForm((current) => ({ ...current, email: value }))}
        />
        <ContactInput
          label="Phone / WhatsApp"
          type="tel"
          value={form.phone}
          placeholder="+94 ..."
          onChange={(value) => setForm((current) => ({ ...current, phone: value }))}
        />
        <ContactInput
          label="Company"
          type="text"
          value={form.company}
          placeholder="Company or startup"
          onChange={(value) => setForm((current) => ({ ...current, company: value }))}
        />
      </div>

      <fieldset className="border-b border-black/10 py-7">
        <legend className="font-inter text-[11px] uppercase tracking-[0.14em] text-black/40">
          What are you looking to build?
        </legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {SERVICE_LINKS.map((service) => {
            const active = form.services.includes(service.href);
            return (
              <button
                key={service.href}
                type="button"
                aria-pressed={active}
                onClick={() => toggleService(service.href)}
                className={`rounded-full border px-4 py-2 font-inter text-xs transition-colors ${
                  active
                    ? "border-black bg-black text-white"
                    : "border-black/15 text-black/55 hover:border-black/35"
                }`}
              >
                {service.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <label className="block border-b border-black/10 py-7">
        <span className="font-inter text-[11px] uppercase tracking-[0.14em] text-black/40">
          What should the system solve? *
        </span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((current) => ({ ...current, message: e.target.value }))}
          placeholder="Tell us what is happening today, what is slowing the business down, and what a successful outcome would look like."
          className="mt-4 w-full resize-y bg-transparent font-inter text-base leading-7 text-black outline-none placeholder:text-black/22"
        />
      </label>

      <div className="flex flex-col gap-4 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md font-inter text-xs leading-5 text-black/40">
          Your details are sent to TwoStack so we can reply. Prefer chat? Use the WhatsApp link above.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 font-inter text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
        >
          {isSubmitting ? "Sending…" : "Send project brief ↗"}
        </button>
      </div>
      <p role="status" aria-live="polite" className="mt-4 font-inter text-sm text-black/70">{status}</p>
    </form>
  );
}
