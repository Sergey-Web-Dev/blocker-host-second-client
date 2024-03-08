import { useEffect, useState } from "react";

export function useDebouncedValue<T>(value: T, timeout = 0) {
  const [debouncedValue, setdebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setdebouncedValue(value), timeout);
    return () => clearTimeout(timer);
  }, [value, timeout]);

  return debouncedValue;
}
