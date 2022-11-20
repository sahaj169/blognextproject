import React ,{Fragment} from "react";
import ContactPage from "../components/contact/contactForm";
import Head from "next/head";
export default function Contact() {
  return <Fragment>
  <Head>
    <title>Contact Me</title>
    <meta name="description" content="Send me your messages!" />
  </Head>
  <ContactPage />;
  </Fragment>
}
