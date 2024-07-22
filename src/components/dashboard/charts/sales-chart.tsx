import React from "react";
import Echarts from "echarts-for-react";
import { EChartsOption, graphic } from "echarts";
interface chartProps {
    label: any[];
    data: any[];
}
const SalesDetails: React.FC<chartProps> = ({ label, data }) => {
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
                    formatter: "{value}%",

                },
            },
        ],
        series: [
            {
                name: "",
                type: "line",
                data: data,
                areaStyle: {
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: ' #4379EE'
                        },
                        {
                            offset: 1,
                            color: '#FFFFFF'
                        }
                    ])
                },
            },
        ],
    };
    return (
        <Echarts option={option} className="" style={{ height: "400px" }} />
    );
};

export default SalesDetails;