import React from "react";

const InfiniteTicker = () => {
  const message = "This website was 100% programmed by me from scratch • ";

  return (
    <div className="fixed bottom-0 left-0 w-full bg-fuchsia-600 z-[100] overflow-hidden py-1 border-t border-fuchsia-400 shadow-[0_-4px_10px_rgba(217,70,239,0.3)]">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Repetimos el texto varias veces para que no haya huecos */}
        <span className="text-white font-bold uppercase text-xs tracking-widest px-4">
          {message.repeat(10)}
        </span>
        <span className="text-white font-bold uppercase text-xs tracking-widest px-4">
          {message.repeat(10)}
        </span>
      </div>
    </div>
  );
};

export default InfiniteTicker;