import React from "react";
import { useState } from 'react';

import InputBox from '@/entities/InputBox';
import ButtonBtn  from "@/entities/Button";
import SelectBox from '@/entities/SelectBox';

type formProps = {
  onsubmit: any
}

const AddForm: React.FC<formProps> = ({onsubmit}) => {
    const valuesSelect = ["Одежда", "Книги", "Игрушки"];

    const [name, setName] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [price, setPrice] = useState<string>('');
 
    return (
        <form onSubmit={onsubmit} className="grid gap-3 text-left" >
          <SelectBox name="category" placeholder='Выбор категории' value={category} onChange={(e) => setCategory(e.target.value)} values={valuesSelect}></SelectBox>
          <InputBox name="name" placeholder="Наименование товара" title='Введите наименование товара' type='text' value={name} onChange={(e:any) => setName(e.target.value)}></InputBox>
          <InputBox name="price" placeholder="Цена" title='Введите цену' value={price} onChange={(e:any) => setPrice(e.target.value)} type='string'></InputBox>
          <InputBox name="descr" placeholder="Минимум 50 символов" value="" onChange={''} title='Введите описание товара' type='textarea'></InputBox>
          <div className="gap-2 ">
          <ButtonBtn 
            clas="bg-primary text-primary-foreground" 
            variant="ghost" 
            text="Сохранить"
            type='submit'
            >
          </ButtonBtn>
          <ButtonBtn class="bg-secondary text-primary-secondary" variant="secondary" text="Отменить">
          </ButtonBtn>
          </div>
        </form>
    )
};

export default AddForm;