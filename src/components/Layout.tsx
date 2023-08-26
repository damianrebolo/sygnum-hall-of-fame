export const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => (
  <div className="w-screen overflow-auto fixed z-20">{children}</div>
);
