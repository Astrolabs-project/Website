import Container from '@mui/material/Container';
import FeaturedPost from './FeaturedPost.js';
import Grid from '@mui/material/Grid';

function Features() {
    return (
        <Container>
            <Grid container spacing={2}>
                <FeaturedPost post={{title:"", description:"Our company may not be as big as other resellers like Foot Locker, Finish Line and others, but what we lack in power we make up with quality shoes and excellent customer service. You will always feel welcome here and want to shop more.", date:"",image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}}/>
                <FeaturedPost post={{title:"", description:"New shipments come in regularly and even faster with shoes that are selling quick, not to worry, we get our supplies in large quantities so do not worry about us selling out!.", date:"", image: "https://images.unsplash.com/photo-1592085198739-ffcad7f36b54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"}}/>
                
            </Grid>
        </Container>
    )
}

export default Features;