
const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">kozzie</h3>
          <p className="text-gray-400">
            Premium clothing essentials for the modern wardrobe
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#shirts" className="hover:text-white transition-colors">Shirts</a></li>
            <li><a href="#hoodies" className="hover:text-white transition-colors">Hoodies</a></li>
            <li><a href="#beanies" className="hover:text-white transition-colors">Beanies</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Email: hello@kozzie.com</li>
            <li>Phone: (555) 123-4567</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2024 Kozzie. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
