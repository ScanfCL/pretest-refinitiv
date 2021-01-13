import React, { useState, useEffect, useCallback } from "react";
import hoist from "hoist-non-react-statics";

export function withQuestion2(Component) {
  function WithQuestion2(props) {
    const newProps = {};

    return <Component {...props} {...newProps} />;
  }

  hoist(WithQuestion2, Component);

  WithQuestion2.displayName = `withQuestion2(${
    Component.displayName ?? Component.name ?? "Component"
  })`;

  return WithQuestion2;
}
