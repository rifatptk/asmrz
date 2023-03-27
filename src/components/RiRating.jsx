import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import assets from "../assets/assets";

export default function RiRating() {
  const [rating, setrating] = useState(0);
  const [isSubmitted, setisSubmitted] = useState(false);

  function handleFormSubmitted(e) {
    e.preventDefault();
    setisSubmitted(true);
  }
  return !isSubmitted ? (
    <form
      onSubmit={handleFormSubmitted}
      className="bg-gray-900 py-20 grid place-items-center"
    >
      <div className="w-[400px] h-[388px] p-10 bg-gray-800 rounded-2xl flex flex-col gap-5">
        <span className="bg-gray-700 p-2 w-fit rounded-full">
          <AiFillStar className="text-orange-500 text-2xl" />
        </span>

        <h2 className="font-semibold text-xl">How did you do?</h2>
        <p className="text-gray-400">
          Please let us know how we did with you support request. All feedback
          is appreciated to help us improve our offering.
        </p>

        <div className="flex gap-2 justify-between">
          {[...Array(5).keys()].map((el) => (
            <button
              key={el}
              type="button"
              onClick={() => setrating(el + 1)}
              className={`bg-gray-700 hover:bg-gray-600 active:bg-orange-500 ${
                rating === el + 1 && "bg-orange-500 hover:bg-orange-500/80"
              } font-bold w-12 h-12 rounded-full`}
            >
              {el + 1}
            </button>
          ))}
        </div>

        <button className="w-full bg-white hover:bg-gray-50 active:bg-gray-200  text-orange-500 font-bold p-2 rounded-full ">
          Submit
        </button>
      </div>
    </form>
  ) : (
    <div className="bg-gray-900 py-20 grid place-items-center">
      <div className="w-[400px] h-[388px] p-10 bg-gray-800 rounded-2xl flex flex-col gap-4">
        <img src={assets.images.discuss} alt="" className="w-full" />
        <h2 className="text-xl font-semibold">Thank you</h2>
        <p className="text-sm text-gray-400">
          Thank you for your valueable Review
        </p>
        <button
          onClick={() => setisSubmitted(false)}
          className="w-full bg-white hover:bg-gray-50 active:bg-gray-200  text-red-500 font-bold p-2 rounded-full "
        >
          Go back
        </button>
      </div>
    </div>
  );
}
