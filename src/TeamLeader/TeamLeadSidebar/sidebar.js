import React, { useEffect, memo, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TLsidebar from './TLsidebar';
import AdminNav from '../../admin/dashboard/sidebar/vertical-nav';
import SuperAdminNav from '../../SuperAdmin/dashboard/sidebar/vertical-nav';
// import Agent from '../layouts/dashboard/dual-horizontal'

//scrollbar
import Scrollbar from "smooth-scrollbar";

// Import selectors & action from setting store
import * as SettingSelector from "../../store/setting/selectors";

// Redux Selector / Action
import { useSelector } from "react-redux";

// import SidebarDark from '../../components/settingoffcanvas'

// export const SidebarDark =() =>{

// }

const Sidebar = memo((props) => {
    const sidebarColor = useSelector(SettingSelector.sidebar_color);
    const sidebarHide = useSelector(SettingSelector.sidebar_show); // array
    const sidebarType = useSelector(SettingSelector.sidebar_type); // array
    const sidebarMenuStyle = useSelector(SettingSelector.sidebar_menu_style);
    const currentLocation = useLocation();

    const getRoleFromPath = (path) => {
        if (path.startsWith('/superadmin')) return 1;
        if (path.startsWith('/manager')) return 2;
        if (path.startsWith('/teamleader')) return 3;
        if (path.startsWith('/agent')) return 4;
        return 0;
    };

    const role = getRoleFromPath(currentLocation.pathname);

    const minisidebar = () => {
        document.getElementsByTagName("ASIDE")[0].classList.toggle("sidebar-mini");
    };

    useEffect(() => {
        Scrollbar.init(document.querySelector("#my-scrollbar"));

        window.addEventListener("resize", () => {
            const tabs = document.querySelectorAll(".nav");
            const sidebarResponsive = document.querySelector(
                '[data-sidebar="responsive"]'
            );
            if (window.innerWidth < 1025) {
                Array.from(tabs, (elem) => {
                    if (
                        !elem.classList.contains("flex-column") &&
                        elem.classList.contains("nav-tabs") &&
                        elem.classList.contains("nav-pills")
                    ) {
                        elem.classList.add("flex-column", "on-resize");
                    }
                    return elem.classList.add("flex-column", "on-resize");
                });
                if (sidebarResponsive !== null) {
                    if (!sidebarResponsive.classList.contains("sidebar-mini")) {
                        sidebarResponsive.classList.add("sidebar-mini", "on-resize");
                    }
                }
            } else {
                Array.from(tabs, (elem) => {
                    if (elem.classList.contains("on-resize")) {
                        elem.classList.remove("flex-column", "on-resize");
                    }
                    return elem.classList.remove("flex-column", "on-resize");
                });
                if (sidebarResponsive !== null) {
                    if (
                        sidebarResponsive.classList.contains("sidebar-mini") &&
                        sidebarResponsive.classList.contains("on-resize")
                    ) {
                        sidebarResponsive.classList.remove("sidebar-mini", "on-resize");
                    }
                }
            }
        });
    }, []);

    const getRoleLink = (role) => {
        switch (role) {
            case 1: return "/superadmin";
            case 2: return "/manager";
            case 3: return "/teamleader";
            case 4: return "/agent";
            default: return "/";
        }
    };

    return (
        <Fragment>
            <aside
                className={` ${sidebarColor} ${sidebarType.join(" ")} ${sidebarMenuStyle} ${sidebarHide.join(" ") ? 'sidebar-none' : 'sidebar'}   sidebar-base  `}
                data-sidebar="responsive"
            >
                <div className="d-flex align-items-center justify-content-start">
                    <Link to={getRoleLink(role)} className="navbar-brand">
                    <img className=""
                            src="../GrLogo.png" 
                            alt=""
                            style={{ width: "180px" }}
                        />
                        {/* <Logo /> */}
                        {/* <h4 className="logo-title">{props.app_name}</h4> */}
                    </Link>
                    <div
                        className="sidebar-toggle"
                        data-toggle="sidebar"
                        data-active="true"
                        onClick={minisidebar}
                    >
                        <i className="icon">
                            <svg
                                width="20"
                                className="icon-20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.25 12.2744L19.25 12.2744"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </i>
                    </div>
                </div>
                <div
                    className="pt-0 sidebar-body data-scrollbar"
                    data-scroll="1"
                    id="my-scrollbar"
                >
                    {/* sidebar-list class to be added after replace css */}
                    <div className="sidebar-list navbar-collapse" id="sidebar">
                        {role === 1 && <SuperAdminNav />}
                        {role === 2 && <AdminNav />}
                        {role === 3 && <TLsidebar />}
                        
                        {/* Add other roles and their respective components here */}
                    </div>
                </div>
                <div className="sidebar-footer"></div>
            </aside>
        </Fragment>
    );
});

export default Sidebar;