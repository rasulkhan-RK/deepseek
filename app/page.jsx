"use client";

//Next js modules
import Image from "next/image";

// Local File import
import { assets } from "@/assets/assets.js";
import SidebarItem from "@/components/SidebarItem";
import PromptBox from "@/components/PromptBox";
import Message from "@/components/Message";

// Hooks
import { useState } from "react";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  return (
    <div>
      <div className="flex h-screen">
        {/* --- Side Bar --- */}
        <SidebarItem expand={expand} setExpand={setExpand} />
        <div className="flex flex-1 flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            <Image
              className="rotate-180"
              src={assets.menu_icon}
              alt="menu-icon"
              onClick={() => (expand ? setExpand(false) : setExpand(true))}
            />
            <Image
              className="opacity-70"
              src={assets.chat_icon}
              alt="chat-icon"
            />
          </div>

          {/* --- Messages */}
          {messages.length === 0 ? (
            <>
              <div className="flex items-center gap-3">
                <Image
                  src={assets.logo_icon}
                  alt="logo-icon"
                  className="h-auto"
                />
                <p className="text-2xl font-medium">Hi, I'm DeepSeek.</p>
              </div>
              <p className="text-sm mt-2">How can i help u today?</p>
            </>
          ) : (
            <div>
              <Message role="user" content="What is next js" />
            </div>
          )}

          {/* PromptBox */}
          <PromptBox setIsLoading={setIsLoading} isLoading={isLoading} />

          <p className="text-xs absolute bottom-1 text-gray-500">
            AI-generated, for references Only
          </p>
        </div>
      </div>
    </div>
  );
}
