import { useSound } from "use-sound";

import type { ReturnedValue } from "use-sound/dist/types";

export default function useClick(): ReturnedValue | [() => void, null] {
  const result = useSound("/sounds/click.ogg", {
    volume: 0.05,
  });

  return result;
}
