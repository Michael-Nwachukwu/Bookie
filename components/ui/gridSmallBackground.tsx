import React from "react";

interface BgComponentProps {
    Component: React.ComponentType<any>;
}

const GridSmallBackgroundDemo: React.FC<BgComponentProps> = ({ Component }) => {
    return (
      <div className="h-[40rem] w-full bg-black bg-grid-small-white/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        
        {/* Render the passed component */}
        <Component />
      </div>
    );
};
  
export default GridSmallBackgroundDemo;