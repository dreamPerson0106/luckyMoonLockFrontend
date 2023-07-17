import React from "react";
import { useSelector } from "react-redux";

function ViewLocked() {
  const { font, fontHolder } = useSelector((state) => state.theme);
  return (
    <>
      <p className={`mb-8`}>
        Please be aware only the liquidity token are locked. Not the actual
        dollar value. This changes as people trade. More liquidity token are
        also minted as people add liquidity to the pool.
      </p>
      <div className="flex justify-center gap-36">
        <div className="text-center">
          <p className={`text-lg text-[${fontHolder}]`}>Value</p>
          <p className={`text-lg text-[bg-green-600] mt-2`}>$0</p>
          <p className="text-sm mt-2">0 univ 2</p>
        </div>
        <div className="text-center">
          <p className={`text-lg text-[${fontHolder}]`}>Unlock Date</p>
          <p className={`text-lg text-[${font}] mt-2`}>in 2 minutes</p>
          <p className="text-sm mt-2">09/06/2023 : 05:33</p>
        </div>
      </div>
    </>
  );
}

export default ViewLocked;
