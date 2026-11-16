/*
 * Taxi animation overlay for the KPHX simulator.
 * Load this classic script after the existing inline simulator script:
 *   <script src="taxi-animation.js"></script>
 *
 * It adds visible taxiway markings and an aircraft silhouette while retaining
 * the simulator's existing position/heading physics.
 */
(() => {
  const taxiPhases = new Set([
    'GATE', 'TAXI_OUT', 'HOLD_SHORT', 'LANDED_TAXI', 'TAXI_GATE', 'TAKEOFF_ROLL'
  ]);

  function drawTaxiwayMarkings() {
    if (currentView !== 'GROUND') return;

    const s = groundScale;
    const point = (p) => ({ x: cx + p.x * s, y: cy + p.y * s });
    const gatePoints = GATES.map(point);
    const holdPoints = Object.values(RUNWAYS).map((rwy) => point({
      x: rwy.xEast - 0.05,
      y: rwy.y + (rwy.id === '26' ? 0.12 : -0.12)
    }));

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Taxiway centerline: connect the apron to each runway hold-short point.
    ctx.strokeStyle = 'rgba(255, 176, 0, 0.8)';
    ctx.lineWidth = Math.max(2, 2.5 * s / 100);
    ctx.setLineDash([Math.max(5, s * 0.045), Math.max(4, s * 0.035)]);
    for (const gate of gatePoints) {
      for (const hold of holdPoints) {
        ctx.beginPath();
        ctx.moveTo(gate.x, gate.y);
        ctx.lineTo(cx + 0.45 * s, gate.y);
        ctx.lineTo(cx + 0.45 * s, hold.y);
        ctx.lineTo(hold.x, hold.y);
        ctx.stroke();
      }
    }
    ctx.setLineDash([]);

    // Hold-short bars and apron guidance lights.
    ctx.strokeStyle = '#ffb000';
    ctx.lineWidth = Math.max(2, 3 * s / 100);
    for (const hold of holdPoints) {
      ctx.beginPath();
      ctx.moveTo(hold.x, hold.y - 0.08 * s);
      ctx.lineTo(hold.x, hold.y + 0.08 * s);
      ctx.stroke();
    }

    ctx.fillStyle = '#39ff14';
    for (const gate of gatePoints) {
      ctx.beginPath();
      ctx.arc(gate.x, gate.y, Math.max(2, s * 0.018), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  function drawTaxiingAircraft() {
    if (currentView !== 'GROUND') return;

    const s = groundScale;
    ctx.save();
    for (const plane of planes) {
      if (!taxiPhases.has(plane.phase)) continue;

      const x = cx + plane.x * s;
      const y = cy + plane.y * s;
      const isSelected = plane.id === selectedId;
      const color = plane.isEmergency ? '#ff3b3b' : (isSelected ? '#00e5ff' : '#ffffff');
      const size = Math.max(7, Math.min(12, s * 0.055));

      // Heading 0 points north; draw the aircraft nose toward negative canvas Y.
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((plane.hdg || 0) * Math.PI / 180);
      ctx.fillStyle = color;
      ctx.strokeStyle = '#040806';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.28, -size * 0.12);
      ctx.lineTo(size, size * 0.48);
      ctx.lineTo(size * 0.25, size * 0.32);
      ctx.lineTo(size * 0.18, size * 0.8);
      ctx.lineTo(0, size * 0.62);
      ctx.lineTo(-size * 0.18, size * 0.8);
      ctx.lineTo(-size * 0.25, size * 0.32);
      ctx.lineTo(-size, size * 0.48);
      ctx.lineTo(-size * 0.28, -size * 0.12);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Small taxi light that pulses to make ground movement easier to follow.
      const pulse = 0.55 + 0.45 * Math.sin(performance.now() / 180);
      ctx.globalAlpha = pulse;
      ctx.fillStyle = '#ffb000';
      ctx.beginPath();
      ctx.arc(x, y, Math.max(2, size * 0.16), 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
    ctx.restore();
  }

  const originalDrawAirportRunways = drawAirportRunways;
  drawAirportRunways = function (scale) {
    originalDrawAirportRunways(scale);
    drawTaxiwayMarkings();
  };

  const originalDrawScene = drawScene;
  drawScene = function () {
    originalDrawScene();
    drawTaxiingAircraft();
  };
})();
