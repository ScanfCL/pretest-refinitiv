import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Redirect({ to }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    typeof to === "number"
      ? navigate(to)
      : navigate({ pathname: to, search: location.search }, { replace: true });
  }, [to, location.search, navigate]);

  return null;
}
