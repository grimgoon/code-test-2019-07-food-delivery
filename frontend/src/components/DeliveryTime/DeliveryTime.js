import React from "react";
import DeliveryTimesData from "../../data/delivery-times.json";
import DeliveryTimeFooter from "./DeliveryTimeFooter/DeliveryTimeFooter";

const DeliveryTime = () => {
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
        <ul className="time-picker table">
          <li aria-disabled="false">
            <input name="delivery-time-slot" type="radio" id="47704" />
            <label className="small" htmlFor="47704">
              <span />
              16:00 -<span className="sr">till</span> 21:00
            </label>
          </li>
        </ul>
      </div>
      <DeliveryTimeFooter />
    </section>
  );
};

export default DeliveryTime;
