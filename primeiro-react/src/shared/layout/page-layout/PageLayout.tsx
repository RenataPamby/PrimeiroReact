import type React from "react";

import PageLayoutStyles from './PageLayout.module.css'


{/*Eu posso declarar a childrean assim, e como esta np AppLayout.tsx */}
interface IPageLayoutProps {
    title: string;
    children: React.ReactNode;
}
export const PageLayout = ( {children, title}: IPageLayoutProps ) => {

    return(
        <div className={PageLayoutStyles.PageLayoutContainer}>
            <div className={PageLayoutStyles.PageContent}>
                <div>
                    <h2 className={PageLayoutStyles.PageTitle}>{title}</h2>
                </div>
                <div className={PageLayoutStyles.PageCenter}>
                    {children}
                </div> 
            </div>                      
        </div>
    );
}