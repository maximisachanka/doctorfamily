import { Button, Typography } from "@mui/material";
import { OnlineReqButton } from "./SMOnlineReqButton.styles";


const SMOnlineRegButton = () => {
    return (
        <OnlineReqButton>
            <Typography fontSize="14px" fontWeight="500" color="#FFFFFF" padding="0px 32px" textTransform="none">
                Запись онлайн
            </Typography>
        </OnlineReqButton>
    )
};

export default SMOnlineRegButton;