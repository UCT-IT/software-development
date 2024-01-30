const GradientBackground = ({ children }: { children: React.ReactNode }) => {
  const colors = [
    "#f1e3ff",
    "#e3c8ff",
    "#d3a7ff",
    "#bd7aff",
    "#ad5aff",
    "#9300ff",
    "#8000ff",
  ];

  return (
    <div className="relative grid place-items-center py-32">
      <div className="h-full w-full flex absolute top-0 right-0 left-0 bottom-0">
        {colors.map((color) => (
          <div
            key={color}
            style={{ backgroundColor: color }}
            className="h-full w-full"
          ></div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default GradientBackground;
