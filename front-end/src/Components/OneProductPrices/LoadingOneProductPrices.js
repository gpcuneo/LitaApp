// IMPORTS REACT
import React from 'react';

// IMPORTS MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

import './winnercard.css';

export default function LoadingOneProductPrices() {
    const fourLoadingBoxes = ['1', '2', '3', '4']
    return (
        fourLoadingBoxes.map((item) => (
            <Grid key={item} item xs={12} sm={6}>

                <Card variant='outlined'>
                    <Skeleton variant="rectangular" height='100px' />

                    <CardActions sx={{ justifyContent: "center" }}>
                        <Skeleton width={80} />
                    </CardActions>

                </Card>
            </Grid>
        )
        )
    );
}