import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { FieldPath, UseFormReturn } from "react-hook-form";
import { Input } from "./ui/input";
import { Form, Control } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";
const formSchema = authFormSchema("sign-up");

const CustomInput = ({
  control,
  label,
  name,
  placeholder,
}: {
  control: Control<z.infer<typeof formSchema>>;
  label: string;
  name: FieldPath<z.infer<typeof formSchema>>;
  placeholder: string;
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2"></FormMessage>
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
