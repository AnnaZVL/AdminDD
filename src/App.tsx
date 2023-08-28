import './App.css';
import { useState } from 'react';

import MenuBarHead from '@/features/Menubar';
import TableProducts from '@/widgets/TableProducts';
import AddForm from '@/widgets/AddForm';

function  App() { 
  const tableHeadTitle = ['Наименование', 'Категория', 'Цена'];   
  const [products, setProducts] = useState([]);
  
  let product = {}; 

  function handleForm(e: any) {
    e.preventDefault();
    product = {
      name: e.target.elements.name.value,
      price: e.target.elements.price.value,
      category: e.target.elements.category.value
    }
    setProducts([...products, product]);    
  };

  return (
    <>
      <div className="container">
        <MenuBarHead></MenuBarHead>

        <AddForm 
          onsubmit={(e:any) => handleForm(e)}>
        </AddForm>

        <TableProducts 
          title='Список товаров магазина'
          titleHead={tableHeadTitle}
          products={products}>
        </TableProducts>
      </div>
    </>
  )
}

export default App;