import axios from "axios";
import { useEffect, useState, useRef } from "react";
import useLazyLoad from "../hooks/useLazyLoading";
import ProfileLoader from "./loading/ProfileLoader";
import Profile from "./Profile";
import clsx from "clsx";

const baseURL = "https://jsonplaceholder.typicode.com/users?_limit=9";

const NUM_PER_PAGE = 6;
const TOTAL_PAGES = 3;

const ProfileGrid = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setUsers(res.data);
    });
  }, []);

  const triggerRef = useRef(null);
  const onGrabData = (currentPage) => {
    // This would be where you'll call your API
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = users.slice(
          ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
          NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
        );
        resolve(data);
      }, 1500);
    });
  };
  const { data, loading } = useLazyLoad({ triggerRef, onGrabData });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((user, i) => {
          return <Profile key={i} user={user} />;
        })}
      </div>
      <div
        ref={triggerRef}
        className={clsx(
          "trigger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4",
          { visible: loading }
        )}
      >
        {Array(6)
          .fill(0)
          .map((user, i) => (
            <ProfileLoader key={i} />
          ))}
      </div>
    </>
  );
};

export default ProfileGrid;
