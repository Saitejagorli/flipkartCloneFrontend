
import { Box, Typography, styled, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { MdLocalOffer as Badge } from 'react-icons/md';

const StyledBadge = styled(Badge)`
margin-right:10px;
color:#00CC00;
font-size:15px;
`;
const Image = styled('img')({
    width: 77,
    marginLeft: 20
});
const SmallText = styled(Box)`
  vertical-align:baseline;
  & > p {
    font-size:14px;
    margin-top:10px;
   
  }
`;

const ColumnText = styled(TableRow)`
font-size:14px;
vertical-align:baseline;
& > td {
    font-size:14px;
    margin-top:10px;
    border:none;
}
`;

const ProductDetail = ({ product }) => {
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    return (
        <Box>
            <Typography> {product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                8 Ratings & 1 reviews
                <Box component='span'>
                    <Image src={fassured} alt='fassured' />
                </Box>
            </Typography>
            <Typography>
                <Box component='span' style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: '#878787' }}>₹<strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: '#388E3C' }}>{product.price.discount}</Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyledBadge size={20} /> 10% instant discount on PNB Credit Card, up to ₹1500, on orders of ₹5,000 and above T&C</Typography>
                <Typography><StyledBadge size={20} />10% off on Yes Bank Credit Card and EMI Transactions, up to ₹1,500. On orders of ₹10,000 and above T&C</Typography>
                <Typography><StyledBadge size={20} />Flat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm account T&C</Typography>
                <Typography><StyledBadge size={20} />Buy this Product and Get Extra ₹500 Off on Two-Wheelers T&C</Typography>
                <Typography><StyledBadge size={20} />5% Cashback on Flipkart Axis Bank CardT&C</Typography>
                <Typography><StyledBadge size={20} />Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 800 }} >Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell  >No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell  >
                            <Box componet='span' style={{ color: '#2874f0' }}>
                                SuperComNet
                            </Box>
                            <Typography>GST invoice Available</Typography>
                            <Typography>view more sellers starting from ₹{product.price.cost}</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} alt='flipkartPoints' style={{width:390}}/>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell  >{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </Box>
    )
}
export default ProductDetail;