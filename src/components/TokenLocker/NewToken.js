import React from "react";
import { CopyIcon, UploadArrowIcon, WarningIcon } from "../../assets/Icons";
import { useSelector } from "react-redux";

const NewToken = () => {
  const { font, fontHolder, backgroundHolder, button } = useSelector(
    (state) => state
  );
  return (
    <>
      <div className={`flex justify-between items-start font-[${font}]`}>
        <div>
          <h5 className="inline-flex gap-2 items-center font-semibold">
            0 USDC <WarningIcon />
          </h5>
          <p className={`text-[${fontHolder}]`}>
            Unlock: a few seconds ago | 16 Jun 2023 07:55
          </p>
        </div>
        <div className="inline-flex gap-5 items-center">
          <button
            className={`flex items-center gap-2 font-semibold text-[${button}] hover:text-[${fontHolder}]`}
          >
            Edit{" "}
            <UploadArrowIcon
              color={font}
              className={`fill-current text-[${button}] hover:text-[${fontHolder}]`}
            />
          </button>
          <button>
            <CopyIcon
              className={`fill-current text-[${button}] hover:text-[${fontHolder}]`}
            />
          </button>
          <button className={`text-[${button}] hover:text-[${fontHolder}]`}>
            X
          </button>
        </div>
      </div>
      <button
        className={`bg-[${backgroundHolder}] inline-flex items-center gap-2 justify-center py-2 rounded-md text-[${fontHolder}] w-28`}
      >
        Unlocker
        <WarningIcon />
      </button>
    </>
  );
};

export default NewToken;
