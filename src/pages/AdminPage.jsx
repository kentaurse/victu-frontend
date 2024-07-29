import React from "react";
import MealsInputsFields from "../components/AdminComponents/MealsInputsFields/MealsInputsFields";
import MoveInputsFields from "../components/AdminComponents/MoveInputsFields/MoveInputsFields";
import NotifFields from "../components/AdminComponents/NotifFields/NotifFields";
import "../styles/adminPageStyle.css";

const AdminPage = () => {
  return (
    <div className="admin">
      <div className="admin-content">
        <div className="admin-title">Admin Panel</div>

        <MealsInputsFields />
        <MoveInputsFields />
        <NotifFields />
      </div>
    </div>
  );
};

export default AdminPage;
