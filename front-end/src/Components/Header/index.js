import React from "react"
import { Typography } from "@mui/material"

export default function LitaHeader({ searchValue }) {

    return (
        <Typography
            variant='h3'
            component='h1'
        >
            {!searchValue ? 'BUSQUEN PRECIO!!' : 'CAMINE SEÑORA, CAMINE'}
        </Typography>
    )
}