import { Link } from "react-router-dom";
import { Grid, textDecoration } from "@chakra-ui/react";
import React from "react";
import { Box, Flex, IconButton, Icon } from "@chakra-ui/react";
import {
  FaUser,
  FaSearch,
  FaQuestion,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";

export const Navbar = () => {
  return (
    <Box w={"100%"} h={"100px"} bg={"#FF4500"}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="nowrap"
        w="100%"
        mb={8}
        p={8}
        bg={["primary.500", "primary.500", "transparent", "transparent"]}
        color={["white", "white", "primary.700", "primary.700"]}
      >
        {/* Left-side section */}
        <Flex
          align={{ base: "center", md: "flex-start" }}
          mb={{ base: "1rem", md: 0 }}
          h={"auto"}
          w={350}
          ml={"50"}
          // bg={'blue'}
          wrap={"nowrap"}
          display={"flex"}
          justify={"space-between"}
        >
          <nav
            fontSize="xl"
            fontWeight="bold"
            mx={{ base: "0", md: "1rem" }}
            mb={{ base: "0.5rem", md: 0 }}
          >
            <Link  style={{textDecoration:'none',color:'white'}} to="/Men">Men</Link>
          </nav>
          <nav
            fontSize="xl"
            fontWeight="bold"
            mx={{ base: "0", md: "1rem" }}
            mb={{ base: "0.5rem", md: 0 }}
          >
              <Link  style={{textDecoration:'none',color:'white'}} to="/Women">Women</Link>
          </nav>
          <nav
            fontSize="xl"
            fontWeight="bold"
            mx={{ base: "0", md: "1rem" }}
            mb={{ base: "0.5rem", md: 0 }}
          >
            <Link  style={{textDecoration:'none',color:'white'}} to="/Kid">Kid</Link>
          </nav>
          <nav
            fontSize="xl"
            fontWeight="bold"
            mx={{ base: "0", md: "1rem" }}
            mb={{ base: "0.5rem", md: 0 }}
          >
            SS'22
          </nav>
          <nav
            fontSize="xl"
            fontWeight="bold"
            mx={{ base: "0", md: "1rem" }}
            mb={{ base: "0.5rem", md: 0 }}
          >
            Sale
          </nav>
          <nav
            fontSize="xl"
            fontWeight="bold"
            mx={{ base: "0", md: "1rem" }}
            mb={{ base: "0.5rem", md: 0 }}
          >
            Sale
          </nav>
          <nav
            fontSize="xl"
            fontWeight="bold"
            mx={{ base: "0", md: "1rem" }}
            mb={{ base: "0.5rem", md: 0 }}
          >
            <Link to="/Products">Products</Link>
          </nav>
        </Flex>

        {/* Middle section with the logo */}
        <Box
          mb={{ base: "1rem", md: 1 }}
          textAlign={{ base: "center", md: "left" }}
          mr={50}   border={'1px '} >
          <Flex wrap={"nowrap"}>
            <nav fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
              <Link to="/">
                {" "}
                <img
                  width={"150px"}
                  height={"80px"}
                  src="https://dieselindia.com/_nuxt/img/logo-mobile002.1aaed20.png"
                  alt=""
                />
              </Link>
            </nav>
          </Flex>
        </Box>

        {/* Right-side section  */}
        <Grid
          templateColumns="repeat(1,1fr)"
          bg={"white"}
          templateRows="repeat(1,1fr)"
          alignItems={"center"}
        >
          <Flex align="center">
            <IconButton
              variant="ghost"
              icon={<Icon as={FaUser} />}
              aria-label="Login"
              mx="0.5rem"
            />
            <IconButton
              variant="ghost"
              icon={<Icon as={FaSearch} />}
              aria-label="Search"
              mx="1.5rem"
            />
            <IconButton
              variant="ghost"
              icon={<Icon as={FaQuestion} />}
              aria-label="Question"
              mx="0.5rem"
            />
            <IconButton
              variant="ghost"
              icon={<Icon as={FaHeart} />}
              aria-label="Wishlist"
              mx="0.5rem"
            />
            <IconButton
              variant="ghost"
              icon={<Icon as={FaShoppingCart} />}
              aria-label="Cart"
              mx="0.5rem"
            />
          </Flex>
        </Grid>
      </Flex>
    </Box>
  );
};
