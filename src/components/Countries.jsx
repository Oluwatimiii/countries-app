import React, { useState, useEffect } from "react";
import CountryDetail from "./CountryDetail";
import { Link } from "react-router-dom";
import { Puff } from "react-loader-spinner";
import ReactPaginate from "react-paginate";

function Countries({ countries, isLoading }) {
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    // 👇️ scroll to top on page load
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const countriesPerPage = 28;
  const pagesVisited = pageNumber * countriesPerPage;

  const displayCountries = countries
    .slice(pagesVisited, pagesVisited + countriesPerPage)
    .map((country, index) => (
      <Link to="/details" state={country} key={index}>
        <CountryDetail
          title={country.name?.common}
          image_url={country?.flags?.svg}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      </Link>
    ));

  const pageCount = Math.ceil(countries.length / countriesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected)
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }; 

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center font-bold pt-[5rem]">
          <Puff
            height="80"
            width="80"
            radius={1}
            color="#4fa94d"
            ariaLabel="puff-loading"
            wrapperClass="loading"
            visible={true}
          />
        </div>
      )}
      <div>
        <div className="container mx-auto mb-16 px-4 md:px-8 grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6">
          {displayCountries}
        </div>
        <ReactPaginate
          previousLabel={"< Prev"}
          nextLabel={"Next >"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagBtns"}
          previousLinkClassName={"prevBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  );
}

export default Countries;
