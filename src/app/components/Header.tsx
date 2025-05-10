import Image from "next/image";
import Logo from "../../assets/logo.svg";
import Moon from "../../assets/icon-moon.svg";

export default function Header() {
    return (
        <div className="flex justify-center items-center w-[50%] bg-Neutral-0 rounded-2xl border border-Neutral-200 shadow-2xl shadow-Neutral-200 p-2.5">
            <div className="flex justify-between items-center w-full">
                <div>
                    <Image src={Logo} alt="Logo" />
                </div>
                <div className="bg-Neutral-100 rounded-lg p-3">
                    <Image 
                        className="cursor-pointer"
                        src={Moon} 
                        alt="Mode" 
                    />
                </div>
            </div>
        </div>
    );
}