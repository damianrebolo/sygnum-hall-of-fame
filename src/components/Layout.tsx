export const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => (
  <div className="w-screen h-screen fixed z-20">{children}</div>
);
