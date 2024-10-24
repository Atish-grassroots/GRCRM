import React from "react";
import Index from "../SuperAdmin/dashboard/index";
// import { Switch, Route } from 'react-router-dom'
// user

//extra
// import PrivacyPolicy from '../SuperAdmin/dashboard/extra/privacy-policy';
// import TermsofService from '../SuperAdmin/dashboard/extra/terms-of-service';

//TransitionGroup
// import { TransitionGroup, CSSTransition } from "react-transition-group";
//Special Pages

//admin
import Default from "../layouts/dashboard/default";

// Admin specific imports
import AdminDashboard from "../admin/dashboard/index";

import TLDashboard from "../TeamLeader/dashboard/TLDashboard";

import Agent from "../Agent/dashboard/index";
import ProcessList from "../SuperAdmin/dashboard/Pages/ProcessManagement/ProcessList";
import AddProcess from "../SuperAdmin/dashboard/Pages/ProcessManagement/AddProcess";
import AdminList from "../SuperAdmin/dashboard/Pages/AdminManagement/AdminList";
import AddAdmin from "../SuperAdmin/dashboard/Pages/AdminManagement/AddAdmin";
import UserLiveStatus from "../SuperAdmin/dashboard/Pages/UserManagement/UserLiveStatus";
import UsersList from "../SuperAdmin/dashboard/Pages/UserManagement/UserList";
import AdvisorTimeShare from "../SuperAdmin/dashboard/Pages/Reports/AdvisorTimeShare";
import CallTypeSummaryReport from "../SuperAdmin/dashboard/Pages/Reports/CallTypeSummaryReport";
import InboundReport from "../SuperAdmin/dashboard/Pages/Reports/InboundReport";
import InteractionReport from "../SuperAdmin/dashboard/Pages/Reports/InteractionReport";
import LeadReport from "../SuperAdmin/dashboard/Pages/Reports/LeadReport";
import OutBoundReport from "../SuperAdmin/dashboard/Pages/Reports/OutBoundReport";
import PendingLeadDataReport from "../SuperAdmin/dashboard/Pages/Reports/PendingLeadDataReport";
import TeamLeadList from "../SuperAdmin/dashboard/Pages/TLManagement/TeamLeadList";
import ManageTeamLead from "../SuperAdmin/dashboard/Pages/TLManagement/ManageTeamLead";
import TeamLiveStatus from "../TeamLeader/UserManagement/TeamLiveStatus";
import TAdvisorTimeShare from "../TeamLeader/Reports/TAdvisorTimeShare";
import TCallTypeSummaryReport from "../TeamLeader/Reports/TCallTypeSummaryReport";
import TeamInboundReport from "../TeamLeader/Reports/TeamInboundReport";
import TeamInteractionReport from "../TeamLeader/Reports/TeamInteractionReport";
import TeamLeadReport from "../TeamLeader/Reports/TeamLeadReport";
import TeamOutBoundReport from "../TeamLeader/Reports/TeamOutBoundReport";
import TPendingLeadDataReport from "../TeamLeader/Reports/TPendingLeadDataReport";
import TUserList from "../TeamLeader/UserManagement/TUserList";
import UserProfile from "../SuperAdmin/dashboard/app/user-profile";
import UserAdd from "../SuperAdmin/dashboard/app/user-add";
import UserList from "../SuperAdmin/dashboard/app/user-list";
import TableData from "../admin/dashboard/table/table-data";
import AddUsers from "../SuperAdmin/dashboard/Pages/UserManagement/AddUsers";
import TAddUsers from "../TeamLeader/UserManagement/TAddUsers";

export const DefaultRouter = [
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "superadmin",
        element: <Index />,
      },
      {
        path: "manager/dashboard/processlist",
        element: <ProcessList />,
      },
      {
        path: "manager/dashboard/addprocess",
        element: <AddProcess />,
      },
      {
        path: "manager/dashboard/adminlist",
        element: <AdminList />,
      },
      {
        path: "manager/dashboard/manageadmin",
        element: <AddAdmin />,
      },
      {
        path: "manager/dashboard/manageusers",
        element: <AddUsers />,
      },
      {
        path: "manager/dashboard/userlist",
        element: <UsersList />,
      },
      {
        path: "manager/dashboard/manageteamlead",
        element: <TeamLeadList />,
      },
      {
        path: "manager/dashboard/updateteamlead",
        element: <ManageTeamLead />,
      },
      {
        path: "manager/dashboard/userlivestatus",
        element: <UserLiveStatus />,
      },
      {
        path: "manager/dashboard/advisortimeshare",
        element: <AdvisorTimeShare />,
      },
      {
        path: "manager/dashboard/calltypesummary",
        element: <CallTypeSummaryReport />,
      },
      {
        path: "manager/dashboard/inboundreport",
        element: <InboundReport />,
      },
      {
        path: "manager/dashboard/interactionreport",
        element: <InteractionReport />,
      },
      {
        path: "manager/dashboard/leadreport",
        element: <LeadReport />,
      },
      {
        path: "manager/dashboard/outboundreport",
        element: <OutBoundReport />,
      },
      {
        path: "manager/dashboard/pendingleaddata",
        element: <PendingLeadDataReport />,
      },

      /////////////////////////////////////////////////////////////////////
      // Team Leader
      {
        path: "teamleader/dashboard/t-userlist",
        element: <TUserList />,
      },
      {
        path: "teamleader/dashboard/t-manageusers",
        element: <TAddUsers />,
      },
      {
        path: "teamleader/dashboard/t-userlivestatus",
        element: <TeamLiveStatus />,
      },
      {
        path: "teamleader/dashboard/t-advisortimeshare",
        element: <TAdvisorTimeShare />,
      },
      {
        path: "teamleader/dashboard/t-calltypesummary",
        element: <TCallTypeSummaryReport />,
      },
      {
        path: "teamleader/dashboard/t-inboundreport",
        element: <TeamInboundReport />,
      },
      {
        path: "teamleader/dashboard/t-interactionreport",
        element: <TeamInteractionReport />,
      },
      {
        path: "teamleader/dashboard/t-leadreport",
        element: <TeamLeadReport />,
      },
      {
        path: "teamleader/dashboard/t-outboundreport",
        element: <TeamOutBoundReport />,
      },
      {
        path: "teamleader/dashboard/t-pendingleaddata",
        element: <TPendingLeadDataReport />,
      },
      ////////////////////////////////////////////////////////////////////////////

     
      {
        path: "manager/dashboard/user-profile",
        element: <UserProfile />,
      },
      {
        path: "manager/dashboard/user-add",
        element: <UserAdd />,
      },
      {
        path: "manager/dashboard/user-list",
        element: <UserList />,
      },
      // {
      //   path: "superadmin/dashboard/admin/admin",
      //   element: <Admin />,
      // },
      // Widget
      {
        path: "manager",
        element: <AdminDashboard />,
      },

      {
        path: "manager/dashboard/table/table-data",
        element: <TableData />,
      },

      // Admin specific routes
      {
        path: "teamleader",
        element: <TLDashboard />,
      },
      {
        path: "agent",
        element: <Agent />,
      },
    ],
  },
];
