import React, { useState } from 'react';
import { Button, Box, Grid, Typography } from '@mui/material';
import ProductCard from './ProductCard'; 

const ProductPage = () => {
  const [activeSection, setActiveSection] = useState('men');

  const mensShoes = [
    { id: 1, name: 'Mens Shoe 1', basePrice: 59.99, thumbnailImage: '/images/man1.jpeg' },
    { id: 2, name: 'Mens Shoe 2', basePrice: 69.99, thumbnailImage: '/images/man2.jpeg' },
    { id: 3, name: 'Mens Shoe 3', basePrice: 79.99, thumbnailImage: '/images/man3.jpeg' },
    { id: 4, name: 'Mens Shoe 4', basePrice: 89.99, thumbnailImage: '/images/man4.jpeg' },
    { id: 5, name: 'Mens Shoe 5', basePrice: 89.99, thumbnailImage: '/images/man5.jpeg' },
  ];

  const womensShoes = [
    { id: 6, name: 'Womens Shoe 1', basePrice: 49.99, thumbnailImage: '/images/woman1.jpg' },
    { id: 7, name: 'Womens Shoe 2', basePrice: 59.99, thumbnailImage: '/images/woman2.jpg' },
    { id: 8, name: 'Womens Shoe 3', basePrice: 69.99, thumbnailImage: '/images/woman3.jpeg' },
    { id: 9, name: 'Womens Shoe 4', basePrice: 69.99, thumbnailImage: '/images/woman4.jpeg' },
  ];

  const kidsShoes = [
    { id: 10, name: 'Kids Shoe 1', basePrice: 39.99, thumbnailImage: '/images/kids1.jpeg' },
    { id: 11, name: 'Kids Shoe 2', basePrice: 29.99, thumbnailImage: '/images/kids2.jpeg' },
    { id: 12, name: 'Kids Shoe 3', basePrice: 34.99, thumbnailImage: '/images/kids3.jpeg' },
  ];

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
      <Box display="flex" justifyContent="center" mb={4} sx={{ mt: 2 }}>
        <Button 
          variant={activeSection === 'men' ? 'contained' : 'outlined'}
          color="primary" 
          onClick={() => setActiveSection('men')}
          sx={{ mt: 2, marginRight: 1 }}
        >
          Men&rsquo;s Shoes
        </Button>
        <Button
          variant={activeSection === 'women' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => setActiveSection('women')}
          sx={{ mt: 2, mx: 2 }}
        >
          Women&rsquo;s Shoes
        </Button>
        <Button
          variant={activeSection === 'kids' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => setActiveSection('kids')}
          sx={{ mt: 2, marginLeft: 1 }}
        >
          Kids&rsquo; Shoes
        </Button>
      </Box>
      <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
        {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}&rsquo;s Shoes
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
