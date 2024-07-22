import React from "react";
import Echarts from "echarts-for-react";
import { EChartsOption, graphic } from "echarts";
interface chartProps {
    label: any[];
    profit: any[];
    sales: any[];
}

const RevenueChart: React.FC<chartProps> = ({ label, profit, sales }) => {
    const option: EChartsOption = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
        },
        legend: {
            data: [{
                name: 'Profit',
                icon: 'circle'
            },
            {
                name: 'Sales',
                icon: 'circle',
            } 
        ],
            left: 'center',
            bottom: 10
        },
        xAxis: [
            {
                type: "category",
                data: label,
                axisTick: {
                    alignWithLabel: true,
                },
                axisLabel: {
                    formatter: (e: string) => {
                        return `${e}`;
                    },
                },
            },
        ],
        yAxis: [
            {
                type: "value",
                position: "left",
                axisLabel: {
                    formatter: "{value}",

                },
            },
        ],
        series: [

            {
                name: 'Profit',
                type: 'line',
                color: '#FF8F6DCC', 
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#FF8F6DCC'
                        },
                        {
                            offset: 1,
                            color: '#FF8F6DCC'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: profit
            },
            {
                name: 'Sales',
                type: 'line',
                // stack: 'Total',
                color:"#DBA5FF",
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#DBA5FF'
                        },
                        {
                            offset: 1,
                            color: '#DBA5FF'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: sales
            },
        ],
    };
    return (
        <Echarts option={option} className="" style={{ height: "400px" }} />
    );
};

export default RevenueChart;