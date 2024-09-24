import { LucideProps, UserPlus } from "lucide-react";
import Image from "next/image";

export const Icons = {
    Logo:(props:LucideProps) =>(
        
        <div className="flex items-center justify-center font-mono font-bold">
                            &lt;CodeSMS <Image width={18} src={"https://img.icons8.com/?size=100&id=60000&format=png&color=000000"} alt="" />/&gt;
                            </div>
                  
    ),
    UserPlus
}

export type Icon = keyof typeof Icons