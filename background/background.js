chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ extensionActive: false });
});
