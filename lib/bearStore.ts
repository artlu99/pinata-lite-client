import siteMeta from "@/config/site.config";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type BearStore = {
  darkMode: boolean;
  hideEmbeds: boolean;
  hideImageOnly: boolean;
  hidePfp: boolean;
  channelId: string;
  toggleDarkMode: () => void;
  toggleHideEmbeds: () => void;
  toggleHideImageOnly: () => void;
  toggleHidePfp: () => void;
  setChannelId: (newChannelId: string) => void;
};

export const useBearStore = create<BearStore>()(
  persist(
    (set) => ({
      darkMode: false,
      toggleDarkMode: () =>
        set((state) => ({ ...state, darkMode: !state.darkMode })),
      hideEmbeds: false,
      toggleHideEmbeds: () =>
        set((state) => ({ ...state, hideEmbeds: !state.hideEmbeds })),
      hideImageOnly: false,
      toggleHideImageOnly: () =>
        set((state) => ({ ...state, hideImageOnly: !state.hideImageOnly })),
      hidePfp: false,
      toggleHidePfp: () =>
        set((state) => ({ ...state, hidePfp: !state.hidePfp })),
      channelId: siteMeta.channelId,
      setChannelId: (c) =>
        set((state) => ({ ...state, channelId: c ?? state.channelId })),
    }),
    { name: "bcbhshow-lite-client" }
  )
);
