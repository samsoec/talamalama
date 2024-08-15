"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

type FilterProps = {
  label: string;
  selected?: string;
  options: { label: string, value: string }[];
  onSelect: (value?: string) => void;
};

export default function Filter({ label, selected, options, onSelect }: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onSelectHandler = (value?: string) => {
    onSelect(value);
    setIsOpen(false);
  }

  const toggleOpen = (e: MouseEvent) => {
    if (isOpen && dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }

    if (!isOpen && buttonRef.current && buttonRef.current.contains(e.target as Node)) {
      setIsOpen(true);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', toggleOpen);
    return () => {
      document.removeEventListener('mousedown', toggleOpen);
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <button ref={buttonRef} className={`me-2 px-4 py-3 flex flex-row items-center gap-2 rounded-full border cursor-pointer transition ease-in-out delay-50 ${selected ? "bg-white text-gray-700" : "text-white border-gray-700 hover:border-gray-500 border-solid"}`}>
        <span>{label}</span>
        <span>
          {isOpen ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
        </span>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div ref={dropdownRef} className={`z-10 ${isOpen ? 'absolute' : 'hidden'} top-[120%] bg-primary border-gray-700 border divide-y divide-gray-700 rounded-lg shadow w-44`}>
        <div className="py-2" onClick={() => onSelectHandler(undefined)}>
          <span className="block px-4 py-2 text-sm text-gray-100 hover:bg-zinc-800">Semua</span>
        </div>
        <ul className="py-2 text-sm text-gray-100" >
          {options.map((option) => (
            <li key={option.value} onClick={() => onSelectHandler(option.value)}>
              <span className="block px-4 py-2 transition ease-in-out delay-50 hover:bg-zinc-800">{option.label}</span>
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  );
}