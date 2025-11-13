import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Navigation } from "@/components/Navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="p-4 md:hidden" onClick={() => setIsOpen(true)}>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="pt-12">
        <Navigation className="flex-col" onLinkClick={handleLinkClick} />
      </SheetContent>
    </Sheet>
  );
}
