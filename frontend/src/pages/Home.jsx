import { Box, Stack } from "@chakra-ui/react";

import Main from "../homeComponents/Main";
import MainCarousel from "../homeComponents/MainCarousel";
import TopProfile from "../homeComponents/TopProfile";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Box
        marginTop={{ base: "5em", lg: "5em" }}
        p={{ base: "50px 10px", md: "8px 100px", lg: "8px 250px" }}
        backgroundColor="#EEEEEE"
      >
        <Stack gap={2}>
          <TopProfile />
          <MainCarousel />
          <Main />
          <Footer />
        </Stack>
      </Box>
    </>
  );
}
export default Home;
