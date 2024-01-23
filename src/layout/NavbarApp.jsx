import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  SquaresPlusIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import { useNavigate } from "react-router-dom";

const navListMenuItems = [
  {
    title: "Company Profile",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
    url: "company-profile",
  },
  {
    title: "Loan Origination System(LOS)",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
    url: "LOS",
  },
  {
    title: "News Portal",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    url: "news-portal",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigate = useNavigate();
  const handleMenu = (e, menuName) => {
    e.preventDefault();
    navigate(menuName);
  };

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, url }, key) => (
      <a key={key}>
        <MenuItem
          className="flex items-center gap-3 rounded-lg"
          onClick={(e) => {
            handleMenu(e, `portfolio/${url}`);
          }}>
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold">
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom">
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
              Portfolio Project
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul
            className={`grid grid-rows-${renderItems.length} gap-y-2 outline-none outline-0`}>
            <a key="0" className="border-b-2">
              <MenuItem
                className="flex items-center gap-3 rounded-lg"
                onClick={(e) => {
                  handleMenu(e, `portfolio`);
                }}>
                <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                  {React.createElement(SquaresPlusIcon, {
                    strokeWidth: 2,
                    className: "h-6 text-gray-900 w-6",
                  })}
                </div>
                <div>
                  <Typography
                    variant="h6"
                    color="indigo"
                    className="flex items-center text-sm font-bold">
                    See All Project
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-blue-gray-500">
                    Lorem ipsum dolor amet consectetur adipisicing.
                  </Typography>
                </div>
              </MenuItem>
            </a>
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <a key="0" className="border-b-2">
            <MenuItem
              className="flex items-center gap-3 rounded-lg"
              onClick={(e) => {
                handleMenu(e, `portfolio`);
              }}>
              <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                {React.createElement(SquaresPlusIcon, {
                  strokeWidth: 2,
                  className: "h-6 text-gray-900 w-6",
                })}
              </div>
              <div>
                <Typography
                  variant="h6"
                  color="indigo"
                  className="flex items-center text-sm font-bold">
                  See All Project
                </Typography>
                <Typography
                  variant="paragraph"
                  className="text-xs !font-medium text-blue-gray-500">
                  Lorem ipsum dolor amet consectetur adipisicing.
                </Typography>
              </div>
            </MenuItem>
          </a>
          {renderItems}
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  const navigate = useNavigate();
  const handleMenu = (e, menuName) => {
    e.preventDefault();
    navigate(menuName);
  };

  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        onClick={(e) => {
          handleMenu(e, "/");
        }}
        variant="small"
        color="blue-gray"
        className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>

      <Typography
        as="a"
        onClick={(e) => {
          handleMenu(e, "about");
        }}
        variant="small"
        color="blue-gray"
        className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">About</ListItem>
      </Typography>
      <Typography
        as="a"
        onClick={(e) => {
          handleMenu(e, "skills");
        }}
        variant="small"
        color="blue-gray"
        className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Skills
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        onClick={(e) => {
          handleMenu(e, "contact");
        }}
        variant="small"
        color="blue-gray"
        className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarApp() {
  const navigate = useNavigate();

  const handleMenu = (e, menuName) => {
    e.preventDefault();
    navigate(menuName);
  };

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 sticky">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          onClick={(e) => {
            handleMenu(e, "home");
          }}
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2">
          Windy Personal Website
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList useNavigate={useNavigate} />
      </Collapse>
    </Navbar>
  );
}
