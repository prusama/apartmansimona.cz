import React from "react";
import {getDictionary} from "@/localization/dictionaries";

interface HomePageProps {
    params: {
        lang: string;
    }
}

const HomePage = async ({params}: HomePageProps): Promise<React.JSX.Element> => {
    const lang = params.lang;
    const dict = await getDictionary(lang);

    return <p>{dict.whatsNear}</p>
}

export default HomePage;