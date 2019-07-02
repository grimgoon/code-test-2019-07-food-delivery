import React from "react";

const DeliveryTimeItem = props => {
  const {
    deliveryTimeId,
    deliveryDate,
    startTime,
    stopTime,
    inHomeAvailable
  } = props.data;
  const { activeItem, setActive } = props;
  const isActive = activeItem === deliveryTimeId ? "active" : "";

  return (
    <li
      className={isActive}
      aria-disabled="false"
      onClick={() => setActive(deliveryTimeId)}
    >
      <input name="delivery-time-slot" type="radio" id={deliveryTimeId} />
      <label className="small" htmlFor={deliveryTimeId}>
        {startTime} -<span className="sr">till</span> {stopTime}
      </label>
    </li>
  );
};

export default DeliveryTimeItem;
