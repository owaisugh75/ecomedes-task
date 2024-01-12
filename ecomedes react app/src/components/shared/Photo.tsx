import { FC } from "react";
import { PhotoProps } from "../../interface";

const Photo: FC<PhotoProps> = ({ src }) => (
    <div className="photo">
        <img src={src} alt="Product" />
    </div>
);
export default Photo