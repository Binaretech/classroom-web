import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Login() {
  return <></>;
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: await serverSideTranslations(locale, ["login", "attributes"]),
  };
}
