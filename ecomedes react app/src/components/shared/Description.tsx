import { FC } from "react";
import { DescriptionProps } from "../../interface";
import { MdOutlineAddBox } from "react-icons/md";
import { GoDownload } from "react-icons/go";
import { IoNewspaperOutline } from "react-icons/io5";
import ActionButton from "./ActionButton";

const Description: FC<DescriptionProps> = ({ title, subtitle, description }) => (
    <div className="description">
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <p>{description}</p>
        <div className='description-button-group'>
            <ActionButton className='button-normal'><MdOutlineAddBox className='icon' />Add to Cart</ActionButton>
            <ActionButton className='button-normal'><GoDownload className='icon' />Wishlist</ActionButton>
            <ActionButton className='button-normal'><IoNewspaperOutline className='icon' />Wishlist</ActionButton>
        </div>
    </div>
);

export default Description