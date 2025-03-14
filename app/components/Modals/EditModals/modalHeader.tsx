import { IoCloseSharp } from 'react-icons/io5';

const ModalHeader = ({ title, closeModal, currentPage, totalPages }) => {
  const renderPageDots = () => {
    return [...Array(totalPages)].map((_, index) => (
      <span
        key={index}
        className={`h-2 w-2 rounded-full ${index + 1 === currentPage ? 'bg-green-500' : 'bg-gray-400'}`}
      ></span>
    ));
  };

  return (
    <div className="flex text-gray-600 justify-between items-center py-2 border-b-2 px-10">
      <h2 className="text-[1.3vw] font-semibold text-black">{title}</h2>
      <div className="flex gap-2">{renderPageDots()}</div>
      <button onClick={closeModal}>
        <IoCloseSharp className="text-4xl" />
      </button>
    </div>
  );
};

export default ModalHeader;
