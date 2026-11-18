#!/bin/sh
cd "$(dirname "$0")"
printf "Open http://localhost:8000 in your browser\n"
python3 -m http.server 8000 --bind 127.0.0.1
