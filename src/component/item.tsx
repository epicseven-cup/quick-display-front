import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardActions, CardHeader, CardMedia, Chip, Container, styled, Typography} from "@mui/material";
import {Tag} from '../types/tag'
import React, {useRef} from 'react';


export default function Item(props: any) {



    const [open, setOpen] = React.useState(false);


    const StyledCard = !open ? styled(Card)(({theme}) => ({
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: 'scale3d(1.5, 1.5, 1)' },
    })) : Card

    const size = Math.random() * (30 - 5) + 5

    function UpdateOpen(){
        setOpen(!open)
    }

    return(
        <StyledCard variant="outlined" sx={open ?{
            height: `${size}vh`,
            width: `${size}vw`,
        }: {}} onClick={UpdateOpen}>
            <CardHeader/>
            <CardMedia component="img" image={props.src} alt={props.name} />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{props.description}</Typography>
            </CardContent>
            <CardActions>
                {/*Tags*/}
                <Container>
                {
                    props.tags.map((tag: Tag) => {
                        <Chip label={tag.label}></Chip>
                    })
                }
                </Container>
            </CardActions>
            {/*TODO: Add a bookmark feature here*/}
        </StyledCard>)
}