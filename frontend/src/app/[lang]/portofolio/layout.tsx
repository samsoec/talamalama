import "../globals.css";

export default function layout({children} : {children: React.ReactNode}) {
  return (
    <div>
      <div className="h-[96px] w-full bg-primary"/>
      {children}
    </div>
  )
}
