import React from "react";
import { useAddBlockItemForm } from "../model/use-add-block-item-form";
import SelectField from "@/shared/ui/select-field";
import TextField from "@/shared/ui/text-field";
import Button from "@/shared/ui/button";
import { AddBlockItemDtoType } from "@/shared/api/generated";

const typeOptions = [
  {
    label: "Website",
    value: AddBlockItemDtoType.Website,
  },

  {
    label: "Keyword",
    value: AddBlockItemDtoType.KeyWord,
  },
];

export const AddBlockItemForm = () => {
  const { isLoading, register, type, handleSubmit } = useAddBlockItemForm();

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <SelectField
        classname="grow min-w-[200px]"
        options={typeOptions}
        selectprops={{
          ...register("type"),
        }}
      />

      <TextField
        classname="grow min-w-[200px]"
        inputprops={{
          placeholder: type === "KeyWord" ? "Enter KeyWord" : "Enter Website",
          ...register("data"),
        }}
      />

      <Button variant="primary" disabled={isLoading}>
        Add block item
      </Button>
    </form>
  );
};
