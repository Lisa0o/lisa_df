import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Adds from "../components/Adds";

import bannersData from "../assets/data/banners.json";
import addsData from "../assets/data/adds.json";


export function Home() {
    return <>
        <Banner {...bannersData[1]} pattern={false} bgPos="50% 30%" />
        <Layout>
            <Adds {...addsData[0]}/>
        </Layout>
        <Layout dt={2}>
            <Adds {...addsData[1]}/>
            <Adds {...addsData[2]}/>
        </Layout>
    </>
}
