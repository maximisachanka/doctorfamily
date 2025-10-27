'use client'

import { Button, styled } from "@mui/material";

export const OnlineReqButton = styled(Button)(({ theme }) => ({
    background: '#18A36C', 
    height: '48px',
    '&:hover': {
        opacity: '90%',
    }
}));

