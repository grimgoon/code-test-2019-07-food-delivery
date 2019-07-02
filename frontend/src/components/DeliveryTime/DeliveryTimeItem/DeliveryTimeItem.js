import React from "react";

const DeliveryTimeItem = (props) => {
  const {deliveryTimeId, deliveryDate, startTime, stopTime, inHomeAvailable} = props.data;
  return (
    <li aria-disabled="false">
      <input name="delivery-time-slot" type="radio" id={deliveryTimeId} />
      <label className="small" htmlFor={deliveryTimeId}>
        {startTime} -<span className="sr">till</span> {stopTime}
      </label>
    </li>
  );
};

export default DeliveryTimeItem;
