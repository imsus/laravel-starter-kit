import { useColorMode } from "@vueuse/core";

export function useTheme() {
  const mode = useColorMode({
    attribute: "class",
    modes: {
      auto: "system",
      dark: "dark",
      light: "light",
    },
  });

  return {
    isAuto: computed(() => mode.value === "auto"),
    isDark: computed(() => mode.value === "dark"),
    isLight: computed(() => mode.value === "light"),
    mode,
    setMode: (value: "light" | "dark" | "auto") => {
      mode.value = value;
    },
    toggleDark: () => {
      mode.value = mode.value === "dark" ? "light" : "dark";
    },
  };
}
