import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import "./Dashboard.css";
import { FaSeedling, FaTruck, FaTools, FaUsers } from "react-icons/fa";

export function Dashboard() {
    const crops = useSelector((state: RootState) => state.crop.length);
    const vehicles = useSelector((state: RootState) => state.vehicle.length);
    const equipments = useSelector((state: RootState) => state.equipment.length);
    const staff = useSelector((state: RootState) => state.staff.length);

    const data = [
        { name: "Crops", value: crops, color: "#1abc9c", icon: <FaSeedling /> },
        { name: "Vehicles", value: vehicles, color: "#3498db", icon: <FaTruck /> },
        { name: "Equipments", value: equipments, color: "#9b59b6", icon: <FaTools /> },
        { name: "Staff", value: staff, color: "#e74c3c", icon: <FaUsers /> },
    ];

    const cardData = [
        { 
            title: "Total Crops", 
            value: crops, 
            description: "Healthy crops available", 
            icon: <FaSeedling />,
            color: "#1abc9c"
        },
        { 
            title: "Total Vehicles", 
            value: vehicles, 
            description: "Active vehicles available", 
            icon: <FaTruck />,
            color: "#3498db"
        },
        { 
            title: "Total Equipments", 
            value: equipments, 
            description: "Strong equipments available", 
            icon: <FaTools />,
            color: "#9b59b6"
        },
        { 
            title: "Total Staff", 
            value: staff, 
            description: "Active staff in this system", 
            icon: <FaUsers />,
            color: "#e74c3c"
        },
    ];

    return (
        <div className="container-fluid py-4" style={{ minHeight: "100vh", overflowY: "auto" }}>
            {/* IMPROVED Welcome Header - Centered & More Welcoming */}
            <div className="row mb-5">
                <div className="col-12 text-center">
                    <h1 className="mb-3 display-4 font-weight-bold" style={{ 
                        background: "linear-gradient(135deg, #1abc9c, #3498db)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        fontFamily: "'Poppins', 'Roboto', sans-serif",
                        fontWeight: 800,
                        letterSpacing: "-0.5px"
                    }}>
                        Welcome to AgriSync
                    </h1>
                    <p className="lead mb-4" style={{ 
                        fontSize: "1.4rem", 
                        maxWidth: "800px", 
                        margin: "0 auto",
                        background: "linear-gradient(135deg, #1abc9c, #3498db)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 600,
                        padding: "0 10px"
                    }}>
                        Your complete agricultural management solution for modern farming
                    </p>
                    <div className="welcome-subtitle" style={{
                        maxWidth: "700px",
                        margin: "0 auto 30px",
                        padding: "20px",
                        borderRadius: "15px",
                        borderLeft: "4px solid #1abc9c",
                        background: "linear-gradient(135deg, rgba(26, 188, 156, 0.08), rgba(52, 152, 219, 0.08))",
                        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)"
                    }}>
                        <p className="mb-0" style={{ 
                            fontSize: "1.1rem", 
                            background: "linear-gradient(135deg, #16a085, #2980b9)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            lineHeight: "1.6",
                            fontWeight: 500
                        }}>
                            Real-time insights to monitor crops, equipment, staff, and vehicles. 
                            Make data-driven decisions for optimal farm management and sustainable operations.
                        </p>
                    </div>
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="row mb-5" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                {cardData.map((card, index) => (
                    <div key={index} className="col-xl-3 col-lg-6 col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-header p-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p className="text-sm mb-1 text-uppercase" style={{ letterSpacing: "1px" }}>
                                            {card.title}
                                        </p>
                                        <h4 className="mb-0" style={{ fontSize: "2rem", fontWeight: "700" }}>
                                            {card.value}
                                        </h4>
                                    </div>
                                    <div className="icon" style={{ color: card.color }}>
                                        {card.icon}
                                    </div>
                                </div>
                            </div>
                            <hr className="hr my-0" />
                            <div className="card-footer p-3">
                                <p className="mb-0">
                                    <span className="text-success font-weight-bolder">✓ </span>
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Chart Section */}
            <div className="row mt-5" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                <div className="col-12">
                    <div className="card" style={{ background: "linear-gradient(145deg, #34495e, #2c3e50)" }}>
                        <div className="card-header p-4">
                            <h4 className="mb-0">Resource Distribution Overview</h4>
                            <p className="mb-0 text-sm">Visual representation of all resources in the system</p>
                        </div>
                        <div className="card-body p-4">
                            <div style={{ width: '100%', height: 400 }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={data}
                                        margin={{
                                            top: 20, right: 30, left: 20, bottom: 20,
                                        }}
                                    >
                                        <CartesianGrid 
                                            strokeDasharray="3 3" 
                                            stroke="rgba(255, 255, 255, 0.1)" 
                                            vertical={false}
                                        />
                                        <XAxis 
                                            dataKey="name" 
                                            axisLine={{ stroke: "rgba(255, 255, 255, 0.3)" }}
                                            tickLine={{ stroke: "rgba(255, 255, 255, 0.3)" }}
                                            tick={{ fill: "#ecf0f1", fontSize: 14 }}
                                        />
                                        <YAxis 
                                            domain={[0, 'dataMax + 5']}
                                            axisLine={{ stroke: "rgba(255, 255, 255, 0.3)" }}
                                            tickLine={{ stroke: "rgba(255, 255, 255, 0.3)" }}
                                            tick={{ fill: "#ecf0f1", fontSize: 14 }}
                                        />
                                        <Tooltip 
                                            contentStyle={{ 
                                                backgroundColor: '#2c3e50', 
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                borderRadius: '8px',
                                                color: '#ecf0f1'
                                            }}
                                            labelStyle={{ color: '#1abc9c', fontWeight: 'bold' }}
                                        />
                                        <Legend 
                                            wrapperStyle={{ color: '#ecf0f1', paddingTop: '20px' }}
                                        />
                                        <Bar 
                                            dataKey="value" 
                                            name="Resource Count"
                                            radius={[8, 8, 0, 0]}
                                        >
                                            {data.map((entry, index) => (
                                                <Cell 
                                                    key={`cell-${index}`} 
                                                    fill={entry.color}
                                                    strokeWidth={2}
                                                />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="card-footer p-3">
                            <div className="row">
                                {data.map((item, index) => (
                                    <div key={index} className="col-3 text-center">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div 
                                                style={{ 
                                                    width: '12px', 
                                                    height: '12px', 
                                                    backgroundColor: item.color, 
                                                    borderRadius: '2px',
                                                    marginRight: '8px'
                                                }} 
                                            />
                                            <span style={{ color: '#bdc3c7', fontSize: '0.9rem' }}>
                                                {item.name}: <strong style={{ color: '#ecf0f1' }}>{item.value}</strong>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="row mt-5 desc">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="cardDesc">
                        <h1 style={{ 
                            background: "linear-gradient(135deg, #ecf0f1, #bdc3c7)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            marginBottom: "20px"
                        }}>
                            System Performance
                        </h1>
                        <p>
                            This dashboard provides real-time insights into your agricultural resources. 
                            Monitor crop health, vehicle availability, equipment status, and staff activity 
                            all in one place. Stay informed and make data-driven decisions for optimal farm management.
                        </p>
                        <button 
                            onClick={() => window.location.href = '#analytics'}
                            style={{ 
                                background: "linear-gradient(135deg, #1abc9c, #3498db)",
                                border: "none",
                                borderRadius: "10px",
                                padding: "12px 28px",
                                color: "white",
                                fontWeight: "600",
                                cursor: "pointer",
                                transition: "all 0.3s ease"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.boxShadow = "0 10px 25px rgba(26, 188, 156, 0.4)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 6px 20px rgba(26, 188, 156, 0.3)";
                            }}
                        >
                            View Detailed Analytics
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}