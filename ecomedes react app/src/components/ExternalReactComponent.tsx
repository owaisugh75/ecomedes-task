import React, { FC } from 'react';
import './ProductCard.scss';
import ReactDOM from 'react-dom';
import { IoCartOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { ProductCardProps } from '../interface';
import Photo from './shared/Photo';
import Description from './shared/Description';
import ActionButton from './shared/ActionButton';

const ProductCard: FC<ProductCardProps> = ({ products, index }) => {
  const { image, sku, name, showSupport, description } = products[index]
  return (
    <div className="card" key={index}>
      <Photo src={image.href} />
      <Description
        title={name}
        subtitle={sku}
        description={description || ''}
      />
      <div className='card-right'>
        <ActionButton className='button-blue'><RiContactsLine className='icon' />Contact Rep</ActionButton>
        <ActionButton className='button-blue'><IoCartOutline className='icon' />Buy Online</ActionButton>
        <ActionButton className='button-blue'><MdOutlineShoppingBag className='icon' />Shopping</ActionButton>
        {showSupport && <ActionButton className='button-blue'> <MdOutlineSupportAgent className='icon' />Support</ActionButton>}
      </div>
    </div>
  );
};

export function mountReactComponent(element: HTMLElement, props: ProductCardProps): void {
  ReactDOM.render(<ProductCard {...props} />, element);
}

declare global {
  interface Window { externalComponent: any; }
}

(function (window) {
  var myLibrary = {
    externalComponent: {
      mount: mountReactComponent,
      umount: () => { }
    }
  };
  if (!window.externalComponent) {
    window.externalComponent = myLibrary.externalComponent;
  }
})(window);


export default ProductCard;

