import React from "react";

function NewLocation() {
  // calling the foursquare places api
  // request =
  return (
    <div>
      <section className="go-back">
        <span>&lt; &nbsp; Back</span>
      </section>
      <section id="search">
        <label for="search-input">
          <i class="fa fa-search" aria-hidden="true"></i>
          <span class="sr-only">Search icons</span>
        </label>
        <input
          id="search-input"
          class="form-control input-lg"
          placeholder="Search icons"
          autocomplete="off"
          spellcheck="false"
          autocorrect="off"
          tabindex="1"
        />
      </section>
      <section className="map"></section>
      <section className="location-save">
        <div className="row"></div>
      </section>
    </div>
  );
}

export default NewLocation;
