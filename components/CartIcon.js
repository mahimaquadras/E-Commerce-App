import React from 'react';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/router';

const CartIcon = () => {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();
  const router = useRouter();

  const handleClick = () => {
    router.push('/cart');
  };

  return (
    <IconButton color="inherit" onClick={handleClick}>
      <Badge badgeContent={itemCount} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartIcon;
