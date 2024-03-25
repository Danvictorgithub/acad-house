import React from "react";

export default function Header() {
  return (
    <header className="shadow-sm">
      <div className="container mx-auto px-12 flex justify-start items-center w-full h-[75px] ">
        <div className="flex items-center justify-start w-full gap-2">
          <img src="logo.png" className="h-16"></img>
          <h1 className="text-2xl font-bold text-blue-700">acadhouse</h1>
        </div>
        <div className="w-full flex items-center border-2 rounded-full overflow-hidden p-2">
          <span className="material-symbols-outlined">more_vert</span>
          <input type="text" className="w-full" placeholder="Enter Location" />
          <span className="material-symbols-outlined bg-blue-700 text-white p-[5px] rounded-full">
            search
          </span>
        </div>
        <div className="w-full flex justify-end">
          <div className="flex items-center justify-center gap-2 border-2 px-4 py-1 rounded-full">
            <p className="text-xl font-medium text-zinc-700">login</p>
            <span className="material-symbols-outlined text-4xl text-zinc-700">
              account_circle
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
