import type React from "react"
import { NavLink } from "react-router";

import './AppLayout.css'

{/*Eu posso declarar a childrean assim, e como esta np PageLayout.tsx */}
export const AppLayout = ({ children }: React.PropsWithChildren) => {


    return (
        <div className="layout-base">
            <div className="layout-header">
                <NavLink to='/' className="navigate">
                    Home
                </NavLink>
                <NavLink to='/sobre' className="navigate">
                    Sobre
                </NavLink>
            </div>
            <hr className="layout-divider"/>

            {children}
        </div>
    );
}