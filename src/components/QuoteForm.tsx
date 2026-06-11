"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, type FormEvent } from "react";
import { collections } from "@/lib/data";
import Icon from "./Icons";

type Fields = {
  name: string;
  phone: string;
  email: string;
  city: string;
  product: string;
  projectType: string;
  message: string;
};

const empty: Fields = {
  name: "",
  phone: "",
  email: "",
  city: "",
  product: "",
  projectType: "",
  message: "",
};

const projectTypes = ["Private residence", "Villa", "Apartment", "Hotel / hospitality", "Office", "Other"];

function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[+\d][\d\s-]{6,}$/.test(f.phone.trim())) e.phone = "Enter a valid phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Enter a valid email address.";
  if (f.city.trim().length < 2) e.city = "Please enter your city.";
  if (!f.projectType) e.projectType = "Choose a project type.";
  return e;
}

const inputBase =
  "w-full rounded-xl border border-bone/15 bg-espresso/60 px-4 py-3 text-bone placeholder:text-taupe/70 outline-none transition focus:border-honey focus:ring-2 focus:ring-honey/30";

export default function QuoteForm({
  compact = false,
  initialProduct = "",
}: {
  compact?: boolean;
  initialProduct?: string;
}) {
  const [fields, setFields] = useState<Fields>({ ...empty, product: initialProduct });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  function set<K extends keyof Fields>(key: K, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate(fields);
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // Wire this to your API route / CRM / email service.
      setSent(true);
    }
  }

  const Field = ({
    label,
    name,
    type = "text",
    placeholder,
  }: {
    label: string;
    name: keyof Fields;
    type?: string;
    placeholder?: string;
  }) => (
    <label className="flex flex-col gap-2 text-sm">
      <span className="font-medium text-bone/80">{label}</span>
      <input
        type={type}
        value={fields[name]}
        onChange={(e) => set(name, e.target.value)}
        placeholder={placeholder}
        className={inputBase}
        aria-invalid={!!errors[name]}
      />
      {errors[name] && <span className="text-xs text-amber">{errors[name]}</span>}
    </label>
  );

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-bone/10 bg-walnut p-7 md:p-10">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-12 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-honey text-espresso">
              <Icon name="check" size={30} />
            </div>
            <h3 className="mt-6 font-display text-2xl text-bone">Request received</h3>
            <p className="mt-3 max-w-sm text-taupe">
              Thank you, {fields.name.split(" ")[0] || "there"}. Our team will reach out within one
              business day to discuss your project.
            </p>
            <button onClick={() => { setFields(empty); setSent(false); }} className="btn-ghost mt-8">
              Send another request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={onSubmit}
            noValidate
            className="grid gap-5"
          >
            <div className={`grid gap-5 ${compact ? "" : "md:grid-cols-2"}`}>
              <Field label="Full name" name="name" placeholder="Your name" />
              <Field label="Phone number" name="phone" type="tel" placeholder="+966 …" />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" />
              <Field label="City" name="city" placeholder="Riyadh" />
            </div>

            <div className={`grid gap-5 ${compact ? "" : "md:grid-cols-2"}`}>
              <label className="flex flex-col gap-2 text-sm">
                <span className="font-medium text-bone/80">Product of interest</span>
                <select value={fields.product} onChange={(e) => set("product", e.target.value)} className={inputBase}>
                  <option value="">No preference</option>
                  {collections.map((c) => (
                    <option key={c.slug} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2 text-sm">
                <span className="font-medium text-bone/80">Project type</span>
                <select value={fields.projectType} onChange={(e) => set("projectType", e.target.value)} className={inputBase} aria-invalid={!!errors.projectType}>
                  <option value="">Select…</option>
                  {projectTypes.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                {errors.projectType && <span className="text-xs text-amber">{errors.projectType}</span>}
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm">
              <span className="font-medium text-bone/80">Message</span>
              <textarea
                value={fields.message}
                onChange={(e) => set("message", e.target.value)}
                rows={compact ? 3 : 4}
                placeholder="Tell us about your space, timeline, and what you have in mind…"
                className={`${inputBase} resize-none`}
              />
            </label>

            <button type="submit" className="btn-honey mt-1 w-full md:w-auto md:self-start">
              Submit request <Icon name="arrow" size={18} />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
