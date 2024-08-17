import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    // Optionally, you can provide some visual feedback here
    console.log(`${product.name} added to cart`);
  };

  return (
    <Card sx={{ maxWidth: 345, mx: 'auto' }}>
      <CardMedia
        component="img"
        height="180"
        image={product.thumbnailImage || '/images/placeholder.jpg'}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.basePrice ? product.basePrice.toFixed(2) : 'N/A'}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleAddToCart} sx={{ mt: 2 }}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
