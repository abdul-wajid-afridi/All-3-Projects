import React from "react";

const List = ({ items }) => {
  return (
    <div>
      {items.map((it) => {
        return (
          <div className="grocey-list">
            <p>{it}</p>
            <div className="btn-cont">
              <button>
                <i className="fas fa-trash btn-trash" />
              </button>
              <button>
                <i className="fas fa-edit btn-edit" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
