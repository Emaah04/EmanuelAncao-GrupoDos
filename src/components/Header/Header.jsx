import Navbar from "../Navbar/Navbar";
export default function HeaderComponent() {
    const Logo = '../../../public/clave-de-fa.png'
    return (
        <div className="w-full bg-slate-500 fixed top-0 left-0 z-50">
            <div className="flex h-[120px] w-full items-center justify-between">
              <div><img src={Logo} alt="Logo Principal" className="max-w-[65px] max-h-[65px]" /></div>
              <div><Navbar /></div>
            </div>
        </div>
    );
}