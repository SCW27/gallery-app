import React, { useState, useEffect } from "react";
import { searchAction } from "../api/unsplash";

const SearchPanel = ({ setResults, setLoading }) => {
  // STATES
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("Technology");
  const [perPage, setPerPage] = useState(15);
  const [totalPages, setTotalPages] = useState(1);
  const [orderBy, setOrderBy] = useState("relevant");
  const [totalResults, setTotalResults] = useState(1);
  const [navPages, setNavPages] = useState([]);
  // STATES

  // HOOKS EVENTS
  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPage, page, orderBy]);

  useEffect(() => {
    generateTotalPages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPages, page]);
  // HOOKS EVENTS

  // FUNCTIONS
  const search = async () => {
    setLoading(true);
    await searchAction(searchTerm, perPage, page, orderBy)
      .then((res) => {
        setResults(res.data.results);
        setTotalPages(res.data.total_pages);
        setTotalResults(res.data.total);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  const generateTotalPages = () => {
    let i = 1;
    let pages = [];
    // SET LIMIT FOR ITEMS THAT HAS TOO MANY RESULTS
    const limit = totalPages > 25 ? 25 : totalPages;
    while (i <= limit) {
      pages.push(
        <li
          className={`page-item ${
            page.toString() === i.toString() ? "active" : ""
          }`}
          key={i}
        >
          <a
            className="page-link"
            href="#/"
            data-value={i}
            onClick={(e) => {
              setPage(e.target.getAttribute("data-value"));
            }}
          >
            {i}
          </a>
        </li>
      );
      i++;
    }

    setNavPages(pages);
  };
  // FUNCTIONS
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <div className="mb-3 ">
            <label htmlFor="searchInput" className="form-label">
              Search
            </label>
            <input
              type="text"
              className="form-control"
              id="searchInput"
              placeholder="Search..."
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              value={searchTerm}
            />
          </div>
        </div>
        <div className="col-1">
          <div className="mb-3 ">
            <label htmlFor="per-page-input" className="form-label">
              Per Page
            </label>
            <select
              className="form-select"
              aria-label="per-page-input"
              id="per-page-input"
              onChange={(e) => {
                setPerPage(e.target.value);
              }}
              value={perPage}
            >
              <option value="5">5</option>
              <option value="15">15</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
        <div className="col-2">
          <div className="mb-3 ">
            <label htmlFor="per-page-input" className="form-label">
              Order By
            </label>
            <select
              className="form-select"
              aria-label="per-page-input"
              id="per-page-input"
              value={orderBy}
              onChange={(e) => {
                setOrderBy(e.target.value);
              }}
            >
              <option value="relevant">Relevant</option>
              <option value="latest">Latest</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-1">
            <div className="mb-3 text-left">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setPage(1);
                  setOrderBy("relevant");
                  search();
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label>Showing Results for {searchTerm}</label>
            <br />
            <label>
              Results {totalPages > 25 ? totalPages * perPage : totalResults}
            </label>
          </div>
          <div className="col-12">
            <nav aria-label="Page navigation" className="mt-4">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a
                    className="page-link"
                    href="#/"
                    onClick={() => {
                      if (page > 1) {
                        setPage(page - 1);
                      }
                    }}
                  >
                    Previous
                  </a>
                </li>
                {navPages}
                <li className="page-item">
                  <a
                    className="page-link"
                    href="#/"
                    onClick={() => {
                      if (page < navPages.length) {
                        setPage(page + 1);
                      }
                    }}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
