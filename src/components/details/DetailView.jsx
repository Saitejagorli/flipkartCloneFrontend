import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';


import { Box, Grid, styled } from "@mui/material";
import { getProductDetails } from "../../redux/actions/productsAction";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetaill";

const Component = styled(Box)`
background:#F2F2F2;
margin-top:55pxpx;
`;

const Container = styled(Grid)`
background:#FFFFFF;
display:flex;
`;
const RightContainer = styled(Grid)`
margin-top:50px;
padding-left:20px;

`;

const DetailView = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, product } = useSelector(state => state.getProductDetails);
    useEffect(() => {
        if (product && id !== product.id)
            dispatch(getProductDetails(id));
    }, [dispatch, id, product, loading]);

    console.log(product);
    return (

        <Component >
            {
                product && Object.keys(product).length &&
                <Container container>
                    <Grid item lg={4} md={4} sm={8} xm={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xm={12}>
                        <ProductDetail product={product} />
                    </RightContainer>
                </Container>
            }
        </Component>

    )
}
export default DetailView;