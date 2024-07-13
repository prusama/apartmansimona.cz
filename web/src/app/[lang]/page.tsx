import React from "react";

interface HomePageProps {
    params: {
        lang: string;
    }
}

const HomePage = ({params}: HomePageProps): React.JSX.Element => {
    const lang = params.lang;

    return <p>{lang}</p>
}

export default HomePage;