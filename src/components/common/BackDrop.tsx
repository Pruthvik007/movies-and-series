import Loader from "./Loader";

const BackDrop = () => {
  return (
    <div className="w-screen h-screen bg-transparent flex justify-center items-center">
      <Loader size="lg" />
    </div>
  );
};

export default BackDrop;
