import React, { useState } from 'react';
import { Button, Box, Grid, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import products from '../data/products.json'; // Adjust the path if necessary

const ProductPage = () => {
  const [activeSection, setActiveSection] = useState('men');

  const getProducts = () => {
    switch (activeSection) {
      case 'women':
        return products.womensShoes;
      case 'kids':
        return products.kidsShoes;
      case 'men':
      default:
        return products.mensShoes;
    }
  };

  return (
    <div>
      <Box display="flex" justifyContent="center" mb={4} mt={2}>
        <Button
          variant={activeSection === 'men' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => setActiveSection('men')}
        >
          Men's Shoes
        </Button>
        <Button
          variant={activeSection === 'women' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => setActiveSection('women')}
          sx={{ mx: 2 }}
        >
          Women's Shoes
        </Button>
        <Button
          variant={activeSection === 'kids' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => setActiveSection('kids')}
        >
          Kids' Shoes
        </Button>
      </Box>
      <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
        {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}'s Shoes
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {getProducts().map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductPage;
