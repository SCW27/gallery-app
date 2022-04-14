import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const list = [1, 2, 3, 4, 5, 6];

  return (
    <div className="App">
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Custom cards</h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          {list.map((item) => {
            return (
              <div className="col col-sm-6" key={item}>
                <div
                  className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                  style={{ backgroundImage: 'url("unsplash-photo-1.jpg")' }}
                >
                  <div className="d-flex flex-column h-100 p-2 pb-3 text-white text-shadow-1">
                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                      Short title, long jacket
                    </h2>
                    <ul className="d-flex list-unstyled mt-auto">
                      <li className="me-auto">
                        <img
                          src="https://github.com/twbs.png"
                          alt="Bootstrap"
                          width="32"
                          height="32"
                          className="rounded-circle border border-white"
                        />
                      </li>
                      <li className="d-flex align-items-center me-3">
                        <svg className="bi me-2" width="1em" height="1em"></svg>
                        <small>Earth</small>
                      </li>
                      <li className="d-flex align-items-center">
                        <svg className="bi me-2" width="1em" height="1em"></svg>
                        <small>3d</small>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
