import React, { useState } from "react";
import MyTable from "./components/MyTable";
import axios from "axios";
import MyForm from "./components/MyForm";
import { formData } from "./types";

let abortController: AbortController | null = null;
function App() {
  const [formData, setFormData] = useState<formData>({ email: "", number: "" });
  const [responseInfo, setResponseInfo] = useState<{
    result: formData[];
  } | null>(null);

  const fetchData = React.useCallback((data: formData, options = {}) => {
    axios("/api/check-form", { method: "POST", data, ...options })
      .then(function (response) {
        setResponseInfo(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        if (!axios.isCancel(error)) {
          throw error;
        }
      });
  }, []);

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (abortController) {
      abortController.abort();
    }

    abortController = new AbortController();

    fetchData(
      { email: formData.email, number: formData.number },
      { signal: abortController.signal }
    );
  };

  return (
    <div className="container">
      <div className="grid justify-center">
        <MyForm
          title="Enter this values"
          data={formData}
          firstLabel="Email"
          secondLabel="Number"
          btnLabel="Submit"
          changer={setFormData}
          submit={handleSubmit}
        />
      </div>
      <div className="grid justify-center">
        {responseInfo ? <MyTable data={responseInfo.result} /> : <></>}
      </div>
    </div>
  );
}

export default App;
