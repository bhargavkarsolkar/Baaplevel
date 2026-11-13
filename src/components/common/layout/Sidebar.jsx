
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h2 className="sidebar-title">
        Categories
      </h2>

      <ul className="sidebar-list">
        <li className="sidebar-item active">
          All Products
        </li>

        <li className="sidebar-item">
          Smartphones
        </li>

        <li className="sidebar-item">
          Laptops
        </li>

        <li className="sidebar-item">
          Fashion
        </li>

        <li className="sidebar-item">
          Furniture
        </li>

        <li className="sidebar-item">
          Groceries
        </li>

        <li className="sidebar-item">
          Beauty
        </li>
      </ul>

    </aside>
  );
}

export default Sidebar;
