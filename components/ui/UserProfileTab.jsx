import React from "react";
import { Card } from "antd";

const UserProfileTab = ({ user }) => {
  return (
    <div>
      <Card title="User Info">
        <div className=" flex flex-col gap-y-5 text-lg">
          <div className=" flex items-center gap-x-20  ">
            <p>
              <span className=" font-semibold">First Name :</span>{" "}
              {user?.firstname}
            </p>
            <p>
              {" "}
              <span className=" font-semibold">Last Name : </span>{" "}
              {user?.lastname}
            </p>
          </div>
          <p>
            {" "}
            <span className=" font-semibold">Email :</span> {user?.email}
          </p>

          <div className=" flex items-center gap-x-5 mb-2">
            <p>
              {" "}
              <span className=" font-semibold">Requests :</span>{" "}
              {user?.requests?.length}
            </p>
            <p>
              {" "}
              <span className=" font-semibold">Reviews : </span>{" "}
              {user?.reviews?.length}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserProfileTab;
