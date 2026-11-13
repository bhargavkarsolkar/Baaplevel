
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-logo">
        ShopEase
      </div>

      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for products..."
        />
        <button type="button">⌕</button>
      </div>

      <div className="navbar-actions">

        <div className="navbar-account">
          <span>♙</span>
          <p>Account</p>
        </div>

        <div className="navbar-wishlist">
          <span>♡</span>
          <p>Wishlists</p>
        </div >
        <div className="navbar-notifications">
<span>🔔</span>
        </div>
        <div className="navbar-cart">
          <span>🛒</span>
          <p>Cart</p>
        </div>

      </div>

    </header>
  );
}

export default Navbar;
