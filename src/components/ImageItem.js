import moment from "moment";
import React from "react";

const ImageItem = ({ item }) => {
  return (
    <div className="col col-sm-6" key={item}>
      <div
        className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
        style={{ backgroundImage: `url("${item.urls.regular}")` }}
      >
        <div className="d-flex flex-column h-100 p-2 pb-3 text-white text-shadow-1">
          <div className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"></div>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <img
                src={`${item.user.profile_image.small}`}
                alt="Bootstrap"
                width="32"
                height="32"
                className="rounded-circle border border-white"
              />
            </li>
            <li className="d-flex align-items-center me-3">
              <svg className="bi me-2" width="1em" height="1em"></svg>
              <small>
                <b>{item.user.name}</b>
              </small>
            </li>
            <li className="d-flex align-items-center">
              <svg className="bi me-2" width="1em" height="1em"></svg>
              <small>{moment(item.created_at).format("MMMM DD, YYYY")}</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageItem;
