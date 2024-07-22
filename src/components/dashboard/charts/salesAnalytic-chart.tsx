import React from "react";
import Echarts from "echarts-for-react";
import { EChartsOption, graphic } from "echarts";
interface chartProps {
    label: any[];
    profit: any[];
    sales: any[];
}

const SalesAnalytics: React.FC<chartProps> = ({ label, profit, sales }) => {
    const option: EChartsOption = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
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
                color: '#00B69B', 
                smooth: true,
                lineStyle: {
                    width:3,
                },
                
                emphasis: {
                    focus: 'series'
                },
                data: profit
            },
            {
                name: 'Sales',
                type: 'line',
                color:"#4880FF",
                smooth: true,
                lineStyle: {
                    width:3,
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

export default SalesAnalytics;