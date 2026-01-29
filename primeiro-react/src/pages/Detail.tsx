import { useParams, useSearchParams } from 'react-router';

import { PageLayout } from "../shared/layout/page-layout/PageLayout";


export const Detail = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();

    return(
        <PageLayout title="Detalhes">
            {/*O parametro que especificar no Route path em App.tsx, 
               é o que deve ser passado aqui para funcionar*/}
            Detalhes de {id} 
            {/*Na URL vc adiciona: ?filter=teste*/}
            {searchParams.get("filter")}
        </PageLayout>

    );
};