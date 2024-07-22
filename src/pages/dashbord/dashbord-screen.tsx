import React from "react";
import { Button, Card, Dropdown, MenuProps, Space } from "antd";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import "../../styles/dashboard/dashboard-main.scss";
import user from "../../assets/dashboard/users.png";
import order from "../../assets/dashboard/orders.png";
import pending from "../../assets/dashboard/pending.png";
import sales from "../../assets/dashboard/sales.png";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import DealsTable from "../../components/dashboard/dealsDetails";
import SalesDetails from "../../components/dashboard/charts/sales-chart";
import RevenueChart from "../../components/dashboard/charts/revanue-chart";
import SalesAnalytics from "../../components/dashboard/charts/salesAnalytic-chart";
import CustomerChart from "../../components/dashboard/charts/customer-chat";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
interface DashCardProps {
  title: string;
  content: string;
  percentage: number;
  value: number | string;
  icon: string;
  color: string;
}

function Dashboard() {
  const cardsData = [
    {
      title: "Total User",
      content: "Up from yesterday",
      percentage: 8.5,
      value: 40689,
      icon: user,
      color: "#8280FF"
    },
    {
      title: "Total Order",
      content: "Up from past week",
      percentage: 1.3,
      value: 10293,
      icon: order,
      color: "#FEC53D"
    },
    {
      title: "Total Sales",
      content: "Down from yesterday",
      percentage: -4.3,
      value: "$89,000",
      icon: sales,
      color: "#4AD991"
    },
    {
      title: "Total Pending",
      content: "Up from yesterday",
      percentage: 1.8,
      value: 2040,
      icon: pending,
      color: "#FF9066"
    }
  ];
  const items: MenuProps['items'] = [
    {
      label: 'January',
      key: 'January',
    },
    {
      label: 'February',
      key: 'February',
    },
    {
      label: 'March',
      key: 'March',
    },
    {
      label: 'April',
      key: 'April',
    },
    {
      label: 'May',
      key: 'May',
    },
    {
      label: 'June',
      key: 'June',
    },
    {
      label: 'July',
      key: 'July',
    }, {
      label: 'August',
      key: 'August',
    }, {
      label: 'September',
      key: 'September',
    },
    {
      label: 'October',
      key: 'October',
    }




  ];
  const menuProps = {
    items,
    // onClick: handleMenuClick,
  };
  return (
    <div className="dashboard-main">
      <h1 className="dashboard-title">Dashboard</h1>
      <section className="rating-section">
        {cardsData.map((card, index) => (
          <DashCard key={index} {...card} />
        ))}
      </section>
      <section className="sales-section">
        <Card bordered={false} >
          <div className="sales-header">
            <div className="sales-title">Sales Details</div>
            <Dropdown menu={menuProps}>
              <Button>
                <Space>
                  October
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <SalesDetails
            data={[17.36, 55.72, 84.21, 38.47, 91.68, 26.91, 4.84, 10.09, 99.68, 45.42, 62.73, 80.61, 59.1, 16.16, 1.43, 90.76, 34.45, 27.91, 52.68, 72.35]}
            label={["5k", "10k", "15k", "20k", "25k", "30k", "35k", "40k", "45k", "50k"]
            } />
        </Card>
      </section>
      <section className="sales-section">
        <Card bordered={false} >
          <div className="sales-header">
            <div className="sales-title">Deals Details</div>
            <Dropdown menu={menuProps}>
              <Button>
                <Space>
                  October
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <DealsTable />
        </Card>
      </section>
      <section className="sales-section">
        <Card bordered={false} >
          <div className="sales-header">
            <div className="sales-title">Revenue</div>
            <Dropdown menu={menuProps}>
              <Button>
                <Space>
                  October
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <RevenueChart
            profit={[25, 55.72, 4.84, 10.09, 99.68, 45.42, 62.73, 84.21, 38.47, 91.68, 26.91, 80.61, 59.1, 16.16, 1.43, 90.76, 34.45, 27.91, 52.68, 72.35]}
            sales={[17.36, 45.42, 62.73, 80.61, 59.1, 16.16, 1.43, 90.76, 34.45, 27.91, 55.72, 84.21, 38.47, 91.68, 26.91, 4.84, 10.09, 99.68, 52.68, 72.35]}
            label={["5k", "10k", "15k", "20k", "25k", "30k", "35k", "40k", "45k", "50k"]
            } />
        </Card>
      </section>
      <div className="sales-flexbox">
        <section className="sales-section">
          <Card bordered={false} >
            <div className="sales-title">Customers</div>
            <CustomerChart
              profit={[25, 55.72, 4.84, 10.09, 99.68, 45.42, 62.73, 84.21, 38.47, 91.68, 26.91, 80.61, 59.1, 16.16, 1.43, 90.76, 34.45, 27.91, 52.68, 72.35]}
              sales={[17.36, 45.42, 62.73, 80.61, 59.1, 16.16, 1.43, 90.76, 34.45, 27.91, 55.72, 84.21, 38.47, 91.68, 26.91, 4.84, 10.09, 99.68, 52.68, 72.35]}
              label={["5k", "10k", "15k", "20k", "25k", "30k", "35k", "40k", "45k", "50k"]
              } />
          </Card>
        </section>
        <section className="sales-section">
          <Card bordered={false} >
            <div className="sales-title">Featured Product</div>
            <div className="featured-product-body">
              <button className="prev"
              // onClick={() => setIndex(index - 1)}
              >
                <FiChevronLeft />
              </button>
              <button className="next"
              //  onClick={() => setIndex(index + 1)}
              >
                <FiChevronRight />
              </button>
            </div>
            <div className="featured-product-footer">
              <p>Beats Headphone 2019</p>
              <p className="fu-pro-amount">$89.00</p>
            </div>
          </Card>
        </section>
        <section className="sales-section">
          <Card bordered={false} >
            <div className="sales-title">Sales Analytics
            </div>
            <SalesAnalytics
              profit={[10, 22, 14, 28, 60, 30, 34, 37, 42, 40, 70]}
              sales={[0, 20, 12, 25, 52, 28, 32, 35, 40, 38, 65]}
              label={[2015, 2016, 2017, 2018, 2019, 2020,]
              } />
          </Card>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;




const DashCard: React.FC<DashCardProps> = ({
  title,
  content,
  percentage,
  value,
  icon,
  color,
}) => {
  return (
    <section className="dashboard-card">
      <div className="card-details" >
        <div className="dash-card-header">
          <h4 className="">{title}</h4>
          <p>{value.toLocaleString("hi-IN")}</p>
        </div>
        <div className="icon-wrapper" style={{ backgroundColor: `${color}4D` }}>
          <img src={icon} alt={title} />
        </div>
      </div>
      <div className={`dash-card-rating`}>
        {percentage >= 0 ? <FaArrowTrendUp color="#00B69B" /> : <FaArrowTrendDown color="#F93C65" />}
        <span style={{ color: percentage >= 0 ? "#00B69B" : "#F93C65" }}>
          {" " + Math.abs(percentage)}%
        </span>
        < span>{" " + content}</span>
      </div>
    </section>
  );
};
