import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: string[];
}

// Mobile navigation menu overlay
export const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu panel */}
      <div className="fixed left-0 top-0 bottom-0 w-64 bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Navigation items */}
        <nav className="p-4">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block py-3 text-lg font-medium text-gray-900 hover:text-orange-500 transition-colors duration-200"
              onClick={onClose}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
