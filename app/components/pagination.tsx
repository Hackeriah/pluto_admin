

const Pagination = ({ currentPage, totalPages, nextPage, prevPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-8 gap-4">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className="bg-gray-300 px-4 py-2 rounded-lg disabled:opacity-50"
      >
        &lt; Previous
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`${
            currentPage === number ? "bg-blue-500 text-white" : "bg-gray-300"
          } px-4 py-2 rounded-lg`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className="bg-gray-300 px-4 py-2 rounded-lg disabled:opacity-50"
      >
        Next &gt;
      </button>
    </div>
  );
};

export default Pagination;
