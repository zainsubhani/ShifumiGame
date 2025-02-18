export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div
      className="min-h-screen relative bg-cover bg-center bg-no-repeat bg-fixed w-full overflow-x-hidden"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 sm:py-8 lg:py-12 max-w-7xl">
        {children}
      </div>
    </div>
  );
};
