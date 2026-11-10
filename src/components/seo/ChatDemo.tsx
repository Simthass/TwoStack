import type { ChatMessage } from "@/lib/service-data";
import Image from "next/image";

function VoiceBubble({ message }: { message: ChatMessage }) {
  const bars = [6, 12, 8, 16, 10, 14, 7, 12, 9, 15, 8, 11];
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-[10px] text-white"
      >
        ▶
      </span>
      <span aria-hidden="true" className="flex items-center gap-[3px]">
        {bars.map((h, i) => (
          <span
            key={i}
            className="w-[3px] rounded-full bg-black/40"
            style={{ height: h }}
          />
        ))}
      </span>
      <span className="font-inter text-[11px] text-black/50">
        {message.meta}
      </span>
    </div>
  );
}

function ImageBubble({ message }: { message: ChatMessage }) {
  if (!message.src) return null;
  return (
    <div className="relative mb-2 aspect-[4/3] w-full overflow-hidden border border-black/10 bg-black/[0.04]">
      <Image
        src={message.src}
        alt={message.meta ?? "Customer photo"}
        fill
        sizes="(min-width: 768px) 30vw, 88vw"
        className="object-cover"
      />
    </div>
  );
}

function Bubble({ message }: { message: ChatMessage }) {
  const isBot = message.from === "bot";
  return (
    <div className={`flex ${isBot ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[88%] px-4 py-3 ${
          isBot
            ? "bg-black text-white"
            : "border border-black/10 bg-white text-black"
        }`}
      >
        <p
          className={`mb-1.5 font-inter text-[10px] uppercase tracking-[0.14em] ${
            isBot ? "text-white/40" : "text-black/35"
          }`}
        >
          {isBot ? "Chatbot" : "Customer"}
        </p>
        {message.kind === "voice" && <VoiceBubble message={message} />}
        {message.kind === "image" && <ImageBubble message={message} />}
        <p
          className={`font-inter text-[14px] leading-6 ${
            message.kind === "voice" ? "mt-2" : ""
          }`}
        >
          {message.text}
        </p>
        {message.translation && (
          <p
            className={`mt-2 border-t pt-2 font-inter text-[12px] leading-5 ${
              isBot
                ? "border-white/15 text-white/55"
                : "border-black/10 text-black/50"
            }`}
          >
            <span className="font-medium">Means:</span> {message.translation}
          </p>
        )}
      </div>
    </div>
  );
}

export default function ChatDemo({
  chats,
}: {
  chats: ReadonlyArray<{ label: string; messages: readonly ChatMessage[] }>;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {chats.map((chat) => (
        <figure
          key={chat.label}
          className="flex flex-col border border-black/10 bg-[#f8f8f8]"
        >
          <figcaption className="border-b border-black/10 px-5 py-3 font-inter text-[11px] uppercase tracking-[0.14em] text-black/45">
            {chat.label}
          </figcaption>
          <div className="flex flex-1 flex-col gap-3 p-4">
            {chat.messages.map((message, i) => (
              <Bubble key={i} message={message} />
            ))}
          </div>
        </figure>
      ))}
    </div>
  );
}
