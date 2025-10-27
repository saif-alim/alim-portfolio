export const Footer = () => (
  <div className="max-w-5xl mx-auto px-[5%]">
    <hr />
    <footer className="flex flex-col w-full py-6 text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Saif Ul Alim Ahmed — All rights
      reserved.
      <span className="text-xs font-light py-1">
        Built with React, TypeScript &amp; Tailwind CSS.
      </span>
    </footer>
  </div>
);
