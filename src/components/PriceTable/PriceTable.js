import React from "react";
import "./PriceTable.css";

const PriceTable = () => {
  return (
    <div>
      <h1 class="text-center">Choose Your Dedicated Team</h1>
      <div class="container mb-5 mt-5">
        <div class="row mx-0 card-deck flex-column flex-md-row mb-3">
          <div class="col-lg-4 col-md-6 col-sm-12 p-0">
            <div class="cardBorder card card-pricing text-center px-3 md-4">
              <span class="mt-4">
                <h3>$199</h3>
              </span>
              <p>For Preferred</p>
              <span class="hrTag"></span>
              <div class="size card-body pt-0">
                <p>Homepage</p>
                <p>No Inner Page</p>
                <p>Asset file</p>
                <p>Source File</p>
                <p>Free Stock Photos</p>
                <p>10 Days Free Support</p>
                <p>24/7 Support</p>
                <button class="button customButton neutral">Order Now</button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 p-0">
            <div class="cardBorder card card-pricing text-center px-3 md-4">
              <span class="mt-4">
                <h3>$399</h3>
              </span>
              <p>For Preferred</p>
              <span class="hrTag"></span>
              <div class="size card-body pt-0">
                <p>Homepage</p>
                <p>4 Inner Page</p>
                <p>Asset file</p>
                <p>Source File</p>
                <p>Free Stock Photos</p>
                <p>20 Days Free Support</p>
                <p>24/7 Support</p>
                <button class="button customButton neutral">Order Now</button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 p-0">
            <div class="cardBorder card card-pricing text-center px-3 md-4">
              <span class="mt-4">
                <h3>$599</h3>
              </span>
              <p>For Preferred</p>
              <span class="hrTag"></span>
              <div class="size card-body pt-0">
                <p>Homepage</p>
                <p>No Inner Page</p>
                <p>Asset file</p>
                <p>Source File</p>
                <p>Free Stock Photos</p>
                <p>30 Days Free Support</p>
                <p>24/7 Support</p>
                <button class="button customButton neutral">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceTable;
