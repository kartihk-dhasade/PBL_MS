"use client";
import { useState } from "react";
import type { FAQ } from "@/data/faqs";

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16" id="faq-section">
      <h2 className="font-heading font-semibold text-2xl mb-10 text-center">{title}</h2>
      <div className="max-w-[700px] mx-auto space-y-0">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-border">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left group"
              aria-expanded={openIndex === i}
              id={`faq-toggle-${i}`}
            >
              <span className="font-medium text-sm pr-8">{faq.question}</span>
              <span
                className={`text-muted text-xl transition-transform duration-300 flex-shrink-0 ${
                  openIndex === i ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className="accordion-content"
              style={{
                maxHeight: openIndex === i ? "300px" : "0",
                opacity: openIndex === i ? 1 : 0,
              }}
            >
              <p className="text-sm text-muted leading-relaxed pb-5">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
