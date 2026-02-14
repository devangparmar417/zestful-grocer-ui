import { User, MapPin, CreditCard, Bell, HelpCircle, LogOut, ChevronRight } from "lucide-react";

const menuItems = [
  { icon: User, label: "My Details" },
  { icon: MapPin, label: "Delivery Address" },
  { icon: CreditCard, label: "Payment Methods" },
  { icon: Bell, label: "Notifications" },
  { icon: HelpCircle, label: "Help" },
];

const Account = () => (
  <div className="px-5 pt-6 animate-fade-in">
    {/* Profile header */}
    <div className="flex items-center gap-4 mb-8">
      <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center">
        <User className="h-8 w-8 text-accent-foreground" />
      </div>
      <div>
        <h2 className="text-lg font-bold text-foreground">John Doe</h2>
        <p className="text-sm text-muted-foreground">john.doe@example.com</p>
      </div>
    </div>

    <div className="space-y-0 divide-y divide-border">
      {menuItems.map(({ icon: Icon, label }) => (
        <button key={label} className="flex items-center justify-between w-full py-4">
          <div className="flex items-center gap-3">
            <Icon className="h-5 w-5 text-foreground" />
            <span className="text-sm font-medium text-foreground">{label}</span>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </button>
      ))}
    </div>

    <button className="w-full flex items-center justify-center gap-2 bg-secondary text-primary rounded-2xl py-4 mt-8 font-semibold">
      <LogOut className="h-5 w-5" />
      Log Out
    </button>
  </div>
);

export default Account;
