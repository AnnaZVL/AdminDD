import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

type tableProps = {
    title: string,
    titleHead: [''],
    products: []
}

const TableProducts: React.FC<tableProps> = ({title, titleHead, products}) => {
    //console.log('object', products);
    return (
      <div className="table__products p-1">
        <h2 className="title">{title}</h2>
        <Table className="bg-secondary">
        <TableHeader>
          <TableRow className="font-bold">
            {titleHead.map((titleText, index) => {
                return <TableHead key={index}>{titleText}</TableHead>
            })}                   
          </TableRow>
        </TableHeader>
        <TableBody >        
          {products.map((product: any, index: number) => {              
              return (<TableRow key={index}>
                        <TableCell className="font-medium" >{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>{product.price}</TableCell>
                      </TableRow>)
              })}
        </TableBody>
      </Table>
      </div>
    )
};

export default TableProducts;