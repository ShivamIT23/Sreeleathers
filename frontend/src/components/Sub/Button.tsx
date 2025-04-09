export default function Button({children}:{children:string}) {
  return (
    <div
    className="rounded-[100px] w-fit min-w-32 bg-[linear-gradient(to_bottom,_#03A3D3,_#0A92C1)] p-4 gap-2 flex md:whitespace-nowrap shadow transition">
      <button className="bg-inherit text-white w-fit h-fit roboto font-medium md:text-[16px]">
        {children}
      </button>
    </div>
  );
}
