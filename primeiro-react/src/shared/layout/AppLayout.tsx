import type React from "react"

import './AppLayout.css'

{/*Eu posso declarar a childrean assim, e como esta np PageLayout.tsx */}
export const AppLayout = ({ children }: React.PropsWithChildren) => {


    return (
        <div className="layout-base">
            <div className="layout-header">
                <a>Home</a>
                <a>Usuários</a>
            </div>
            <hr className="layout-divider"/>

            {children}
        </div>
    );
}