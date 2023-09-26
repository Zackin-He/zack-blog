import { useState } from "react";

const useTheme = () => {
  const [ theme, setTheme ] = useState<string>('dark');
  return [theme, setTheme];
}
export default useTheme;