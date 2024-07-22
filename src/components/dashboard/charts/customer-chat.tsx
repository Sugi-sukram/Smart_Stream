import React from "react";
import Echarts from "echarts-for-react";
import { EChartsOption, graphic } from "echarts";
interface chartProps {
    label: any[];
    profit: any[];
    sales: any[];
}

const CustomerChart: React.FC<chartProps> = ({ label, profit, sales }) => {
    const option: EChartsOption = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
        },
        legend: {
            data: [{
                name: 'New Customers',
                icon: 'circle'
            },
            {
                name: 'Repeated',
                icon: 'circle',
            }
            ],
            left: 'center',
            bottom: 5, 
            itemGap:100,
        },
        series: [
            {
                name: 'New Customers',
                type: 'pie',
                selectedMode: 'single',
                color: '#4880FF',
                avoidLabelOverlap: true,
                radius: [0, '0%'],
            },
            {
                name: 'Repeated',
                type: 'pie',
                radius: ['50%', '60%'],
                color: "#C0D2F0",
                selectedMode: 'single',
                avoidLabelOverlap: true,
                itemStyle: {
                    borderRadius: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                labelLine: {
                    show: false
                },
                data: [
                    {
                        name: 'New Customers',
                        value: 5, itemStyle: {
                            color: "#4880FF",
                        }
                    },
                    {
                        value: 42, itemStyle: {
                            color: "#C0D2F0",
                        }
                    },
                    {
                        name: 'New Customers',
                        value: 5, itemStyle: {
                            color: "#4880FF",
                        }
                    },
                    {
                        value: 42, itemStyle: {
                            color: "#C0D2F0",
                        }
                    },
                    {
                        name: 'New Customers',
                        value: 5, itemStyle: {
                            color: "#4880FF",
                        }
                    },
                    {
                        value: 42, itemStyle: {
                            color: "#C0D2F0",
                        }
                    },
                    {
                        name: 'New Customers',
                        value: 5, itemStyle: {
                            color: "#4880FF",
                        }
                    },
                    {
                        value: 42, itemStyle: {
                            color: "#C0D2F0",
                        }
                    },
                ]
            }
        ],
    };
    return (
        <div className="custumerhart-chart-container">
            <h3 className="new-custumer">34,249</h3>
            <h3 className="repeated">1420</h3>
            <Echarts option={option} className="" style={{ height: "400px" }} />
        </div>
    );
};

export default CustomerChart;