import React from "react";

const Header = () => {
  return (
    <section className="panel panel-collapsed">
      <div className="panel-summary">
        <div>
          <input id="in-home" name="in-home-check" type="checkbox" />
          <label className="whitespace-none" htmlFor="in-home">
            <span/>In i kylen-leverans
            <div className="tag tag-default">För dig med Gluelås</div>
          </label>
        </div>
      </div>
    </section>
  );
};

export default Header;
