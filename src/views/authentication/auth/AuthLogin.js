import React from 'react';
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Button,
    Stack,
    Checkbox,
    TextField,
    styled
} from '@mui/material';
import { Link } from 'react-router-dom';
import Google from "src/assets/images/logos/google.png"; 
import { useTheme } from '@emotion/react';
import { width } from '@mui/system';

const TypographyPara = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.dark,
    fontWeight: '500',
    textDecoration: 'none'
}));

const AuthLogin = ({ title, subtext }) => {
    const theme = useTheme();
    return (
        <>
            {title && (
                <Typography fontWeight="700" variant="h2" mb={1}>
                    {title}
                </Typography>
            )}
            {subtext}

            <Stack spacing={2}>
                <Box paddingBottom={2}>
                    <TextField
                        id="email"
                        variant="outlined"
                        placeholder="Enter your email here"
                        fullWidth 
                    />
                </Box>
                <Box>
                    <TextField
                        id="password"
                        type="password"
                        variant="outlined"
                        placeholder="Enter your password here"
                        fullWidth
                    />
                </Box>
                <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox defaultChecked color="primary" />}
                            label="Remember this Device"
                        />
                    </FormGroup>
                    <TypographyPara
                        component={Link}
                        to="/forgot-password"
                    >
                        Forgot Password?
                    </TypographyPara>
                </Stack>
            </Stack>
            <Box marginTop={1}>
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    component={Link}
                    to="/"
                    type="submit"
                    sx={{
                        '&:hover': {
                            backgroundColor: theme.palette.primary.main,
                        },
                    }}
                >
                    Sign In
                </Button>
            </Box>
            <Box marginTop={2}>
                <Button
                    color="primary"
                    variant="outlined"
                    size="large"
                    fullWidth
                    component={Link}
                    to="/"
                    type="submit"
                    sx={{
                        '&:hover': {
                            border: '1px solid #5785D0',
                            color: theme.palette.primary.dark
                        },
                    }}
                >
                   <img src={Google} alt="google" style={{width:'30px', paddingRight:'10px'}} />   Sign in with Google
                </Button>
            </Box>
            <Box marginTop={2} textAlign='center'>
                <Typography sx={{ color: theme.palette.text.dark }}>
                    Don’t have an account? <Link to="/signup" sx={{ color: theme.palette.accent.main }}>Sign up</Link>
                </Typography>
            </Box>
        </>
    );
};

export default AuthLogin;
