/* eslint-disable react/prop-types */
import deleteLogo from "../assets/SVGs/delete.svg";
import paint from "../assets/SVGs/paint2.svg";
// import Card from "./Card";

const Cards = ({
  id,
  taskName,
  description,
  bgColor,
  discColor,
  setIsOpen,
  setTaskId,
}) => {
  const currentBG = bgColor ? bgColor : "#FFFFFF"; //"#99ff99";
  const currentDiscBG = discColor ? discColor : "#FEF08A"; //"#99ff99";

  function handlePopup(taskId) {
    setTaskId(taskId);
    setIsOpen("visible");
    console.log(taskId);
  }
  return (
    <>
      <div
        style={{ backgroundColor: currentBG }}
        className="max-w-56 rounded-xl text-black pt-2 px-2 pb-1 m-1 border-black border-[1px]"
      >
        <div className="flex justify-between">
          <h1>{taskName ? taskName : "New Task"}</h1>
        </div>

        <h1
          style={{ backgroundColor: currentDiscBG }}
          className="flex justify-center items-center rounded-md p-1 border-black border-[1px]"
        >
          {description ? description : "Description"}
        </h1>
        <div className="flex items-center mt-1 justify-between">
          <button
            onClick={() => handlePopup(id)}
            className="px-[5px] py-[1px] bg-green-400 hover:border-blue-600 border-[1px] rounded-lg border-black"
          >
            Edit
          </button>
          <div className="flex w-[32.5%] justify-around items-center">
            <button className="bg-yellow-400 rounded-full w-[40%] flex justify-center items-center border-black border-[1px]">
              <img src={paint} alt="Logo" />
            </button>
            <button className="bg-red-400 rounded-full w-[40%] flex justify-center items-center border-black border-[1px]">
              <img src={deleteLogo} alt="Logo" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
