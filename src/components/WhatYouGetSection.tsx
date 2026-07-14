// File: src/components/WhatYouGetSection.tsx

"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

type DemoMessage = { from: "in" | "out"; text: string };

const AI_MESSAGES: DemoMessage[] = [
  { from: "out", text: "Hi, has the payment for invoice INV-2291 gone through?" },
  { from: "in", text: "Checking now. INV-2291 is still pending, due in 3 days." },
  { from: "in", text: "Want me to send the customer a reminder now?" },
  { from: "out", text: "Yes please" },
  { from: "in", text: "Reminder sent. I'll flag it again if it's not cleared by the due date." }
];

const CARDS = [
  {
    id: "followup",
    label: "automation",
    title: "The follow-up that never gets forgotten",
    description:
      "A reminder, a check-in, a nudge — sent on schedule, without anyone having to remember to send it.",
    tint: "#6B8F4E"
  },
  {
    id: "oneplace",
    label: "systems",
    title: "One place instead of five tabs",
    description:
      "Customers, orders, and conversations living in one system, not scattered across spreadsheets and chats.",
    tint: "#3E6690"
  },
  {
    id: "custom",
    label: "presence",
    title: "Built around your business, not a template",
    description:
      "A website shaped by how you actually work — not a generic theme with your logo swapped in.",
    tint: "#C9683B"
  },
  {
    id: "numbers",
    label: "visibility",
    title: "Numbers you don't have to go looking for",
    description:
      "A clear view of what's actually happening in your business, without compiling it yourself.",
    tint: "#8B4F94"
  },
  {
    id: "proof",
    label: "verification",
    title: "Proof that something actually happened",
    description:
      "Confirmation that a task was done or a message was sent — not just a claim typed in after the fact.",
    tint: "#1D9E75"
  },
  {
    id: "person",
    label: "support",
    title: "A person, not a support queue",
    description:
      "When something needs changing, you message someone who already knows your business.",
    tint: "#B8862E"
  }
] as const;

function tintBg(hex: string) {
  return `radial-gradient(120% 100% at 20% 0%, ${hex}55 0%, ${hex}28 55%, ${hex}12 100%)`;
}

function AssistantVisual() {
  const [visibleMsgs, setVisibleMsgs] = useState<DemoMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const threadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let elapsed = 400;
    AI_MESSAGES.forEach((msg) => {
      if (msg.from === "in") {
        const typingStart = elapsed;
        const reveal = typingStart + 650;
        timeouts.current.push(setTimeout(() => setIsTyping(true), typingStart));
        timeouts.current.push(
          setTimeout(() => {
            setIsTyping(false);
            setVisibleMsgs((prev) => [...prev, msg]);
          }, reveal)
        );
        elapsed = reveal + 400;
      } else {
        timeouts.current.push(setTimeout(() => setVisibleMsgs((prev) => [...prev, msg]), elapsed));
        elapsed += 750;
      }
    });
    return () => timeouts.current.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (threadRef.current) threadRef.current.scrollTop = threadRef.current.scrollHeight;
  }, [visibleMsgs, isTyping]);

  return (
    <div className="w-full max-w-[280px] bg-[#0a0a0a] rounded-[22px] p-2 border border-[#0a0a0a]/10 shadow-sm mx-auto">
      <div className="rounded-2xl overflow-hidden">
        <div className="bg-[#1a1a1a] px-3.5 py-2.5 flex items-center gap-2.5 border-b border-white/5">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center font-satoshi font-semibold text-[11px] text-[#0a0a0a]">
            TS
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-inter text-[12px] font-medium text-white">Two Stack assistant</div>
            <div className="font-inter text-[10px] text-white/40">Always on</div>
          </div>
        </div>
        <div
          ref={threadRef}
          className="px-3 py-3 flex flex-col gap-2 min-h-[220px] max-h-[220px] overflow-y-auto bg-[#141414]"
        >
          {visibleMsgs.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={`flex ${msg.from === "out" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[82%] px-2.5 py-1.5 text-[11.5px] leading-relaxed font-inter ${
                  msg.from === "out"
                    ? "bg-white text-[#0a0a0a] rounded-2xl rounded-br-md"
                    : "bg-[#2a2a2a] text-white border border-white/10 rounded-2xl rounded-bl-md"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-[#2a2a2a] border border-white/10 rounded-2xl rounded-bl-md px-3 py-2.5 flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-white/30"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CardVisual({ id, tint }: { id: string; tint: string }) {
  switch (id) {
    case "followup":
      return (
        <div className="flex flex-col gap-2 w-[85%]">
          {[
            { label: "INV-2291", status: "Reminder sent", active: true },
            { label: "INV-2274", status: "Paid", active: false },
            { label: "INV-2260", status: "Due in 5 days", active: false }
          ].map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between rounded-lg bg-white/70 border border-[#0a0a0a]/5 px-3 py-2"
            >
              <span className="font-inter text-[11px] text-[#0a0a0a]/70">{row.label}</span>
              <span
                className="font-inter text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{
                  color: row.active ? "#fff" : "rgba(10,10,10,0.4)",
                  background: row.active ? tint : "transparent"
                }}
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>
      );
    case "oneplace":
      return (
        <div className="flex items-center justify-center gap-2 w-[80%]">
          {["Orders", "Chats", "Customers"].map((label, i) => (
            <div
              key={label}
              className="flex-1 rounded-xl bg-white border-2 px-3 py-4 flex flex-col items-center gap-1.5"
              style={{ marginTop: i === 1 ? -8 : 0, borderColor: `${tint}` }}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: tint }} />
              <span className="font-inter text-[10px] text-[#0a0a0a]/70 font-medium">{label}</span>
            </div>
          ))}
        </div>
      );
    case "custom":
      return (
        <div className="w-[85%] rounded-xl overflow-hidden border border-[#0a0a0a]/10 bg-white shadow-sm">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#0a0a0a]/10" style={{ background: `${tint}18` }}>
            <span className="w-2 h-2 rounded-full" style={{ background: tint }} />
            <span className="w-2 h-2 rounded-full bg-[#0a0a0a]/15" />
            <span className="w-2 h-2 rounded-full bg-[#0a0a0a]/15" />
          </div>
          <div className="p-3 flex flex-col gap-2">
            <div className="h-3 rounded" style={{ width: "60%", background: tint }} />
            <div className="h-2 rounded bg-[#0a0a0a]/10" style={{ width: "90%" }} />
            <div className="h-2 rounded bg-[#0a0a0a]/10" style={{ width: "75%" }} />
            <div
              className="h-6 rounded-full mt-1"
              style={{ width: "40%", background: tint }}
            />
          </div>
        </div>
      );
    case "numbers":
      return (
        <div className="grid grid-cols-3 gap-2 w-[85%]">
          {[
            { label: "Revenue", value: "Rs. 1.2M" },
            { label: "Overdue", value: "Rs. 37K" },
            { label: "Active", value: "84" }
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="rounded-lg px-2.5 py-2.5 border"
              style={{
                background: i === 0 ? tint : "#fff",
                borderColor: i === 0 ? tint : "rgba(10,10,10,0.1)"
              }}
            >
              <div
                className="font-inter text-[9px]"
                style={{ color: i === 0 ? "rgba(255,255,255,0.75)" : "rgba(10,10,10,0.4)" }}
              >
                {stat.label}
              </div>
              <div
                className="font-satoshi font-semibold text-[13px] mt-0.5"
                style={{ color: i === 0 ? "#fff" : "#0a0a0a" }}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      );
    case "proof":
      return (
        <div className="flex flex-col gap-2 w-[80%]">
          {[
            { label: "Perera Stores", done: true },
            { label: "Fernando Mart", done: true },
            { label: "Silva Wholesale", done: false }
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-2.5 rounded-lg bg-white border border-[#0a0a0a]/10 px-3 py-2">
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: row.done ? tint : "rgba(10,10,10,0.08)" }}
              >
                {row.done && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12L9 17L20 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className="font-inter text-[11px] text-[#0a0a0a]/70">{row.label}</span>
            </div>
          ))}
        </div>
      );
    case "person":
      return (
        <div className="flex items-center gap-3 w-[80%]">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center font-satoshi font-semibold text-white text-sm flex-shrink-0 shadow-sm"
            style={{ background: tint }}
          >
            TS
          </div>
          <div className="bg-white border border-[#0a0a0a]/10 rounded-2xl rounded-bl-md px-3.5 py-2.5 shadow-sm">
            <span className="font-inter text-[12px] text-[#0a0a0a]/80">On it, fixing that now</span>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function WhatYouGetSection() {
  return (
    <section className="w-full bg-[#fdfdfe] border-t border-[#0a0a0a]/10 py-12 sm:py-16 md:py-20 lg:py-28 px-6 lg:px-[35px]">
      <div className="mx-auto max-w-[1300px]">

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="font-satoshi font-bold text-[#0a0a0a] leading-[1.05] mb-8 sm:mb-10 md:mb-14 lg:mb-20"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", maxWidth: "620px" }}
        >
          What you get.
        </motion.h2>

        {/* Lead card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 lg:gap-16 items-center border border-[#0a0a0a]/10 rounded-2xl bg-white/40 p-5 sm:p-6 lg:p-12 mb-5 lg:mb-7"
        >
          <div>
            <div className="font-inter text-[11px] text-[#0a0a0a]/40 mb-3 uppercase tracking-wider">system</div>
            <h3 className="font-satoshi font-bold text-[#0a0a0a] text-xl sm:text-2xl lg:text-[34px] leading-[1.1]">
              One system. Built-in intelligence, built-in automation.
            </h3>
            <p className="mt-3 sm:mt-4 font-inter text-[#0a0a0a]/55 text-[14px] sm:text-[15px] leading-relaxed max-w-md">
              Your website — none of it just sits there. It's built to
              notice what's happening and act on it, whether that's replying to a customer at
              2am or flagging something before it becomes a problem.
            </p>
          </div>
          <div className="flex justify-center py-4 lg:py-0">
            <AssistantVisual />
          </div>
        </motion.div>

        {/* Grid cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-7">
          {CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" as const }}
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: `${card.tint}30` }}
            >
              <div
                className="h-[160px] sm:h-[180px] lg:h-[220px] flex items-center justify-center"
                style={{ background: tintBg(card.tint) }}
              >
                <CardVisual id={card.id} tint={card.tint} />
              </div>
              <div className="p-5 sm:p-6 lg:p-8 bg-white/60">
                <div
                  className="inline-block font-inter text-[10px] sm:text-[11px] font-semibold mb-2 sm:mb-3 uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{ color: card.tint, background: `${card.tint}18` }}
                >
                  {card.label}
                </div>
                <h3 className="font-satoshi font-bold text-[#0a0a0a] text-lg sm:text-xl lg:text-[22px] leading-[1.15] mb-2 sm:mb-2.5">
                  {card.title}
                </h3>
                <p className="font-inter text-[#0a0a0a]/55 text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
