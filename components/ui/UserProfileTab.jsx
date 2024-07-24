import React from "react";
import { Card } from "antd";

const UserProfileTab = () => {
  return (
    <div>
      <Card title="User Info">
        <div className=" flex flex-col gap-y-5 text-lg">
          <div className=" flex items-center gap-x-20  ">
            <p>
              <span className=" font-semibold">First Name :</span> John{" "}
            </p>
            <p>
              {" "}
              <span className=" font-semibold">Last Name : </span> Doe{" "}
            </p>
          </div>
          <p>
            {" "}
            <span className=" font-semibold">Email :</span> johndoe@example.com
          </p>

          <div className=" flex items-center gap-x-5 mb-2">
            <p>
              {" "}
              <span className=" font-semibold">Requests :</span> 5
            </p>
            <p>
              {" "}
              <span className=" font-semibold">Reviews : </span> 5
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserProfileTab;
