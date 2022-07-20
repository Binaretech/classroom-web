import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LoginView from "../modules/auth/LoginView";

export default function Login() {
  return (
    <>
      <Head>
        <title>Classroom - Login</title>
        <meta name="description" content="Classroom - Login" />
      </Head>
      <LoginView />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: await serverSideTranslations(locale, ["login", "attributes"]),
  };
}
