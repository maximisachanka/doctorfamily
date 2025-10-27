import { Mail, MapPin, Phone, User} from 'lucide-react'
import { Box, Button, Divider, Link, Typography} from '@mui/material';
import SMLogo from '@/icons/SMLogo';
import SMSearch from '../common/SMSearch/SMSearch';
import SMOnlineRegButton from '../common/SMOnlineRegButton/SMOnlineRegButton';
import SMCallLink from '../common/SMCallLink/SMCallLink';

const Header = () => {
    return (
        <Box bgcolor="#FFFFFF" boxShadow="0 5px 15px 3px rgba(0, 0, 0, 0.1)">
            <Box display="block" bgcolor = "#18A36C" py="12px">
                <Box display="flex" justifyContent="space-between" alignItems="center" maxWidth="1280px" mx="auto" padding="0px 16px">
                    <Box display="flex" alignItems="center" gap="8px">
                        <MapPin size="16px" color="#FFFFFF"  />
                        <Typography fontSize="14px" color="#FFFFFF" fontWeight="400">г. Минск, пр. Победителей, д. 119, пом. 504</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap="8px">
                        <Mail size="16px" color="#FFFFFF"/>
                        <Typography fontSize="14px" color="#FFFFFF" fontWeight="400">smartmedical.by@gmail.com</Typography>
                    </Box>
                </Box>
            </Box>
            <Box py="24px">
                <Box display="flex" justifyContent="space-between" alignItems="center" maxWidth="1280px" mx="auto" padding="0px 16px">
                    <Link href="/"><SMLogo /></Link>
                    <Box>
                        <SMSearch />
                    </Box>
                    <Box display="flex" alignItems="center" gap="24px">
                        <Box textAlign="right">
                            <Box display="flex" justifyContent="space-between" alignItems="center" gap="8px">
                                <Phone color="#18A36C" size="20px" />
                                <Typography fontSize="18px" fontWeight="300">+375 29 161-01-01</Typography>
                            </Box>
                            <SMCallLink />
                        </Box>
                        <Box>
                            <SMOnlineRegButton />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Divider />
            <Box display="flex" justifyContent="space-between" alignItems="center" maxWidth="1280px" mx="auto" padding="0px 16px">
                <Box display="flex">
                    <Link href="/" fontSize="16px" fontWeight="400" color="#2E2E2E" padding="16px" style={{ textDecoration: 'none'}}>Услуги</Link>
                    <Link href="/" fontSize="16px" fontWeight="400" color="#2E2E2E" padding="16px" style={{ textDecoration: 'none'}}>Клиника</Link>
                    <Link href="/" fontSize="16px" fontWeight="400" color="#2E2E2E" padding="16px" style={{ textDecoration: 'none'}}>Специалисты</Link>
                    <Link href="/" fontSize="16px" fontWeight="400" color="#2E2E2E" padding="16px" style={{ textDecoration: 'none'}}>Контакты</Link>
                    <Link href="/" fontSize="16px" fontWeight="400" color="#2E2E2E" padding="16px" style={{ textDecoration: 'none'}}>Пациенту</Link>
                </Box>
                <Button>
                    <Box display="flex" alignItems="center" justifyContent="center" px="10px" py="8px" gap="8px">
                        <User size="16px" color="#18A36C" />
                        <Typography fontSize="14px" fontWeight="600" color="#18A36C" textTransform="none">Мой кабинет</Typography>
                    </Box>
                </Button>
            </Box>
        </Box>
    )
};

export default Header;