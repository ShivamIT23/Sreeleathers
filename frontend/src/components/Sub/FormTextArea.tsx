import React from "react";

export default function FormTextAreaField({
  label,
  id,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-2 sans min-h-[176px]">
      <label htmlFor={id} className="text-2xl font-bold">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border-2 border-[#979797] max-w-[70vw] h-full mb-2 text-[#444444] font-normal text-sm md:text-[16px] boxShadow rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
