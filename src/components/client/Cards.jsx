import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useShoppingCart } from 'use-shopping-cart';


const Cards = ({article}) => {

  const {addItem} = useShoppingCart()
  const addToCart = (product) => {
    const target = {
    id : product.id,
    title : product.designation,
    image : product.imageart,
    price : product.prix,
    qtestock : product.qtestock,
    quantity : 1
    };
    addItem(target);
    console.log('Item added to cart:', target);
    };


  
return (
<div >
<Card sx={{ maxWidth: 'auto',margin: 1 }}>
<CardMedia sx={{ height: 160 }} image={article.imageart} title={article.reference} />
<CardContent>
<Typography gutterBottom variant="h5" component="div">
  Prix : {article.prix}
</Typography>
<Typography variant="body2" sx={{ color: 'text.secondary' }}>
    {article.designation.substr(0,20)}
</Typography>
</CardContent>
<CardActions>
<Button variant="contained" color="secondary" size="large" onClick={()=>addToCart(article)}><i class="fa-solid fa-cart-shopping"></i>&nbsp;Add to Cart</Button>
</CardActions>
</Card>
</div>



)
}
export default Cards