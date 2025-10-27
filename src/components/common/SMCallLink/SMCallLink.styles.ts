'use client'

import { styled, Link } from "@mui/material";

export const CallLink = styled(Link)(({ theme }) => ({
    fontSize: '14px',
    color: '#6B7280',
    textDecoration: 'none',
    '&:hover': {
        color: '#18A36C'
    }
}));