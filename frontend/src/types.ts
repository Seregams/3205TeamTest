import React from "react";

export type formData = {
  email: string;
  number?: string;
};

export type FormProps = {
  readonly title: string;
  readonly firstLabel: string;
  readonly secondLabel: string;
  readonly btnLabel: string;
  submit: React.FormEventHandler<HTMLFormElement>;
  changer: React.Dispatch<React.SetStateAction<formData>>;
  data: formData;
};

export type Values = {
  data: formData[];
};
