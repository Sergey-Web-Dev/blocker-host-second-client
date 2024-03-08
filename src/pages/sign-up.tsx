import { SignUpForm } from "@/features/auth";
import Header from "@/shared/ui/header";
import UiFormPageLayout from "@/shared/ui/layouts/ui-form-page-layout";
import Head from "next/head";
import React from "react";

const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Sign Up page" />
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
      <UiFormPageLayout
        title="Sign Up"
        header={<Header />}
        form={<SignUpForm />}
      />
    </>
  );
};

export default SignUpPage;
