import React, { ChangeEvent } from "react";
import { useBlockItems } from "../model/use-block-items";
import TextField from "@/shared/ui/text-field";
import Spinner from "@/shared/ui/spinner";
import { BlockItem } from "./block-item";

export const BlockList = ({ className }: { className?: string }) => {
  const { isLoading, items, q, setQ } = useBlockItems();

  const isLoader = isLoading;
  const isEmptyText = !isLoading && items.length === 0;
  const isItems = items.length > 0;
  return (
    <div className={className}>
      <TextField
        classname="mb-6 "
        label="Search..."
        inputprops={{
          value: q,
          onChange: (e: ChangeEvent<HTMLInputElement>) => setQ(e.target.value),
        }}
      />

      <hr />

      <div className="rounded-xl bg-slate-100/50 px-5 py-4 flex flex-col gap-3">
        {isLoader && <Spinner className="text-teal-600 w-8 h-8 mx-auto" />}
        {isEmptyText && (
          <div className="text-sm py-1 text-slate-500 text-center">
            Empty List :(
          </div>
        )}
        {isItems && items.map((item) => <BlockItem key={item.id} {...item} />)}
      </div>
    </div>
  );
};
