import { useState } from 'react'
import './App.css';
 
import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { number, string } from 'zod';
import { error } from 'console';

function  App() {
 const [name, setName] = useState<string>('');
 const [category, setCategory] = useState<string>('');
 const [price, setPrice] = useState<string>('');
 const product = {name, price, category};
 const [products, setProducts] = useState([]);

 function getName(e:any) {
    setName(e.target.value);
 };

 function getCategory(e:any) {
    setCategory(e.target.value);
  };

  function getPrice(e:any) {
      setPrice(e.target.value);     
  };

  function addProduct() { 
    setProducts([...products, product]);
    return products;        
  };

  const table = products.map((product: any, index: number) => {              
              return (<TableRow key={index}>
                        <TableCell className="font-medium" >{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>{product.price}</TableCell>
                      </TableRow>)
              })

  return (
    <>
    <div className="container">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Магазин</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Работа с остатками</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Добавить новый товар</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Корзина</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <Card>
        <CardHeader>
          <CardTitle>Добавление товара</CardTitle>          
        </CardHeader>
        <CardContent className="grid gap-3 text-left">
            <Select >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Категория товара" value={category}  onChange={(e) => getCategory(e)} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Одежда">Одежда</SelectItem>
                <SelectItem value="Игрушки">Игрушки</SelectItem>
                <SelectItem value="Книги">Книги</SelectItem>
              </SelectContent>
          </Select>
          <div className="grid gap-2 ">
            <Label htmlFor="name">Введите наименование товара</Label>
            <Input id="name" placeholder="Наименование товара" value={name} onChange={(e) => getName(e)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price">Введите цену</Label>
            <Input id="price" placeholder="Цена" value={price} onChange={(e) => getPrice(e)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="descr">Введите описание товара</Label>
          <Textarea className="" id="descr" placeholder="Минимум 50 символов" />
          </div>
        </CardContent>
        <CardFooter className="gap-2 ">
          <Button className="bg-primary text-primary-foreground" variant="ghost" onClick={() => addProduct()}>Сохранить
      </Button>
      <Button className="bg-secondary text-primary-secondary" variant="secondary">Отменить
      </Button>
        </CardFooter>
      </Card>
      <div className="table__products p-1">
        <h2 className="title">Список товаров</h2>
        <Table className="bg-secondary">
        <TableHeader>
          <TableRow className="font-bold">
            <TableHead className="">Наименование</TableHead>
            <TableHead>Категория</TableHead>
            <TableHead>Цена</TableHead>          
          </TableRow>
        </TableHeader>
        <TableBody >        
          {table}
        </TableBody>
      </Table>
      </div>
      </div>
    </>
  )
}

export default App
