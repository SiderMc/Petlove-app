import { useLocation } from "react-router-dom";

export default function usePageCheck(locationPath,selector) {
  const { pathname } = useLocation();
  const page = pathname === locationPath;
  return { selector: page ? selector : null, page };
}