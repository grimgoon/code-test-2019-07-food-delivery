import React from "react";

const DeliveryTimeItem = props => {
  let {
    deliveryTimeId,
    deliveryDate,
    startTime,
    stopTime,
    inHomeAvailable
  } = props.data;
  const { activeItem, setActive } = props;
  const isActive = activeItem === deliveryTimeId ? "active" : "";

  startTime = startTime.slice(0, 5);
  stopTime = stopTime.slice(0, 5);

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
