import siteMeta from "@/config/site.config";
import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

type BearStore = SettingsStore & StateStore;

type SettingsStore = {
  darkMode: boolean;
  hideEmbeds: boolean;
  hideImageOnly: boolean;
  hidePfp: boolean;
  showSettings: boolean;
  showLogo: boolean;
  loadAds: boolean;
  loadBookmarks: boolean;
  showToDo: boolean;
  toggleDarkMode: () => void;
  toggleHideEmbeds: () => void;
  toggleHideImageOnly: () => void;
  toggleHidePfp: () => void;
  toggleShowSettings: () => void;
  toggleShowLogo: () => void;
  toggleLoadAds: () => void;
  toggleLoadBookmarks: () => void;
  toggleShowToDo: () => void;
};

type StateStore = {
  channelId: string;
  setChannelId: (newChannelId: string) => void;
};

const useSettingsStore: StateCreator<SettingsStore> = (set) => ({
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
  toggleHidePfp: () => set((state) => ({ ...state, hidePfp: !state.hidePfp })),
  showSettings: true,
  toggleShowSettings: () =>
    set((state) => ({ ...state, showSettings: !state.showSettings })),
  showLogo: true,
  toggleShowLogo: () =>
    set((state) => ({ ...state, showLogo: !state.showLogo })),
  loadAds: true,
  toggleLoadAds: () => set((state) => ({ ...state, loadAds: !state.loadAds })),
  loadBookmarks: true,
  toggleLoadBookmarks: () =>
    set((state) => ({ ...state, loadBookmarks: !state.loadBookmarks })),
  showToDo: true,
  toggleShowToDo: () =>
    set((state) => ({ ...state, showToDo: !state.showToDo })),
});

const useStateStore: StateCreator<StateStore> = (set) => ({
  channelId: siteMeta.channelId,
  setChannelId: (c) =>
    set((state) => ({ ...state, channelId: c ?? state.channelId })),
});

export const useBearStore = create<BearStore>()(
  persist(
    (...a) => ({
      ...useSettingsStore(...a),
      ...useStateStore(...a),
    }),
    { name: "bcbhshow-lite-client" }
  )
);
