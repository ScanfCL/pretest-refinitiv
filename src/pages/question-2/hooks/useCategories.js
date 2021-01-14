import { get } from "../../../api";
import React, { useState, useEffect } from "react";

export const useCategories = () => {
  const [response, setResponse] = useState({ data: [] });

  async function getApi() {
    const data = await get({ url: "https://api.publicapis.org/categories" });
    setResponse((oldState) => ({ ...oldState, data }));
  }

  useEffect(() => {
    getApi();
  }, []);

  return response;
};
