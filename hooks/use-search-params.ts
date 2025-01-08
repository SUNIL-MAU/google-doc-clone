import { parseAsString, useQueryState } from "nuqs";

export function useSearchParams(key: string) {
  return useQueryState(
    key,
    parseAsString.withDefault("").withOptions({ clearOnDefault: true })
  );
}
