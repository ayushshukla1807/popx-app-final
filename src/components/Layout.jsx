
export const Layout = ({ children }) => {
  return (
    // Use 100dvh to perfectly account for mobile browser address bars
    <div className="min-h-[100dvh] sm:bg-gray-100 bg-white w-full flex items-center justify-center p-0 sm:p-4">
      <div className="w-full sm:w-[375px] h-[100dvh] sm:h-[812px] bg-white relative overflow-hidden sm:rounded-[2rem] sm:shadow-lg flex flex-col">
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};
