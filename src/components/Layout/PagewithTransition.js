import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";

const PagewithTransition = ({ children }) => {
  // const router = useRoutes();
  const location = useLocation();
  const [transitioning, setTransitioning] = useState(false);
  console.log(transitioning);

  useEffect(() => {
    // 👇 this handler will create a transition effect between route changes,
    // so that it doesn't automatically display the next screen.
    const handler = () => {
      setTransitioning(true);
      setTimeout(() => {
        setTransitioning(false);
      }, 100);
    };
    return () => {
      handler();
    };
  }, [location]);

  return (
    <div className={!transitioning ? "animate-slideUpEnter" : ""}>
      {!transitioning ? children : <Loading />}
    </div>
  );
};

export default PagewithTransition;
