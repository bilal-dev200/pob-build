// src/Components/WebLoader.jsx
const WebLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      {/* Replace with your animated logo */}
      <img 
        src="/poblogo.png"  // <-- animated logo
        alt="Loading..."
        className="w-44 h-44 animate-pulse"
      />
    </div>
  );
};

export default WebLoader;
