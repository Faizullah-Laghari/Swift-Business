// import React from "react";
// import SEO from "../common/seo";
// // import HomeOne from "../components/homes/home";
// import Wrapper from "../layout/wrapper";
// import HomeTwo from "../components/homes/home-2";

// const Home = () => {
//   return (
//     <Wrapper>
//       <SEO pageTitle={"Softec - Data analytics"} />
//       {/* <HomeOne /> */}
//       <HomeTwo />
//     </Wrapper>
//   );
// };

// export default Home;
import React from "react";
import SEO from "../common/seo";
import HomeFive from "../components/homes/home-5";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Data analytics"} />
      <HomeFive />
    </Wrapper>
  );
};

export default index;
