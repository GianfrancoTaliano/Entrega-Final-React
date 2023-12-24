
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCartContext } from '../../context/CartContext';

export const CartWidget = () => {

  const {getTotalQuantity} = useCartContext()

  return (
    <div>
      {getTotalQuantity()}<AiOutlineShoppingCart style={{ fontSize: '2rem' }} />
    </div>
  );
}