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
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-4/5 z-50 bg-[#192d34] mb-auto  rounded-lg h-15 ">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="90px" height="90px" />
            </Link>
          </div>

          <ul className="flex ml-auto text-white   text-xl pt-2 space-x-3">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-5 duration-2  hover:bg-[#b6f1d8e9] text-coolGray-800 rounded-full focus:bg-coolGray-800"
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
