import React from "react";
import { Link } from "react-router-dom";

function Activity() {
  return (
    <div>
      <h1>Activity</h1>
      <Link to="/CarDetailing">Chăm sóc siêu xe</Link>
      <Link to="/PaintProtection">Lớp bảo vệ</Link>
    </div>
  );
}
export default Activity;
