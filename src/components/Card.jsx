import React from "react";

const Card = ({ item }) => {
  return (
    <div>
      <div className="col">
        <div className="card text-white bg-danger mb-3 text-center">
          <div className="card-body">
            <h3>{`${item.texto}`}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
