import { useEffect, useState } from "react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  const [issearchopen, setIsSearchOpen] = useState(false);
  const [isprofileopen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/*logo*/}
        <img src={logo} alt="Netflix Logo" className={styles.logo} />
        {/*navigation links*/}
        <nav className={styles.nav}>
          <Link className={styles.navlink} to="/">
            New & Popular
          </Link>
          <Link className={styles.navlink} to="/my-list">
            My List
          </Link>
          <Link className={styles.navlink} to="/browse">
            Browse by Languages
          </Link>
          <Link className={styles.navlink} to="/tv">
            TV shows
          </Link>
          <Link className={styles.navlink} to="/movies">
            Movies
          </Link>
          <Link className={styles.navlink} to="/home">
            Home
          </Link>
        </nav>
        {/*right side sections*/}
        <div className={styles.rightSection}>
          {/*search icon*/}
          <div className={styles.searchcontainer}>
            <button
              onClick={() => setIsSearchOpen(!issearchopen)}
              className={styles.searchbutton}
            >
              {/*search icon for searching content on the platform*/}
              <Search />
            </button>
            {issearchopen && (
              <input
                type="text"
                placeholder="Search..."
                className={styles.searchinput}
              />
            )}
          </div>
          {/*notification icon*/}
          <div>
            <button className={styles.iconbutton}>
              {/*notification bell icon with badge for new notifications*/}
              <Bell />
              <span className={styles.badge}>4</span>
            </button>
          </div>
          {/*profile icon*/}
          <div className={styles.profilecontainer}>
            <button
              onClick={() => setIsProfileOpen(!isprofileopen)}
              className={styles.profilebutton}
            >
              {/*user profile picture or icon*/}
              <div className={styles.profileavatar}>
                <User />
              </div>
              <ChevronDown />
              {/*dropdown menu with profile options*/}
            </button>
            {isprofileopen && (
              <div className={styles.profiledropdown}>
                <Link to="/profile">account</Link>
                <Link to="/help center">help center</Link>
                <hr className={styles.profiledropdowndivider} />
                <button>logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

