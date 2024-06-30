import { FC, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import ContentLayout from "../../../layouts/contentLayout/ContentLayout";
import { Button, Offcanvas } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { PiBankBold } from "react-icons/pi";
import "../css/navbar.css";
interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loginState=pathname.split('/').includes('login')
  return (
    <>
      {/* <ContentLayout fluid={true}> */}
      <div className="container-fluid nav_section">
        <div className="row ">
          <div className="col-12  logo_container py-2">
            <span>
              <PiBankBold color="#173a6e" />
            </span>

            <p className="logo">IBI BANK</p>
          </div>
          <div className="col-12   burger">
            <span>
              <PiBankBold color="#173a6e" />
            </span>
            <Button className="p-3 btn" onClick={handleShow}>
              <FaBars color="#173a6e" />
            </Button>
          </div>
          <div className="col-8 py-1  justify-content-center menu">
            <Nav
              activeKey="/"
              onSelect={(selectedKey) => navigate(`/${selectedKey}`)}
            >
              <Nav.Item>
                <Nav.Link className="login px-3" eventKey="">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="login px-3" eventKey="about">
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="login px-3" eventKey="contact">
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="col-4  justify-content-center login_container">
            <Nav onSelect={(selectedKey) => navigate(`/${selectedKey}`)}>
              <Nav.Item>
                <Nav.Link className="login px-3" eventKey={loginState==true ? 'register' :'login'} >
                 {loginState==true ? 'Join' :'login'} 
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
        <Offcanvas show={show} onHide={handleClose} scroll backdrop={false}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasScrollingLabel">
              Offcanvas with body scrolling
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p>
              Try scrolling the rest of the page to see this option in action.
            </p>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      {/* </ContentLayout> */}
    </>
  );
};

export default NavBar;
