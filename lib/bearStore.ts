import siteMeta from "@/config/site.config";
import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { ChannelObject } from "./channel-types";

type BearStore = SettingsStore & StateStore;
type FishStore = ChannelnfoStore;

type SettingsStore = {
  darkMode: boolean;
  hideEmbeds: boolean;
  hideImageOnly: boolean;
  hidePfp: boolean;
  hidePowerBadge: boolean;
  mainFeed: boolean;
  powerBadgeOnly: boolean;
  showSettings: boolean;
  showLogo: boolean;
  loadAds: boolean;
  loadBookmarks: boolean;
  showToDo: boolean;
  toggleDarkMode: () => void;
  toggleHideEmbeds: () => void;
  toggleHideImageOnly: () => void;
  toggleHidePfp: () => void;
  toggleHidePowerBadge: () => void;
  toggleMainFeed: () => void;
  togglePowerBadgeOnly: () => void;
  toggleShowSettings: () => void;
  toggleShowLogo: () => void;
  toggleLoadAds: () => void;
  toggleLoadBookmarks: () => void;
  toggleShowToDo: () => void;
};

type StateStore = {
  activeChannel: ChannelObject;
  setActiveChannel: (newChannel: ChannelObject) => void;
  channelModerators: number[];
  setChannelModerators: (newChannelModerators: number[]) => void;
};

type ChannelnfoStore = {
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
  hidePowerBadge: false,
  toggleHidePowerBadge: () => set((state) => ({ ...state, hidePowerBadge: !state.hidePowerBadge })),
  mainFeed: true,
  toggleMainFeed: () =>
    set((state) => ({ ...state, mainFeed: !state.mainFeed })),
  powerBadgeOnly: false,
  togglePowerBadgeOnly: () =>
    set((state) => ({ ...state, powerBadgeOnly: !state.powerBadgeOnly })),
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
  activeChannel: {
    id: siteMeta.channelId,
    name: siteMeta.channelId,
    description: siteMeta.description,
    imageUrl: siteMeta.logo,
  },
  setActiveChannel: (c) =>
    set((state) => ({ ...state, activeChannel: c ?? state.activeChannel })),
  channelModerators: [],
  setChannelModerators: (l) =>
    set((state) => ({
      ...state,
      channelModerators: l ?? state.channelModerators,
    })),
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
