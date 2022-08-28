import React from "react";
import "./ExploreByCommodity.css";

const ExploreByCommodity = () => {
  return (
    <div>
      <div className="container" id="ebchead">
        Explore By Commodity
      </div>
      <div className="row align-items-start">
        <div className="comcolumn col-3">
          <button type="button" class="btn btn-dark" id="comwheat">
            WHEAT
          </button>
        </div>
        <div className="comcolumn col-3">
          <button type="button" class="btn btn-dark" id="comwheat">
            RICE
          </button>
        </div>
        <div className="comcolumn col-3">
          <button type="button" class="btn btn-dark" id="comwheat">
            POTATO
          </button>
        </div>
        <div className="comcolumn col-3">
          <button type="button" class="btn btn-dark" id="comwheat">
            PEPPER
          </button>
        </div>
      </div>
      <div className="row align-items-start">
        <div className="comcolumn col-3">
        <button type="button" class="btn btn-dark" id="comwheat">BARLEY</button>
        </div>
        <div className="comcolumn col-3">
        <button type="button" class="btn btn-dark" id="comwheat">
            <img src="/Images/Sugar-cube-34345345.svg" height="60px" width="60px" alt="" />
            SUGAR
            </button>
        </div>
        <div className="comcolumn col-3">
        <button type="button" class="btn btn-dark" id="comwheat">GARLIC</button>
        </div>
        <div className="comcolumn col-3">
        <button type="button" class="btn btn-dark" id="comwheat">PAPAYA</button>
        </div>
      </div>
      <div className="row align-items-start">
        <div className="comcolumn col-3">
        <button type="button" class="btn btn-dark" id="comwheat">MAIZE</button>
        </div>
        <div className="comcolumn col-3">
        <button type="button" class="btn btn-dark" id="comwheat">TOMATO</button>
        </div>
        <div className="comcolumn col-3">
        <button type="button" class="btn btn-dark" id="comwheat">CHILLY</button>
        </div>
        <div className="comcolumn col-3">
        <button type="button" class="btn btn-dark" id="comwheat">CAPSICUM</button>
        </div>
      </div>
    </div>
  );
};

export default ExploreByCommodity;
