import { DialogOverlay, DialogContent } from "@reach/dialog";

export const NavItems = [
  { title: "Home", href: "#" },
  { title: "Description", href: "#" },
  { title: "Features", href: "#" },
  { title: "Characters", href: "#" },
  { title: "Download", href: "#" },
];

interface IMobileMenu {
  isOpen: boolean;
  onDismiss: any;
}

export const MobileNav: React.FC<IMobileMenu> = ({ isOpen, onDismiss }) => {
  return (
    <DialogOverlay
      className="fixed top-0 left-0 right-0 bottom-0 flex justify-end bg-transparent"
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 animate-fadeIn bg-black opacity-70" />
      <DialogContent
        aria-label="Menu"
        className="relative mr-[-16px] h-full w-[266px] animate-slideIn bg-[#309AE0] py-6 px-8 "
      >
        <div className="flex h-full flex-col content-center">
          <button
            className="absolute top-3 right-[16px] border-none bg-none p-4 text-white"
            onClick={onDismiss}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <p className="sr-only">Dismiss menu</p>
          </button>

          <nav className="my-auto flex flex-col gap-4">
            {NavItems.map((link) => (
              <a
                className="py-3 font-pop text-2xl font-medium text-white hover:text-[#FF9EC6] focus:text-[#FF9EC6] "
                key={link.title}
                href={link.href}
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      </DialogContent>
    </DialogOverlay>
  );
};
