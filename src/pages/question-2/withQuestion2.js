import React, { useState } from "react";
import hoist from "hoist-non-react-statics";

import { useCategories } from "./hooks/useCategories";

export function withQuestion2(Component) {
  function WithQuestion2(props) {
    const [filter, setFilter] = useState("");
    const { data: categories } = useCategories();

    function handleChangeFilter(event) {
      setFilter(event.target.value);
    }

    const newProps = {
      categories: categories.filter((cate) =>
        cate.toLowerCase().includes(filter.toLowerCase())
      ),
      handleChangeFilter,
    };

    return <Component {...props} {...newProps} />;
  }

  hoist(WithQuestion2, Component);

  WithQuestion2.displayName = `withQuestion2(${
    Component.displayName ?? Component.name ?? "Component"
  })`;

  return WithQuestion2;
}
