
import { useState, useEffect } from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: 'ri-home-line' },
    { id: 'projects', label: 'Projects', icon: 'ri-folder-line' },
    { id: 'about', label: 'About', icon: 'ri-user-line' },
    { id: 'experience', label: 'Experience', icon: 'ri-briefcase-line' },
    { 
      id: 'prompting', 
      label: 'AI Prompts', 
      icon: 'ri-robot-line',
      isHighlighted: true,
      tooltip: 'Must View - My AI Work!'
    },
    { id: 'contact', label: 'Contact', icon: 'ri-mail-line' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-yellow-400/95 backdrop-blur-md shadow-lg border-b border-black' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => handleNavClick('home')}
                className="text-2xl font-black text-black hover:text-gray-800 transition-colors duration-300"
              >
                Kaushik Yeddanapudi
              </button>
              <span className="ml-3 px-3 py-1 bg-black text-yellow-400 rounded-full text-xs font-bold border border-black">
                Business Analyst
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2 rounded-xl font-bold transition-all duration-300 flex items-center whitespace-nowrap relative ${
                      activeSection === item.id
                        ? 'bg-black text-yellow-400 shadow-lg'
                        : item.isHighlighted
                        ? 'bg-black text-yellow-400 shadow-lg animate-pulse'
                        : 'text-black hover:text-gray-800 hover:bg-black/10'
                    }`}
                  >
                    <i className={`${item.icon} mr-2`}></i>
                    {item.label}
                    {item.isHighlighted && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                    )}
                  </button>
                  {item.tooltip && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-black text-yellow-400 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 border border-yellow-400">
                      {item.tooltip}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-black hover:text-gray-800 hover:bg-black/10 transition-colors duration-300"
            >
              <i className={`text-2xl ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-1 right-0 z-50 bg-yellow-400/95 backdrop-blur-md border-t border-black">
        <div className="grid grid-cols-6 gap-1 px-2 py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-all duration-300 relative ${
                activeSection === item.id
                  ? 'bg-black text-yellow-400 shadow-lg'
                  : item.isHighlighted
                  ? 'bg-black text-yellow-400 shadow-lg animate-pulse'
                  : 'text-black hover:text-gray-800 hover:bg-black/10'
              }`}
            >
              <i className={`${item.icon} text-lg mb-1`}></i>
              <span className="text-xs font-semibold">{item.label}</span>
              {item.isHighlighted && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
