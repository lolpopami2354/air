CLEARSKY ATC — EXPANDED HTML DOWNLOAD PACKAGE

GET STARTED
Extract the package. Open index.html in your browser. Choose an airport and press Start session.
No build, external libraries, images, or account required. The game is self-contained.
For microphone use, current desktop Chrome or Edge is recommended. Recognition may need an internet connection, browser support, and microphone permission. If local-file microphone access fails, use the optional local server below. Text and suggested commands work without a microphone.

OPTIONAL LOCAL SERVER
Windows: run Start-Local-Server.bat (Python 3 required).
macOS/Linux: run sh start-local-server.sh (Python 3 required).
Open http://localhost:8000 in your browser. Keep the server terminal open while playing.

UI AND LABELS
Radar and Ground views, drag-to-pan, wheel/+/- zoom, Center button.
Parking stands are spaced in rows with unique assignments, not stacked at four shared gates.
Aircraft labels try multiple positions with leader lines. At extreme density/zoom-out, labels that cannot fit are hidden instead of overlapping; zoom in, select the aircraft, or use its strip.
Click aircraft symbols, visible labels, or flight strips to select. Selected labels receive placement priority.
Arrivals, departures, and ground strip filters; runway queues; highlighted selected taxi/approach routes.

SIMULATION
Five fictionalized airport presets: Phoenix, Atlanta, Los Angeles, New York, Regional.
Different runway counts, parking capacity, stand spacing, arrival rates, departure requests.
All diagrams use a simplified parallel-runway layout, not the actual airport geometry.
Traffic rates are real-minute rates; aircraft speed changes movement only.
Rush/quiet mode cycles demand. Maximum 100 active aircraft. When full, spawns are skipped.
Initial parked count is starting traffic, not a permanent ground target.
Aircraft types A320/B738/E175 are cosmetic classifications, not separate flight models.

ASSISTED
Automatic arrival queues, approach guidance, runway availability checks, landing clearances, runway rollout, gate taxi, pushback, departure queues and takeoff.
Assisted arrivals distribute across available runways while reserving the configured departure runway where possible.
This is simplified sequencing, not a guaranteed conflict-free traffic manager. Heavy demand can exceed capacity, produce queues, go-arounds, and separation alerts.
Manual flight commands suppress automated inbound guidance for 45 real seconds.

STANDARD
Suggestions are available, but you issue pushback, taxi, crossing, takeoff, approach and landing clearances. Approach clearance activates guidance; landing clearance remains separate.

EXPERT
Manual clearances plus aircraft commands require the correct tuned frequency. Departures require a handoff before leaving the sector. Monitor-all is disabled when selecting Expert; it can be reenabled for learning.

GROUND
Simplified named Alpha/Bravo taxi routes, crossing clearances, following stops, runway occupancy and departure queues.
Pushback frees a parking stand. Landed aircraft reserve an available stand, taxi in and turn around after 45–90 real seconds.
If no stand is available, arrivals wait on the apron. Shared routes can congest at high demand.

RADIO
Hold Space or hold the microphone button; release to transmit. Browser must have focus.
Recognized text and command feedback appear below the input.
Pilot voices, voice test, repeat transmission, monitor-all toggle, missed-call count, diagnostics.
In strict monitoring, calls on other frequencies are not played or shown in the radio log; missed calls are counted.
Controller tuning and aircraft handoff are separate. Changing view never changes frequency.
A frequency handoff updates the aircraft frequency and produces a readback/check-in when audible.

COMMAND EXAMPLES (select a plane first, or prefix full callsign)
DAL123 heading 270
DAL123 descend and maintain 3000
DAL123 speed 180
DAL123 cleared ILS runway 26
DAL123 cleared to land runway 26
DAL123 go around
DAL123 pushback approved
DAL123 taxi to runway 25R
DAL123 cross runway 26
DAL123 hold position
DAL123 resume taxi
DAL123 runway 25R cleared for takeoff
DAL123 taxi to gate
frequency 118.7
DAL123 contact tower 118.7
DAL123 contact center 128.5
Use runways available at the current airport. Full callsigns avoid airline ambiguity.

SCORE / REPORTS
Landing +100, emergency landing +250, gate arrival +20, departure +100, handoff +5.
New separation events -40; aircraft lost beyond the outer boundary -30.
Report tracks operations, go-arounds, separation events, blocked runway requests, emergency landings, handoffs, accepted/rejected commands, missed calls and average elapsed operation time.
Average operation elapsed time is not a measured delay against a timetable.
Opening the report pauses the simulation. Close the report and press Resume to continue.
Save report exports a local JSON file. Sessions are not automatically saved.

TESTING
Node.js syntax validation passed.
Headless Chromium checks: all five presets and distinct starting stands; session startup; pushback/taxi transition; frequency tuning; rejection of unavailable runways; touchdown transition; a simulated eight-minute session with both landings and departures; label non-overlap; narrow-screen horizontal layout; no JavaScript page errors in those tests.
Microphone access, speech-recognition service reliability, physical keyboard behavior, and audible voice playback still require testing on your device.

ENTERTAINMENT ONLY
Frequencies, runway layouts, traffic rates, physics, taxiways and procedures are game approximations. Not for navigation or operational ATC training.
