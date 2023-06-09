import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { HiShoppingCart, HiSearch } from "react-icons/hi";
// import logo from "../Assets/logo.png";
import {Link}  from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const {data} = useSelector((store)=>store.authManager)
  const token = localStorage.getItem("userToken") || ""
  const handleLogout = ()=>{
    localStorage.removeItem("userToken")
  }
  return (
    <Box position="fixed" width="100%" top={0} zIndex={1}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 4 }}
        px={{ base: 2, md: 14, lg: 16 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={4} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Link to="/">Cartify</Link>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={2}
          cursor={"pointer"}
        >
          <Stack fontSize="12px" display="flex" gap="5px" direction={"row"}>
            {/* <Stack alignItems="center">
              <HiPencil size={26} />
              <span>SCRAPBOOK</span>
            </Stack> */}

            <Stack alignItems="center">
              <HiSearch size={26} />
              <span>SEARCH</span>
            </Stack>

            <Stack alignItems="center">
              <Link to="/cart">
                <HiShoppingCart size={34} />
                <span>CART</span>
              </Link>
            </Stack>
          </Stack>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              border="none"
              minW={0}
              lineHeight="16px"
            >
              <Stack alignItems="center">
                <Avatar
                  size={"sm"}
                  name={`${data.name}` || 0}
                />
                <span
                  style={{ border: "none", fontSize: "11px", marginTop: "0px" }}
                >
                  PROFILE
                </span>
              </Stack>
            </MenuButton>
            <MenuList>
              <Link to="/login">
                {token===""?<MenuItem>Sign In</MenuItem>:<MenuItem onClick={()=>handleLogout()}>Log out</MenuItem>}
              </Link>
              <Link to="/admin">
                <MenuItem>Admin Login</MenuItem>
              </Link>
            </MenuList>
          </Menu>

          {/* <Button
           as={'a'}
           display={{ base: 'none', md: 'inline-flex' }}
           fontSize={'sm'}
           fontWeight={600}
           color={'white'}
           bg={'pink.400'}
           href={'#'}
           _hover={{
             bg: 'pink.300',
           }}>
            Sign In
          </Button> */}
          {/* <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button> */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} alignItems="center">
      {NAV_ITEMS.map((navItem) => (
        <Link to="/mens">
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"md"}
                  fontWeight={700}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Link to="/mens">
                    <Stack>
                      {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                      ))}
                    </Stack>
                  </Link>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        </Link>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Heading
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
            fontSize={18}
            textAlign="left"
          >
            {label}
          </Heading>
          {subLabel &&
            subLabel.map((childs) => (
              <Link to="/mens">
                <Text fontSize={15}>{childs}</Text>
              </Link>
            ))}
        </Box>
        {/* <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex> */}
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Link to="/products">
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            align={"start"}
          >
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Link>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "WOMEN",
    children: [
      {
        label: "Ethnic Wear",
        subLabel: [
          "Kurta Kurtis",
          "Sarees",
          "Lehengas",
          "Leggings, Salwar & Churidaar",
        ],
        href: "#",
      },
      {
        label: "Bags & Wallets",
        subLabel: [],
        href: "#",
      },
      {
        label: "Jewellery",
        subLabel: [
          "Fashion Jewellery",
          "Earrings",
          "Necklace & Pendants",
          "Rings, Bangles & Bracelets",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "MEN",
    children: [
      {
        label: "Top Wear",
        subLabel: [
          "T-Shirts",
          "Casual Shirts",
          "Formal Shirts",
          "Suits & Blazers",
        ],
        href: "#",
      },
      {
        label: "Bottom Wear",
        subLabel: [
          "Jeans",
          "Casual Trousers",
          "Formal Trousers",
          "Joggers Shorts",
        ],
        href: "#",
      },
      {
        label: "Sports Wear",
        subLabel: ["T-Shirts", "Track Pants"],
        href: "#",
      },
    ],
  },
  {
    label: "KIDS",
    children: [
      {
        label: "Boys",
        subLabel: ["T-Shirts", "Shirts", "Bottom Wear", "Sweater & Cardigans"],
        href: "#",
      },
      {
        label: "Girls",
        subLabel: [
          "Dresses & Frocks",
          "Tees & Tops",
          "Bottom Wear",
          "Coats & Jackets",
        ],
        href: "#",
      },
      {
        label: "Footwear",
        subLabel: ["Sandals & Floaters", "Slippers & Flip Flops"],
        href: "#",
      },
    ],
  },
  {
    label: "HOME",
    children: [
      {
        label: "Bed Linen & Furnishing",
        subLabel: [
          "Bed Sheet Sets",
          "Quilts & Comforters",
          "Blankets",
          "Pillow Covers",
        ],
        href: "#",
      },
      {
        label: "Bath",
        subLabel: ["Towels", "Bath Mats", "Shower Curtains"],
        href: "#",
      },
      {
        label: "Brands",
        subLabel: ["Bella Casa", "Cortina", "Saral Home", "Saral Home"],
        href: "#",
      },
    ],
  },
  {
    label: "OFFERS",
  },
];
