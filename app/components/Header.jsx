import { Menubar } from 'primereact/menubar'
import { InputText } from 'primereact/inputtext'

function Header() {
    const start = (
      <div className="flex gap-4 align-items-center justify-content-center">
        <img
          alt="logo"
          src="/images/logo.png"
          height="40"
          className="mr-2 h-[40px] md:pl-10 md:pr-2"
        />
        <span className="text-2xl font-bold hidden md:inline-block">
          Movies
        </span>
      </div>
    );
    const end = (
      <InputText placeholder="Search" type="text" className="w-full px-4 py-1" />
    );

  return (
    <div className="card">
      <Menubar start={start} end={end} />
    </div>
  );
}

export default Header