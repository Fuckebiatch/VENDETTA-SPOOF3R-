// VendettaSpoofer Plugin Code (single file)

const manifest = {
  name: "VendettaSpoofer",
  description: "Spoofs platform, locale, and build version for Discord",
  version: "1.0.0",
  authors: ["Fuckebiatch"]
};

// The plugin code that runs when Vendetta loads it
export function onLoad() {
  // Spoof platform to iOS
  Object.defineProperty(navigator, "platform", {
    get: () => "iPhone",
    configurable: true
  });

  // Spoof language and locale
  Object.defineProperty(navigator, "language", {
    get: () => "ja-JP",
    configurable: true
  });

  Object.defineProperty(navigator, "languages", {
    get: () => ["ja-JP", "en-US"],
    configurable: true
  });

  // Custom spoof marker
  window.__vendetta_spoofer = {
    platform: "iOS",
    locale: "ja-JP",
    active: true
  };

  console.log("[VendettaSpoofer] Spoofing enabled.");
}

// The plugin code that runs when Vendetta unloads it
export function onUnload() {
  // Cleanup spoofed values
  delete window.__vendetta_spoofer;
  console.log("[VendettaSpoofer] Spoofing disabled.");
}

// Export the manifest
export { manifest };