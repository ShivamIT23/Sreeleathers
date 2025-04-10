export default function FormField({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) {
  return (
    <div
      id="contact"
      className="flex flex-col gap-2 sans max-w-full min-h-[88px]"
    >
      <label htmlFor={id} className="sm:text-2xl font-bold">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border-2 border-[#979797] max-w-[70vw] text-[#444444] font-normal text-[8px] sm:text-sm md:text-[16px] boxShadow rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
