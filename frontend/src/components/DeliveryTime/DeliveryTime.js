import React, { useState } from "react";
import DeliveryTimesData from "../../data/delivery-times.json";
import DeliveryTimeFooter from "./DeliveryTimeFooter/DeliveryTimeFooter";
import DeliveryTimeItem from "./DeliveryTimeItem/DeliveryTimeItem";

const DeliveryTime = props => {
  const [activeItem, setActiveItem] = useState(null);

  const deliveryItems = DeliveryTimesData.sort(
    (a, b) =>
      Date.parse("1970/01/01 " + a.startTime) -
      Date.parse("1970/01/01 " + b.startTime)
  ).map(data => (
    <DeliveryTimeItem
      key={data.deliveryTimeId}
      data={data}
      activeItem={activeItem}
      setActive={setActiveItem}
    />
  ));

  return (
    <section className="panel delivery-time">
      <h2>Leveranstid</h2>

      <div className="panel-content">
        <h4 className="table-heading">
          Möjlighet att ändra order till idag kl 13:00
          <span className="small-text">
            <i className="fa fa-check text-success" />
            Du får SMS med exakt leveranstid
          </span>
        </h4>
        <ul className="time-picker table">{deliveryItems}</ul>
      </div>
      <DeliveryTimeFooter isButtonDisabled={!activeItem}/>
    </section>
  );
};

export default DeliveryTime;
