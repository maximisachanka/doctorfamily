import { Box, Typography } from '@mui/material';

const Header = () => {
    return (
        <Box display="block" bgcolor = "#18A36C" py="12px">
            <Box display="flex" justifyContent="space-between" maxWidth="1200px" mx="auto" padding="0px 16px">
                <Box display="flex" alignItems="center">
                    <Typography fontSize="14px" color="#FFFFFF">г. Минск, пр. Победителей, д. 119, пом. 504</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <Typography fontSize="14px" color="#FFFFFF">smartmedical.by@gmail.com</Typography>
                </Box>
            </Box>
        </Box>
    )
};

export default Header;