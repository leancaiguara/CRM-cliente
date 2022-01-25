import Head from "next/head";
import Layout from "../components/Layout";

function index() {
  return (
    <div>
      <Layout>
        <h1 className="text-2xl text-gray-800 font-light">Clientes</h1>
      </Layout>
    </div>
  );
}

export default index;
