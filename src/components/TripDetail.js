import React from "react";
import tripsData from "../tripsData";
import { useParams, Navigate } from "react-router-dom";

function TripDetail() {
  const { tripSlug } = useParams();
  const trip = tripsData.find((trip) => trip.slug == tripSlug);
  if (!trip) {
    return <Navigate to="/" />;
  }

  return (
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                  {trip.name}
                </h2>
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                <img
                  className="img-fluid rounded mb-5"
                  src={trip.img}
                  alt="..."
                />
                <p className="mb-4">
                  City : {trip.city}
                  <br />
                  Length : {trip.length1}Km
                  <br />
                  Rating : {trip.rating}
                  <br />
                  Difficulty : {trip.difficulty}
                  <br />
                  Details : {trip.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripDetail;
