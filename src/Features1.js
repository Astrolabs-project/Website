import Container from '@mui/material/Container';
import FeaturedPost from './FeaturedPost.js';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function Features1() {
    return (
        <Container>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Products
            </Typography>
           
            <Stack
              sx={{ pt: 5 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              
             </Stack>
            <Grid container spacing={2}>
                <FeaturedPost post={{title:"", description:"Red and Brown Air Jordan 1's: Cactus Jack Edition. Definetly a rare find with todays market. Asking price of $500. We have all sizes for men and women.", date:"",image:"https://images.unsplash.com/photo-1600686436197-074b5f921604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}}/>
                <FeaturedPost post={{title:"", description:"Black and White Jordan 13's. From the basketball court to the streets, these stylish shoes will bring comfort everywhere. Asking price of $150. We have all sizes for men and women.", date:"", image: "https://images.unsplash.com/photo-1533681018184-68bd1d883b97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"}}/>
                <FeaturedPost post={{title:"", description:"Red and Black Air Jordan 1's. The new crazy amongst the youth, these shoes have made a comeback into popularity. Asking price of $120. We have all sizes for men and women", date:"",image:"https://images.unsplash.com/photo-1510999391231-49f42bcbeec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}}/>
                <FeaturedPost post={{title:"", description:"Red Nike Roshes. Comfortable for regular wear and also light activity. Asking price of $70. We have all sizes for men and women", date:"", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}}/>
            </Grid>
        </Container>
    )
}

export default Features1;