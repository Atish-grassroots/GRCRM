import React from 'react'
import Index from '../SuperAdmin/dashboard/index'
// import { Switch, Route } from 'react-router-dom'
// user
import UserProfile from '../SuperAdmin/dashboard/app/user-profile';
import UserAdd from '../SuperAdmin/dashboard/app/user-add';
import UserList from '../SuperAdmin/dashboard/app/user-list';
// import userProfileEdit from '../SuperAdmin/dashboard/app/user-privacy-setting';
// widget
import Widgetbasic from '../SuperAdmin/dashboard/widget/widgetbasic';
import Widgetcard from '../SuperAdmin/dashboard/widget/widgetcard';
import Widgetchart from '../SuperAdmin/dashboard/widget/widgetchart';
// icon
import Solid from '../SuperAdmin/dashboard/icons/solid';
import Outline from '../SuperAdmin/dashboard/icons/outline';
import DualTone from '../SuperAdmin/dashboard/icons/dual-tone';
// Form
import FormElement from '../SuperAdmin/dashboard/from/form-element';
import FormValidation from '../SuperAdmin/dashboard/from/form-validation';
import FormWizard from '../SuperAdmin/dashboard/from/form-wizard';
// table
import BootstrapTable from '../SuperAdmin/dashboard/table/bootstrap-table';
import TableData from '../SuperAdmin/dashboard/table/table-data';

// map
import Vector from '../SuperAdmin/dashboard/maps/vector';
import Google from '../SuperAdmin/dashboard/maps/google';

//extra
// import PrivacyPolicy from '../SuperAdmin/dashboard/extra/privacy-policy';
// import TermsofService from '../SuperAdmin/dashboard/extra/terms-of-service';

//TransitionGroup
// import { TransitionGroup, CSSTransition } from "react-transition-group";
//Special Pages
import Billing from '../SuperAdmin/dashboard/special-pages/billing';
import Kanban from '../SuperAdmin/dashboard/special-pages/kanban';
import Pricing from '../SuperAdmin/dashboard/special-pages/pricing';
import Timeline from '../SuperAdmin/dashboard/special-pages/timeline';
import Calender from '../SuperAdmin/dashboard/special-pages/calender';
import RtlSupport from '../admin/dashboard/special-pages/RtlSupport';

//admin
import Admin from '../SuperAdmin/dashboard/admin/admin';
import Default from '../layouts/dashboard/default';

// Admin specific imports
import AdminDashboard from '../admin/dashboard/index';
import AdminUserProfile from '../admin/dashboard/app/user-profile';
import AdminSettings from '../admin/dashboard/app/user-account-setting';

import TLDashboard from '../TeamLeader/dashboard/index';

import Agent from '../Agent/dashboard/index';

export const DefaultRouter = [
    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: 'superadmin',
                element: <Index />
            },
            {
                path: 'superadmin/dashboard/special-pages/billing',
                element: <Billing />
            },
            {
                path: 'superadmin/dashboard/special-pages/kanban',
                element: <Kanban />
            },
            {
                path: 'superadmin/dashboard/special-pages/pricing',
                element: <Pricing />
            },
            {
                path: 'superadmin/dashboard/special-pages/rtl-support',
                element: <RtlSupport/>,
            },
            {
                path: 'superadmin/dashboard/special-pages/timeline',
                element: <Timeline />
            },
            {
                path: 'superadmin/dashboard/app/user-profile',
                element: <UserProfile />
            },
            {
                path: 'superadmin/dashboard/app/user-add',
                element: <UserAdd />
            },
            {
                path: 'superadmin/dashboard/app/user-list',
                element: <UserList />
            },
            {
                path: 'superadmin/dashboard/admin/admin',
                element: <Admin />
            },
            // Widget
            {
                path: 'manager',
                element: <AdminDashboard />
            },
            {
                path: 'manager/dashboard/widget/widgetbasic',
                element: <Widgetbasic />
            },
            {
                path: 'manager/dashboard/widget/widgetchart',
                element: <Widgetchart />
            },
            {
                path: 'manager/dashboard/widget/widgetcard',
                element: <Widgetcard />
            },
            // Map
            {
                path: 'manager/dashboard/map/google',
                element: <Google />
            },
            {
                path: 'manager/dashboard/map/vector',
                element: <Vector />
            },
            // Form
            {
                path: 'manager/dashboard/form/form-element',
                element: <FormElement />
            },
            {
                path: 'manager/dashboard/form/form-wizard',
                element: <FormWizard />
            },
            {
                path: 'manager/dashboard/form/form-validation',
                element: <FormValidation />
            },
            // Table
            {
                path: 'manager/dashboard/table/bootstrap-table',
                element: <BootstrapTable />
            },
            {
                path: 'manager/dashboard/table/table-data',
                element: <TableData />
            },
            // Icon
            {
                path: 'manager/dashboard/icon/solid',
                element: <Solid />
            },
            {
                path: 'manager/dashboard/icon/outline',
                element: <Outline />
            },
            {
                path: 'manager/dashboard/icon/dual-tone',
                element: <DualTone />
            },
            // Admin specific routes
            {
                path: 'manager/dashboard/special-pages/rtl-support',
                element: <RtlSupport/>,
            },
            
            {
                path: 'manager/user-profile',
                element: <AdminUserProfile />
            },
            {
                path: 'manager/settings',
                element: <AdminSettings />
            },
            {
                path: 'teamleader',         
                element: <TLDashboard />
            },
            {
                path: 'agent',         
                element: <Agent />
            }
        ]
    }
]