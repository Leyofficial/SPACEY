
import {IProduct} from "../../../../../types.ts";

interface ISingleProductProps{
    product:IProduct,
    index:number
}
const SingleTableProduct = ({product,index}:ISingleProductProps) => {
    console.log(product)
    return (
 <>
     <tr key={index}>
         <td>{product.title}</td>
         <td>{product.price}</td>
         <td>{product.price}</td>
         <td>{product.price}</td>
     </tr>
 </>


    );
};

export default SingleTableProduct;