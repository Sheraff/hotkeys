---
"@tanstack/hotkeys": patch
---

Add guard to `normalizeKeyName()` for undefined/falsy key values to prevent errors when browser extensions, accessibility tools, or certain OS/browser combinations synthesize key events with undefined `event.key`.
