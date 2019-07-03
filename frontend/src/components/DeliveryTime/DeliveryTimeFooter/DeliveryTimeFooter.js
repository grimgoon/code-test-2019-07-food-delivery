import React from "react";

const DeliveryTimeFooter = props => {
  const { isButtonDisabled } = props;
  
  const buttonClasses = isButtonDisabled ? "pull-right disabled" : "pull-right";

  return (
    <div className="panel-footer">
      <button className={buttonClasses} type="button" disabled={isButtonDisabled}>
        <strong>Nästa - Betalningssätt</strong>
      </button>
    </div>
  );
};

export default DeliveryTimeFooter;
