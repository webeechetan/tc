import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import {Typography } from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';

const WinRate = () => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;

    const yAxisLabelColors = [theme.palette.text.primary, theme.palette.text.secondary];

    const optionsWinRate = {
        chart: {
            type: 'bar',
            fontFamily: "'Plus Jakarta Sans', sans-serif;",
            foreColor: '#adb0bb',
            toolbar: {
                show: false,
            },
            offsetX: -20,
            height: 50,
        },
        colors: [primary, secondary], 
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '40%',
                columnWidth: '100%',
                borderRadius: [6],
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all',
                dataLabels: {
                    position: 'center',
                },
            },
        },
        stroke: {
            show: true,
            width: 15,
            lineCap: "butt",
            colors: ["transparent"],
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: 'rgba(0,0,0,0.1)',
            strokeDashArray: 10,
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        yaxis: {
            tickAmount: 4,
            show: true,
            labels: {
                style: {
                    fontSize: '14px', 
                    colors: yAxisLabelColors, 
                },
            },
        },
        xaxis: {
            categories: ['Incorrect Freight', 'Incorrect Code', 'Incorrect Agreement', 'Duplicate Agreement'],
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: theme.palette.text.primary, 
                },
            },
        },
        tooltip: {
            theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
            fillSeriesColor: false,
        },
    };

    const seriesWinRate = [
        {
            name: 'Win Rate',
            data: [20, 40, 30, 50],
        },
    ];

    return (
        <DashboardCard title={
            <Typography variant='h4' sx={{ color: theme.palette.text.dark }}>
                Win Rate
            </Typography>}>
            <Chart
                options={optionsWinRate}
                series={seriesWinRate}
                type="bar"
                height="230px"
                width="100%"
            />
        </DashboardCard>
    );
};

export default WinRate;
