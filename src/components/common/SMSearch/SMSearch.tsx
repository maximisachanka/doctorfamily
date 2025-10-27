import { Box, InputBase, Button, Paper } from "@mui/material";               
import SearchIcon from "@mui/icons-material/Search";

const SMSearch = () => {
    return (
        <Box display="flex" maxWidth="400px">
            <Box display="flex" position="relative" justifyContent="space-between" alignItems="center" pl="16px" pr="48px" height="48px" borderRadius="8px">
                <Box >
                    <InputBase type="text" placeholder="Поиск услуг и специалистов..." />
                </Box>
                <Box width="40px" height="40px" bgcolor="#18A36C" color="white">
                    <Button>
                        <SearchIcon />
                    </Button>
                </Box>
            </Box>
        </Box>
    )
};

export default SMSearch;