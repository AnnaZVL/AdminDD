import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type inputProps = {
    title: string,
    placeholder: string,
    name: string,
    type: string,
    value: string,
    onChange: any
}
const InputBox: React.FC<inputProps> = ({title, placeholder, name, type, onChange, value}) => {
    return (
      <div className="grid gap-2">
        <Label htmlFor={name}>{title}</Label>
        {type === 'textarea' ? <Textarea name={name} placeholder={placeholder}></Textarea> : <Input name={name} placeholder={placeholder} value={value} onChange={onChange} type={type}/>}        
      </div>
    )
};

export default InputBox;