import { AddBlockItemForm } from "@/features/block-list/ui/add-block-item-form";
import { BlockList } from "@/features/block-list/ui/block-list";
import { ToggleBlockingBtn } from "@/features/toggle-blocking";
import Header from "@/shared/ui/header";
import { Profile } from "@/widgets/profile";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Profile page" />
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header right={<Profile />} />

        <div className="grid grid-cols-[200px_1fr]">
          <aside className="px-5 ">
            <ToggleBlockingBtn />
          </aside>

          <main className="pt-10 px-5">
            block list:
            <AddBlockItemForm />
            <BlockList />
          </main>
        </div>
      </div>
    </>
  );
}
