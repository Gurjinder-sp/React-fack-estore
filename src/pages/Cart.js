
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import { EmptyCartIcon } from '../icons';
import { Link } from 'react-router-dom';
import CartProduct from '../components/CartProduct';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import { calculateTax, clearCart } from '../features/cart/cartSlice';

const CartPage = () => {
    const {cartItems, total, tax} = useSelector(store => store.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTax());
    },[cartItems])
    return (  
        <Container style={{'max-height':'90vh','overflow':'auto'}}>
            {!!cartItems.length 
            ?
            <>
                <Container >
                    <Row>
                        <Col lg='8'>
                        {cartItems.map((product) => {
                        return <CartProduct product={product}/>
                         })}
                        
                        </Col>
                        <Col lg='4'>
                            <Card body className='my-2 text-start' style={{'min-height':'85vh'}}>
                                <p className='fs-1'>Cart</p>
                                <Row>
                                    <Col className='fs-4'>
                                        Products Total
                                    </Col>
                                    <Col className='fs-3'>
                                        {total.toFixed(2)}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='fs-4'>
                                        GST (15%)
                                    </Col>
                                    <Col className='fs-3'>
                                        {tax.toFixed(2)}
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col className='fs-4'>
                                        Total
                                    </Col>
                                    <Col className='fs-3'>
                                        {(total + tax).toFixed(2)}
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col>
                                       <Button variant='danger' onClick={() => dispatch(clearCart())}>Clear Cart</Button>
                                    </Col>
                                    <Col>
                                         <Button variant='success'>Proceed to payment</Button>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    
                </Container>
            </>
            : <>
                <Container>
                    <div>
                        <EmptyCartIcon />
                        <p className='fs-3'>Cart is empty. Check out our <Link to="/products">Products</Link></p>
                    </div>
                </Container>
            </>}
        </Container>
    );
}
 
export default CartPage;