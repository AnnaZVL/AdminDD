import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

type selectProps = {
    values: [],
    placeholder: string,
    name: string,
    value: string
}

const SelectBox: React.FC<selectProps> = ({values, placeholder, name, value}) => {
    return (
          <Select >
              <SelectTrigger className="w-[180px]" name={name} value={value}>
                <SelectValue placeholder={placeholder}/>
              </SelectTrigger>
              <SelectContent >
                {values.map((item, index) => {
                    return <SelectItem value={item} key={index}>{item}</SelectItem>
                })}                
              </SelectContent>
          </Select>
    )
};

export default SelectBox;