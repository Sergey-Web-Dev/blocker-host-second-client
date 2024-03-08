import { SignInForm } from "@/features/auth";
import Header from "@/shared/ui/header";
import UiFormPageLayout from "@/shared/ui/layouts/ui-form-page-layout";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  title: "Course Blocker Host",
  description: "Course Blocker Host",
  icons: "/logo.svg",
};

const SignInPage = () => {
  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Sign in page" />
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
      <UiFormPageLayout
        title="Sign In"
        header={<Header />}
        form={<SignInForm />}
      />
    </>
  );
};

export default SignInPage;
