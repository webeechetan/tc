import React from 'react';
import { Card, CardContent, Typography, Stack, Box,styled } from '@mui/material';

const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
}) => {
  const TitleStyled = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.dark,
  }));
  return (
    <Card
      sx={{ padding: 0, width: '100%', minHeight:'100%'}}
      elevation={9}
      variant={undefined}
    >
      {cardheading ? (
        <CardContent sx={{width: '100%', minHeight:'100%'}}>
          <TitleStyled variant="h5">{headtitle}</TitleStyled>
          <Typography variant="subtitle2" color="textSecondary">
            {headsubtitle}
          </Typography>
        </CardContent>
      ) : (
        <CardContent sx={{ p: "30px" }}>
          {title ? (
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems={'center'}
              mb={2}
            >
              <Box>
                {title ? <Typography variant="h5">{title}</Typography> : ''}

                {subtitle ? (
                  <Typography variant="subtitle2" color="textSecondary">
                    {subtitle}
                  </Typography>
                ) : (
                  ''
                )}
              </Box>
              {action}
            </Stack>
          ) : null}

          {children}
        </CardContent>
      )}

      {middlecontent}
      {footer}
    </Card>
  );
};

export default DashboardCard;
