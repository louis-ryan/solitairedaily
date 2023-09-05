import Head from 'next/head';
import LayoutComponent from '../src/mahjong/LayoutComponent';
import Layout from './layout';

export default function Mahjong() {


    return (
        <Layout>
            <div className="App">
                <LayoutComponent></LayoutComponent>
            </div>
        </Layout>
    )



}