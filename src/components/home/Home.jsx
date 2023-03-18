//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import { getProducts } from "../../redux/actions/productsAction";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

import { Fragment } from "react";
import { Box, styled } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
padding:10px 10px;
background-color:#F2F2F2;
`;

const Home = () => {
    const { products } = useSelector(state => state.getProducts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    return (
        <Fragment>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" timer={true} />
                <MidSection />
                <Slide products={products} title="Discount for You" timer={false} />
                <Slide products={products} title="Suggested items" timer={false} />
                <Slide products={products} title="Top Selection" timer={false} />
                <Slide products={products} title="Recommended items" timer={false} />
                <Slide products={products} title="Trending offers" timer={false} />
                <Slide products={products} title="Season's top picks" timer={false} />
                <Slide products={products} title="Top Deals on accessories" timer={false} />
            </Component>
        </Fragment>
    )
}

export default Home;