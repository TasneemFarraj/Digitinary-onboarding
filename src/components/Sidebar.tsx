import React, { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown, ChevronRight, Menu, X, Search, Code, GitMerge, BookOpenCheck, BriefcaseBusiness, Component, DollarSign, Box } from "lucide-react"; 
import "../Style/Sidebar.scss";
import logo from "../assets/Digitinary-Logo.png"; 
import icon from "../assets/digitinary_icon.png"; 

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
  const [isFrontendMenuOpen, setIsFrontendMenuOpen] = useState(false); 
  const [searchQuery, setSearchQuery] = useState(""); 

  const menuItems = [
    { category: "Front-end", icon: <Code className="menu-item-icon" />, items: ["Arena", "D-Gate", "K-Net"] },
    { category: "Back-end", icon: <GitMerge className="menu-item-icon" />, items: [] },
    { category: "Quality Assurance", icon: <BookOpenCheck className="menu-item-icon" />, items: [] },
    { category: "Human Resource", icon: <BriefcaseBusiness className="menu-item-icon" />, items: [] },
    { category: "UI UX Designer", icon: <Component className="menu-item-icon" />, items: [] },
    { category: "Financial Officer", icon: <DollarSign className="menu-item-icon" />, items: [] },
    { category: "Product Manager", icon: <Box className="menu-item-icon" />, items: [] },
  ];

  const filteredMenu = menuItems.filter(({ category, items }) => {
    const matchCategory = category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchItems = items.some((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return matchCategory || matchItems;
  });

  return (
    <div className={`sidebar-wrapper ${isSidebarOpen ? "open" : "closed"}`}>
      <button
        className="sidebar-toggle"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <img 
              src={isSidebarOpen ? logo : icon} 
              alt="Digitinary Logo" 
              className={`logo-image ${!isSidebarOpen ? 'logo-icon' : ''}`} 
            />
          </div>
        </div>

        {isSidebarOpen && (
          <div className="sidebar-search">
            <Search className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        )}

        <div className="sidebar-content">
          {isSidebarOpen && <h2>Departments</h2>}
          <nav className="sidebar-menu">
            {filteredMenu.map(({ category, icon, items }) => (
              <Collapsible.Root
                key={category}
                open={category === "Front-end" ? isFrontendMenuOpen : true}
                onOpenChange={
                  category === "Front-end"
                    ? (open) => setIsFrontendMenuOpen(open)
                    : undefined
                }
              >
              <Collapsible.Trigger asChild>
          <button
            className="menu-item"
            onClick={() =>
            category === "Front-end" &&
            setIsFrontendMenuOpen(!isFrontendMenuOpen)
              }
              >
              <span className="menu-item-icon">{icon}</span>
              {isSidebarOpen && <span>{category}</span>}
              {category === "Front-end" && isSidebarOpen && ( 
                    isFrontendMenuOpen ? <ChevronDown /> : <ChevronRight />
                )}
            </button>
              </Collapsible.Trigger>
                {items.length > 0 && (
                  <Collapsible.Content>
                    <ul className={`submenu ${!isSidebarOpen ? "collapsed" : ""}`}>
                      {items.map((item) => (
                        <li key={item}>
                          <a href={`/${item.toLowerCase()}`} className="submenu-item">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Collapsible.Content>
                )}
              </Collapsible.Root>
            ))}
          </nav>
        </div>

        <div className="sidebar-footer">
          <div className="profile">
            <img
              src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
              alt="User Avatar"
              className="profile-avatar"
            />
            {isSidebarOpen && (
              <div>
                <p className="profile-name">Tasneem</p>
                <p className="profile-email">m@example.com</p>
              </div>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
