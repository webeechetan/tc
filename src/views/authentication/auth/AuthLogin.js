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

const TypographyPara =styled(Typography)(({ theme }) => ({
    color: theme.palette.text.dark,
    fontWeight: '500',
    textDecoration:'none'
  }));
import { Link } from 'react-router-dom';

const AuthLogin = ({ title, subtext }) => (
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
                < TypographyPara
                    component={Link}
                    to="/"
                    
                >
                    Forgot Password ?
                </ TypographyPara>
            </Stack>
        </Stack>
        <Box marginTop={1}>
            <Button
                color="secondary"
                variant="contained"
                size="large"
                fullWidth
                component={Link}
                to="/"
                type="submit"
                sx={{
                    '&:hover': {
                        backgroundColor: 'primary.main',
                    },
                }}
            >
                Sign In
            </Button>
        </Box>
        <Box marginTop={2}>
            <Button
                color="secondary"
                variant="outlined"
                size="large"
                fullWidth
                component={Link}
                to="/"
                type="submit"
                sx={{
                    '&:hover': {
                        border: '1px solid #5785D0',
                        color: 'primary.dark'
                    },
                }}
            >
                Sign in with Google
            </Button>
        </Box>
        <Box marginTop={2} textAlign='center'>
            <Typography sx={{ color: 'text.dark' }}>
                Don’t have an account? <Link to="/signup" sx={{ color: '#ff871f' }}>Sign up</Link>
            </Typography>
        </Box>
    </>
);

export default AuthLogin;
