import React from "react";
import CustomSVGProps from "@/types/CustomSVGProps";

const SMLogo = ({...props}:CustomSVGProps) => {
     return (
         <svg
             viewBox='0 0 170 56'
             width="170px"
             height="56px"
             {...props}
         >
             <image
                 href="/images/SMLogo.svg"
                 width='170px'
                 height='56px'
             />
         </svg>
     )
 }
export default SMLogo;