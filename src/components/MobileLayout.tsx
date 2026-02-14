import BottomNav from "./BottomNav";

const MobileLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background max-w-lg mx-auto relative">
    <main className="pb-20">{children}</main>
    <BottomNav />
  </div>
);

export default MobileLayout;
