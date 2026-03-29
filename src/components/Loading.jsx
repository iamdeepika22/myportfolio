// components/LoadingIcon.jsx
const LoadingIcon = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // vertically center
        height: "100vh",       // take full viewport height
      }}
    >
      <div
        style={{
          border: "4px solid rgba(0,0,0,0.1)",
          borderTop: "4px solid #4f46e5", // Indigo color
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          animation: "spin 1s linear infinite",
        }}
      ></div>

      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingIcon;