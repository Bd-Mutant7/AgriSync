import { FaExclamationTriangle, FaRedo, FaHome } from "react-icons/fa";

export function Error() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
            color: "#ecf0f1",
            padding: "40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Background pattern */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                    radial-gradient(circle at 20% 80%, rgba(231, 76, 60, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(52, 152, 219, 0.1) 0%, transparent 50%)
                `,
                zIndex: 0
            }}></div>
            
            <div style={{
                position: "relative",
                zIndex: 1,
                maxWidth: "600px"
            }}>
                {/* Error Icon */}
                <div style={{
                    fontSize: "80px",
                    color: "#e74c3c",
                    marginBottom: "30px",
                    animation: "pulse 2s infinite"
                }}>
                    <FaExclamationTriangle />
                </div>
                
                {/* Error Title */}
                <h1 style={{
                    fontSize: "3.5rem",
                    fontWeight: "800",
                    marginBottom: "20px",
                    background: "linear-gradient(135deg, #e74c3c, #c0392b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                }}>
                    Something Went Wrong
                </h1>
                
                {/* Error Message */}
                <p style={{
                    fontSize: "1.2rem",
                    lineHeight: "1.6",
                    marginBottom: "40px",
                    color: "#bdc3c7"
                }}>
                    We're sorry for the inconvenience. Please try refreshing the page or 
                    contact support if the problem persists. Our team has been notified.
                </p>
                
                {/* Action Buttons */}
                <div style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                    flexWrap: "wrap"
                }}>
                    <button
                        style={{
                            background: "linear-gradient(135deg, #e74c3c, #c0392b)",
                            color: "white",
                            border: "none",
                            padding: "15px 30px",
                            borderRadius: "10px",
                            fontSize: "1.1rem",
                            fontWeight: "600",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            boxShadow: "0 6px 20px rgba(231, 76, 60, 0.3)",
                            minWidth: "200px",
                            justifyContent: "center"
                        }}
                        onClick={() => window.location.reload()}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-3px)";
                            e.currentTarget.style.boxShadow = "0 10px 25px rgba(231, 76, 60, 0.4)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 6px 20px rgba(231, 76, 60, 0.3)";
                        }}
                    >
                        <FaRedo /> Refresh Page
                    </button>
                    
                    <button
                        style={{
                            background: "linear-gradient(135deg, #3498db, #2980b9)",
                            color: "white",
                            border: "none",
                            padding: "15px 30px",
                            borderRadius: "10px",
                            fontSize: "1.1rem",
                            fontWeight: "600",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            boxShadow: "0 6px 20px rgba(52, 152, 219, 0.3)",
                            minWidth: "200px",
                            justifyContent: "center"
                        }}
                        onClick={() => window.location.href = "/"}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-3px)";
                            e.currentTarget.style.boxShadow = "0 10px 25px rgba(52, 152, 219, 0.4)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 6px 20px rgba(52, 152, 219, 0.3)";
                        }}
                    >
                        <FaHome /> Return Home
                    </button>
                </div>
                
                {/* Technical Info (Optional) */}
                <div style={{
                    marginTop: "50px",
                    padding: "20px",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    textAlign: "left",
                    maxWidth: "500px",
                    margin: "50px auto 0"
                }}>
                    <h3 style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        color: "#ecf0f1",
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                    }}>
                        <FaExclamationTriangle size={16} /> Technical Information
                    </h3>
                    <p style={{
                        fontSize: "0.9rem",
                        color: "#95a5a6",
                        lineHeight: "1.5"
                    }}>
                        Error Code: <code style={{ color: "#e74c3c" }}>500</code><br />
                        Timestamp: {new Date().toLocaleString()}<br />
                        If this error persists, please contact support with the above information.
                    </p>
                </div>
            </div>
            
            {/* CSS Animation */}
            <style>{`
                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.7;
                        transform: scale(1.05);
                    }
                }
                
                @media (max-width: 768px) {
                    h1 {
                        font-size: 2.5rem !important;
                    }
                    
                    .button-container {
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    button {
                        width: 100%;
                        max-width: 300px;
                    }
                }
                
                @media (max-width: 480px) {
                    h1 {
                        font-size: 2rem !important;
                    }
                    
                    p {
                        font-size: 1rem !important;
                    }
                }
            `}</style>
        </div>
    );
}
