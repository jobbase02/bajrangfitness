// components/Chatbot.tsx
"use client";

import React, { useState, useEffect, useRef, FormEvent } from "react";
import { useChat, UIMessage } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { 
  MessageCircle, X, Send, Bot, Zap, 
  Dumbbell, Ticket, PhoneCall, Clock, MapPin, 
  Mail, Smartphone, ArrowLeft, LucideIcon, 
  FileExclamationPoint,
  Info
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

// 1. NESTED MENU SYSTEM TYPES
type MenuKey = 'MAIN' | 'PLANS_SUB' | 'CONTACT_SUB';

interface QuickReply {
  label: string;
  icon: LucideIcon;
  response: string;
  nextMenu: MenuKey;
}

// 2. THE CHAT TREE (Logic preserved 100%)
const MENUS: Record<MenuKey, QuickReply[]> = {
  MAIN: [
    { label: "Plans & Pricing", icon: Dumbbell, response: "**Membership Plans:**\n- 1 Month: ₹999/-\n- 3 Months: ₹2499/- *(Most Popular)*\n- 6 Months: ₹4499/-\n- 12 Months: ₹7999/-", nextMenu: 'PLANS_SUB' },
    { label: "Free Trial Pass", icon: Ticket, response: "Hell yes! Grab your free session here: [Claim Your Free Trial Pass](/inquire?plan=FreeTrialPass)", nextMenu: 'MAIN' },
    { label: "Contact Options", icon: PhoneCall, response: "How would you like to reach us? Select an option below:", nextMenu: 'CONTACT_SUB' },
    { label: "Opening Hours", icon: Clock, response: "**Iron Hours:**\nMonday - Saturday: 5:00 AM - 10:00 PM\nSunday: Closed", nextMenu: 'MAIN' },
    { label: "Gym Location", icon: MapPin, response: "**Address:**\nPilikothi Road, OPP Primary School, Haldwani, Uttarakhand 263139.", nextMenu: 'MAIN' },
    { label: "Other", icon: Info, response: "Please describe your issue, and I'll do my best to help you!", nextMenu: 'MAIN' }
  ],
  PLANS_SUB: [
    { label: "Try For Free", icon: Ticket, response: "Smart move! Get a feel of the iron paradise first: [Claim Free Trial](/inquire?plan=FreeTrialPass)", nextMenu: 'MAIN' },
    { label: "Talk to Owner", icon: PhoneCall, response: "**Call Shivraj Singh Supyal:**\n+91 8445 588 806", nextMenu: 'MAIN' },
    { label: "Main Menu", icon: ArrowLeft, response: "Going back to main options...", nextMenu: 'MAIN' }
  ],
  CONTACT_SUB: [
    { label: "Email Us", icon: Mail, response: "**Shoot us an email:**\nfitnessbajrang5@gmail.com", nextMenu: 'MAIN' },
    { label: "Phone Numbers", icon: Smartphone, response: "**Give us a ring:**\n+91 8445 588 806\n+91 7253 008 213", nextMenu: 'MAIN' },
    { label: "Main Menu", icon: ArrowLeft, response: "Going back to main options...", nextMenu: 'MAIN' }
  ]
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isThinkingLocal, setIsThinkingLocal] = useState<boolean>(false);
  const [localInput, setLocalInput] = useState<string>(""); 
  const [currentMenu, setCurrentMenu] = useState<MenuKey>('MAIN');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Vercel AI SDK Logic (Bina chehde)
  const { messages, sendMessage, status, setMessages } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
    onError: (error) => {
      const errorMsg: UIMessage = {
        id: Date.now().toString(),
        role: 'assistant',
        parts: [{ type: "text", text: "The AI Assistant is currently experiencing high support requests. Please use the **Suggested Menus** below to get instant answers!" }]
      };
      setMessages((prev) => [...prev, errorMsg]);
      setCurrentMenu('MAIN');
    }
  });

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isThinkingLocal, isLoading, currentMenu]);

  // Handle Quick Replies
  const handleQuickReply = async (reply: QuickReply): Promise<void> => {
    if (isLoading || isThinkingLocal) return;
    setIsThinkingLocal(true);

    const userMessage: UIMessage = {
      id: Date.now().toString(), 
      role: 'user', 
      parts: [{ type: "text", text: reply.label }],
    };
    setMessages((prev: UIMessage[]) => [...prev, userMessage]);

    await new Promise((resolve) => setTimeout(resolve, 600));

    const botMessage: UIMessage = {
      id: (Date.now() + 1).toString(), 
      role: 'assistant', 
      parts: [{ type: "text", text: reply.response }],
    };
    setMessages((prev: UIMessage[]) => [...prev, botMessage]);
    
    setCurrentMenu(reply.nextMenu); 
    setIsThinkingLocal(false);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!localInput.trim() || isLoading || isThinkingLocal) return;
    const msg = localInput;
    setLocalInput("");
    setCurrentMenu('MAIN');
    await sendMessage({ text: msg });
  };

  const isButtonDisabled: boolean = isLoading || isThinkingLocal || localInput.trim() === "";

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      
      {/* 🟢 FLOATING TRIGGER */}
      {!isOpen && (
        <div 
          className="relative group cursor-pointer animate-bounce"
          style={{ animationDuration: '2.5s' }} 
        >
          {/* "Ask Me" Tag / Tooltip */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap border border-white/10 opacity-90 group-hover:opacity-100 transition-opacity">
            Ask me
            {/* Chota sa pointer tail */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 border-b border-r border-white/10 rotate-45"></div>
          </div>

          {/* Main Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative bg-gradient-to-r from-orange-600 to-orange-500 text-white p-4 rounded-full shadow-lg shadow-orange-900/30 flex items-center justify-center z-10 hover:scale-105 transition-all cursor-pointer"
          >
            <MessageCircle size={28} />
          </button>
        </div>
      )}

      {/* 🟢 CHAT WINDOW */}
      {isOpen && (
        <div className="bg-zinc-950 border border-white/10 shadow-[0_0_40px_rgba(234,88,12,0.15)] rounded-2xl w-[320px] sm:w-[380px] h-[550px] flex flex-col mb-4 overflow-hidden transform transition-all animate-in fade-in zoom-in duration-200">
          
          {/* Header */}
          <div className="bg-zinc-900/50 backdrop-blur-md p-4 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="bg-orange-600 p-1.5 rounded-lg">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-wide flex items-center gap-1 uppercase leading-none">
                  Fitness Assitant <Zap size={12} className="text-orange-500 fill-orange-500" />
                </h3>
                <p className="text-[10px] text-green-500 font-medium mt-1">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors cursor-pointer">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area (Mouse-wheel/Trackpad scroll restored) */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 touch-pan-y overscroll-contain [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-orange-600/50 hover:[&::-webkit-scrollbar-thumb]:bg-orange-500 [&::-webkit-scrollbar-thumb]:rounded-full transition-colors">
            
            {/* PINNED WELCOME (Always Visible at start of scroll) */}
            <div className="space-y-4 mb-4">
              <div className="flex justify-start">
                <div className="max-w-[85%] p-3.5 rounded-2xl text-sm bg-zinc-900 border border-white/5 text-zinc-300 rounded-bl-none">
                  Welcome to Bajrang Fitness. How can I help you dominate your goals today?
                </div>
              </div>
              <div className="border-b border-white/5 pt-1" />
            </div>

            {/* DYNAMIC MESSAGES */}
            {messages.map((m: UIMessage) => {
              const textContent = m.parts.filter(p => p.type === "text").map(p => p.text).join("\n");
              if (!textContent) return null;

              return (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-gradient-to-br from-orange-600 to-orange-500 text-white rounded-br-none shadow-lg shadow-orange-900/20' 
                      : 'bg-zinc-900 border border-white/5 text-zinc-300 rounded-bl-none shadow-sm'
                  }`}>
                    <ReactMarkdown
                      components={{
                        a: ({ ...props }) => (
                          <Link href={props.href || "#"} className="text-orange-400 font-bold underline mt-1 block hover:text-orange-300 cursor-pointer">
                            {props.children}
                          </Link>
                        ),
                        strong: ({ ...props }) => <strong className="text-orange-500 font-bold">{props.children}</strong>
                      }}
                    >
                      {textContent}
                    </ReactMarkdown>
                  </div>
                </div>
              );
            })}

            {/* THINKING WAVE */}
            {(isLoading || isThinkingLocal) && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 border border-white/5 p-4 rounded-2xl rounded-bl-none flex items-center gap-1.5 shadow-sm">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce" />
                </div>
              </div>
            )}

            {/* PERSISTENT MENU CHIPS */}
            <div className={`flex flex-wrap gap-2 pt-2 transition-opacity duration-300 ${isLoading || isThinkingLocal ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
              {MENUS[currentMenu].map((reply, idx) => {
                const Icon = reply.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => handleQuickReply(reply)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 text-zinc-300 text-[11px] font-semibold rounded-full transition-all active:scale-95 shadow-sm cursor-pointer"
                  >
                    <Icon size={12} className="text-orange-500" />
                    {reply.label}
                  </button>
                );
              })}
            </div>

            <div ref={messagesEndRef} className="h-1" />
          </div>

          {/* INPUT FORM */}
          <form onSubmit={handleFormSubmit} className="p-4 bg-zinc-900/50 border-t border-white/5 flex gap-2 backdrop-blur-md">
            <input
              type="text"
              value={localInput} 
              onChange={(e) => setLocalInput(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 bg-zinc-900 text-white text-sm rounded-xl px-4 py-2.5 border border-white/5 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all placeholder:text-zinc-600"
              disabled={isLoading || isThinkingLocal} 
            />
            <button 
              type="submit" 
              disabled={isButtonDisabled}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                isButtonDisabled
                  ? "bg-zinc-800 text-zinc-600 cursor-not-allowed border border-transparent" 
                  : "bg-orange-600 text-white hover:bg-orange-500 hover:shadow-lg shadow-orange-900/40 hover:scale-105 active:scale-95 cursor-pointer"
              }`}
            >
              <Send size={18} className={!isButtonDisabled ? "transform translate-x-0.5 -translate-y-0.5" : ""} />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}