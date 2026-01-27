import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X } from 'lucide-react';
import { NAVIGATION } from '../../config/site';

export default function MobileMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="lg:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-100 hover:bg-slate-800 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 lg:hidden" />
        <Dialog.Content className="fixed top-0 left-0 right-0 bg-slate-900 border-b border-slate-800 z-50 lg:hidden max-h-[85vh] overflow-y-auto">
          <Dialog.Title className="sr-only">Navigation Menu</Dialog.Title>
          <Dialog.Description className="sr-only">Main navigation menu</Dialog.Description>
          <div className="container mx-auto px-4 py-6 space-y-2">
            {NAVIGATION.map((item) => (
              <Dialog.Close asChild key={item.href}>
                <a
                  href={item.href}
                  className="block px-4 py-4 min-h-[44px] text-base font-medium text-slate-100 hover:text-violet-400 hover:bg-violet-900/50 rounded-lg transition-all"
                >
                  {item.name}
                </a>
              </Dialog.Close>
            ))}
            <div className="pt-4">
              <Dialog.Close asChild>
                <a
                  href="https://app.laravelseo.com/login"
                  className="block text-center px-6 py-3 text-sm font-semibold text-white bg-linear-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 rounded-lg shadow-md transition-all"
                  onClick={() => {
                    // @ts-ignore
                    if (typeof window.gtag === 'function') {
                      // @ts-ignore
                      window.gtag('event', 'login_click', { 'event_category': 'navigation', 'event_label': 'mobile_menu' });
                    }
                  }}
                >
                  Login
                </a>
              </Dialog.Close>
            </div>
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-100 hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

