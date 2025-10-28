import { Box, InputBase, Button } from "@mui/material";               
import SearchIcon from "@mui/icons-material/Search";

const SMSearchInput = () => {
    return (
			<Box display="flex" position="relative" alignItems="center" bgcolor="grey.50" pl="16px" pr="48px" height="48px" minWidth="390px" maxWidth="450px" width="100%" flexShrink={1} margin="0 auto" borderRadius="8px">
                <InputBase 
                    type="text" 
                    placeholder="Поиск услуг и специалистов..." 
                    style={{ width: '100%' }}
                    inputProps={{ style: { fontSize: '14px', lineHeight: '24px' } }}
                />
                <Button size="small" style={{ padding: '0px', position: 'absolute', right: '5px', top: '50%', transform: 'translateY(-50%)', minWidth: '40px', minHeight: '40px', backgroundColor: '#18A36C', color: 'white' }}>
                        <SearchIcon style={{ width: "20px", height: "20px" }} />
                </Button>
            </Box>
    );
};

export default SMSearchInput;