"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, type FormEvent } from "react";
import Icon from "./Icons";

const inputBase =
  "w-full rounded-xl border border-bone/15 bg-espresso/60 px-4 py-3 text-bone placeholder:text-taupe/70 outline-none transition focus:border-honey focus:ring-2 focus:ring-honey/30";

export default function ContactForm() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (data.name.trim().length < 2) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Enter a valid email.";
    if (data.message.trim().length < 5) errs.message = "Tell us a little more.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  }

  return (
    <div className="rounded-[1.75rem] border border-bone/10 bg-walnut p-7 md:p-9">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div key="ok" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center py-10 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-honey text-espresso"><Icon name="check" size={28} /></div>
            <h3 className="mt-5 font-display text-xl text-bone">Message sent</h3>
            <p className="mt-2 text-taupe">We’ll be in touch shortly. Thank you.</p>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={onSubmit} noValidate className="grid gap-5">
            <label className="flex flex-col gap-2 text-sm">
              <span className="font-medium text-bone/80">Name</span>
              <input className={inputBase} value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} placeholder="Your name" />
              {errors.name && <span className="text-xs text-amber">{errors.name}</span>}
            </label>
            <label className="flex flex-col gap-2 text-sm">
              <span className="font-medium text-bone/80">Email</span>
              <input className={inputBase} type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="you@email.com" />
              {errors.email && <span className="text-xs text-amber">{errors.email}</span>}
            </label>
            <label className="flex flex-col gap-2 text-sm">
              <span className="font-medium text-bone/80">Message</span>
              <textarea className={`${inputBase} resize-none`} rows={4} value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} placeholder="How can we help?" />
              {errors.message && <span className="text-xs text-amber">{errors.message}</span>}
            </label>
            <button type="submit" className="btn-honey w-full md:w-auto md:self-start">Send message <Icon name="arrow" size={18} /></button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
