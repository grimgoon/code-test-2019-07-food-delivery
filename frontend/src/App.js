import React from 'react';

function App() {
  return (
  <>
    <section class="panel panel-collapsed">
      <div class="panel-summary">
        <div>
          <input id="in-home" name="in-home-check" type="checkbox" />
          <label class="whitespace-none" for="in-home"
            ><span></span> In i kylen-leverans
            <div class="tag tag-default">För dig med Gluelås</div></label
          >
        </div>
      </div>
    </section>

    <section class="panel delivery-time">
      <h2>
        Leveranstid
      </h2>

      <div class="panel-content">
        <h4 class="table-heading">
          Möjlighet att ändra order till idag kl 13:00
          <span class="small-text">
            <i class="fa fa-check text-success"></i>
            Du får SMS med exakt leveranstid
          </span>
        </h4>
        <ul class="time-picker table">
          <li aria-disabled="false">
            <input name="delivery-time-slot" type="radio" id="47704" />
            <label class="small" for="47704">
              <span></span>
              16:00 -
              <span class="sr">till</span> 21:00
            </label>
          </li>
        </ul>
      </div>

      <div class="panel-footer">
        <button class="pull-right" type="button">
          <strong>Nästa - Betalningssätt</strong>
        </button>
      </div>
    </section>
    </>
  );
}

export default App;
