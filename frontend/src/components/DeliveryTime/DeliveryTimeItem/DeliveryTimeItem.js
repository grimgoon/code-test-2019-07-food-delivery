import React, {useEffect} from "react";

const DeliveryTimeItem = props => {
  let {
    deliveryTimeId,
    startTime,
    stopTime,
    inHomeAvailable
  } = props.data;
  const { activeItem, setActive, isInHomeActive} = props;

  const isActive = activeItem === deliveryTimeId ? "active" : "";
  const isDisabled = isInHomeActive && !inHomeAvailable ? "disabled" : "";
  const classes = [isActive, isDisabled].join(" ");

  startTime = startTime.slice(0, 5);
  stopTime = stopTime.slice(0, 5);

  return (
    <li
      className={classes}
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
