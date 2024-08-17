// pages/products.js
import React, { useState } from 'react';
import { Button, Box, Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard'; 
import { mensShoes, womensShoes, kidsShoes } from '../data/products'; 

const ProductPage = () => {
  const [activeSection, setActiveSection] = useState('men');

  const getProducts = () => {
    switch (activeSection) {
      case 'women':
        return womensShoes;
      case 'kids':
        return kidsShoes;
      case 'men':
      default:
        return mensShoes;
    }
  };

  return (
    <div>
      <Box display="flex" justifyContent="center" mb={4}>
        <Button 
          variant={activeSection === 'men' ? 'contained' : 'outlined'}
          color="primary" 
          onClick={() => setActiveSection('men')}
          sx={{ mt: 2, mx: 1 }}
        >
          Men's Shoes
        </Button>
        <Button
          variant={activeSection === 'women' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => setActiveSection('women')}
          sx={{ mt: 2, mx: 1 }}
        >
          Women's Shoes
        </Button>
        <Button
          variant={activeSection === 'kids' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => setActiveSection('kids')}
          sx={{ mt: 2, mx: 1 }}
        >
          Kids' Shoes
        </Button>
      </Box>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
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
