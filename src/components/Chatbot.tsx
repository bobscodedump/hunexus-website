import React, { useEffect } from 'react';
import { loadScriptOnce } from '../lib/loadScript';

const WIDGET_SRC =
  'https://share.aielitesolutions.com/widget.js/?appId=2450fe26-ff10-4e07-b107-17c70203cbb6';

export default function Chatbot() {
  // Preload vendor script immediately on mount; do not render any custom UI.
  useEffect(() => {
    loadScriptOnce(WIDGET_SRC, { id: 'hunexus-sales-chatbot', crossOrigin: 'anonymous' }).catch(() => {
      // No-op: failing to load should not break the app UI
    });
  }, []);

  // Vendor bubble handles its own UI
  return null;
}
