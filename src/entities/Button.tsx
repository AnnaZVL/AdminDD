import React from "react";
import { Button } from "@/components/ui/button";

type btnProps = {
    text: string,
    clas: string,
    variant: any,
    type: 'button'
}

const ButtonBtn: React.FC<btnProps> = ({text, clas, variant, type}) => {
    return (
        <Button className={clas} variant={variant} type={type}>{text}</Button>
    )
};

export default ButtonBtn;