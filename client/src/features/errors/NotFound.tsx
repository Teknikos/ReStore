import { Box, Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound()
{
    return (
        <Container component={Paper} sx={{ height: 450 }}>
            <Typography gutterBottom variant='h3' align='center'>Oops!</Typography>
            <Typography gutterBottom variant='h3' align='center'>What you are looking for isn't here.</Typography>
            <Divider></Divider>
            <Box justifyContent='center' display='flex'>
                <Box sx={{ height: 200, width: 335, opacity: '80%', backgroundImage: 'url(https://bashooka.com/wp-content/uploads/2013/08/error-404-page-designs-bshk-40.jpg)' }} >
                </Box>
            </Box>
            <Button fullWidth component={Link} to='/catalog'>Go back to shop</Button>
        </Container>
    )
}