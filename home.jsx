


import NavBar from "./navbar";
import Banner from "./banner";
// import { Fragment } from "react";
import { Box, styled} from '@mui/material';

const Component = styled(Box)`
   padding:  10px;
   background: #F2F2F2;
`

const Home = () => {


return (
    <>
        <NavBar/>
     <Component>
       <Banner/>
     </Component>

 </>
)


}

export default Home;