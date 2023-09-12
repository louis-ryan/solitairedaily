import Head from 'next/head';
import LayoutComponent from '../src/mahjong/LayoutComponent';
import Layout from './layout';

export default function Mahjong() {


    return (
        <Layout>
            <div className="App" style={{ marginLeft: "50%", transform: "translateX(-275px) translateY(100px)" }}>
                <LayoutComponent></LayoutComponent>
            </div>
        </Layout>
    )



}