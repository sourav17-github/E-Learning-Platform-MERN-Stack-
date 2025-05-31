import { NavLink, Outlet, Navigate } from "react-router-dom";
import { FaUser, FaMessage } from "react-icons/fa6";
import { FaHome, FaRegListAlt } from "react-icons/fa";
import { Navbar } from "../Navbar";
import { useAuth } from "../../store/auth";

export const AdminLayout = () => {
  const { user, isLoading } = useAuth(); 
  console.log("admin layout ", user);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Navbar />
      <header style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "200px",
        backgroundColor: "transparent",
        padding: "20px 0"
      }}>
        <div className="container">
          {/* Static header text */}
          
          {/* Navigation below the header */}
          <nav>
            <ul style={{
              listStyleType: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column"
            }}>
              <li style={{ margin: "100px 0 0px 0" }}>
                <NavLink to="/" style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "23px",
                  padding: "0px 20px"
                }}>
                  <FaHome style={{ marginRight: "10px" }} /> Home
                </NavLink>
              </li>
              <li style={{ margin: "15px 0" }}>
                <NavLink to="/admin/users" style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "23px",
                  padding: "0px 20px"
                }}>
                  <FaUser style={{ marginRight: "10px" }} /> Users
                </NavLink>
              </li>
              <li style={{ margin: "15px 0" }}>
                <NavLink to="/admin/contacts" style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "23px",
                  padding: "0px 20px"
                }}>
                  <FaMessage style={{ marginRight: "10px" }} /> Contacts
                </NavLink>
              </li>
              <li style={{ margin: "15px 0" }}>
                <NavLink to="/service" style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "23px",
                  padding: "0px 20px"
                }}>
                  <FaRegListAlt style={{ marginRight: "10px" }} /> Services
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Main content offset to the right of the sidebar */}
      <div style={{ marginLeft: "220px", padding: "20px" }}>
        <Outlet />
      </div>
    </>
  );
};
