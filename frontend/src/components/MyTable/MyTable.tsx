import React, { FC } from "react";
import { Values } from "../../types";

const MyTable: FC<Values> = ({ data }) => {
  return (
    <>
      {!data[0] ? (
        <p className="text-xl font-medium text-gray-900 dark:text-white">
          No elements
        </p>
      ) : (
        <div className="relative overflow-x-auto mt-6 mb-6">
          <table className="w-full text-sm text-left rounded-2xl text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border-b">
                <th scope="col" className="px-10 rounded py-3">
                  Email
                </th>
                <th scope="col" className="px-10 rounded py-3">
                  Number
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={item.email + index}
                  className="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.email}
                  </th>
                  <td className="px-10 rounded py-4">{item.number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default MyTable;
