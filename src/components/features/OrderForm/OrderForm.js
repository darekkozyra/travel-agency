import React from 'react';
import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary';
import {Row, Col} from 'react-flexbox-grid';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import PropTypes from 'prop-types';

const OrderForm = ({tripCost, options, setOrderOption}) => (
  <Row> 
    {pricing.map(option => (
      <Col md={4} key={option.id}>
        <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}/>
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};
  
export default OrderForm;

