import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Logo, LogoutBtn } from "../index";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-50 bg-white shadow-lg rounded-lg h-20">
      <Container>
        <nav className="flex items-center py-2">
          {/* Logo */}
          <div className="mr-8">
            <Link to="/">
              <Logo width="60px" height="60px" />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="flex ml-auto text-gray-700 text-lg space-x-6 font-semibold">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-5 py-2 hover:bg-green-500 hover:text-white rounded-full transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
