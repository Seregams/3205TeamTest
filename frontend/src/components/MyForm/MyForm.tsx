import React, { FC } from "react";
import InputMask from "react-input-mask";
import {FormProps} from "../../types";

const MyForm: FC<FormProps> = ({
  title,
  data,
  firstLabel,
  secondLabel,
  btnLabel,
  changer,
  submit,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    changer((prevFormData: any) => ({ ...prevFormData, [name]: value }));
  };
  return (
    <div className="w-full py-3">
      <div className="bg-gray-200 rounded-lg shadow">
        <div className="px-6 py-6 lg:px-16">
          <h3 className="mb-4 text-xl font-medium text-gray-900">
            {title}
          </h3>
          <form className="space-y-6" onSubmit={submit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {firstLabel}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 focus-visible:outline-none text-sm rounded-lg
                            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {secondLabel}
              </label>
              <InputMask
                className="bg-gray-50 border border-gray-300 text-gray-900 focus-visible:outline-none text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="number"
                name="number"
                type="text"
                mask="99-99-99"
                placeholder="12 - 34 - 56"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                          focus:ring-blue-300 focus-visible:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {btnLabel}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
