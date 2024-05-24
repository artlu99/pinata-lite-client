import siteMeta from "@/config/site.config";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type BearStore = {
  darkMode: boolean;
  hideEmbeds: boolean;
  hideImageOnly: boolean;
  hidePfp: boolean;
  showSettings: boolean;
  showLogo: boolean;
  loadAds: boolean;
  loadBookmarks: boolean;
  showToDo: boolean;
  channelId: string;
  toggleDarkMode: () => void;
  toggleHideEmbeds: () => void;
  toggleHideImageOnly: () => void;
  toggleHidePfp: () => void;
  toggleShowSettings: () => void;
  toggleShowLogo: () => void;
  toggleLoadAds: () => void;
  toggleLoadBookmarks: () => void;
  toggleShowToDo: () => void;
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
      showSettings: true,
      toggleShowSettings: () =>
        set((state) => ({ ...state, showSettings: !state.showSettings })),
      showLogo: true,
      toggleShowLogo: () =>
        set((state) => ({ ...state, showLogo: !state.showLogo })),
      loadAds: true,
      toggleLoadAds: () =>
        set((state) => ({ ...state, loadAds: !state.loadAds })),
      loadBookmarks: true,
      toggleLoadBookmarks: () =>
        set((state) => ({ ...state, loadBookmarks: !state.loadBookmarks })),
      showToDo: true,
      toggleShowToDo: () =>
        set((state) => ({ ...state, showToDo: !state.showToDo })),
      channelId: siteMeta.channelId,
      setChannelId: (c) =>
        set((state) => ({ ...state, channelId: c ?? state.channelId })),
    }),
    { name: "bcbhshow-lite-client" }
  )
);
