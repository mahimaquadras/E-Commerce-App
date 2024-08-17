import React from 'react';
import { Typography, Grid, Button, Box, IconButton } from '@mui/material';
import { useCart } from '../context/CartContext';
import { RemoveCircleOutline, AddCircleOutline, DeleteForever } from '@mui/icons-material';

const CartPage = () => {
  const { getCartItems, addToCart, removeFromCart } = useCart();
  const cartItems = getCartItems();

  // Function to handle quantity changes
  const handleQuantityChange = (item, amount) => {
    if (item.quantity + amount <= 0) {
      removeFromCart(item.id);
    } else {
      addToCart({ ...item, quantity: item.quantity + amount });
    }
  };

  const calculateSubtotal = () =>
    cartItems.reduce((total, item) => total + item.basePrice * item.quantity, 0);

    const handleCheckout = () => {
        // Show a simple alert
        alert('Thank you for placing your order!');
      };
      

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <>
          <Grid container spacing={2}>
            {cartItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={2} p={2} border={1} borderColor="grey.300" borderRadius={1}>
                  <img
                    src={item.thumbnailImage || '/images/placeholder.jpg'}
                    alt={item.name}
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <Box ml={2} flexGrow={1}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${item.basePrice.toFixed(2)}
                    </Typography>
                    <Box display="flex" alignItems="center" mt={1}>
                      <IconButton onClick={() => handleQuantityChange(item, -1)} color="primary">
                        <RemoveCircleOutline />
                      </IconButton>
                      <Typography variant="body1" mx={1}>{item.quantity}</Typography>
                      <IconButton onClick={() => handleQuantityChange(item, 1)} color="primary">
                        <AddCircleOutline />
                      </IconButton>
                    </Box>
                  </Box>
                  <IconButton onClick={() => removeFromCart(item.id)} color="error">
                    <DeleteForever />
                  </IconButton>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Subtotal:</Typography>
            <Typography variant="h6">${calculateSubtotal().toFixed(2)}</Typography>
          </Box>
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleCheckout}>
            Checkout
          </Button>
        </>
      )}
    </Box>
  );
};

export default CartPage;
