

const ModalSection = ({ children, title, className = "" }) => {
  return (
    <div className={`h-fit w-full border-b-2 gap-[2vh] flex flex-col py-2 px-4 ${className}`}>
      <p className="">{title}</p>
      {children}
    </div>
  );
};

export default ModalSection;
