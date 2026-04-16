#!/bin/bash
# scripts/ping-engines.sh
set -e

SITEMAP="https://pirlo-tv.top/sitemap.xml"

echo "📡 Pinging Google..."
curl -s "https://www.google.com/ping?sitemap=${SITEMAP}" -o /dev/null -w "Google: %{http_code}\n"

echo "📡 Pinging Bing..."
curl -s "https://www.bing.com/ping?sitemap=${SITEMAP}" -o /dev/null -w "Bing: %{http_code}\n"

echo "✅ Sitemap pings complete."
