// ─────────────────────────────────────────────────────────────────────────────
// step-content.js — edit this file to change the explanation page text.
//
// Each step has:
//   badge         — the small label above the heading (e.g. "Step 01 — The Spiral")
//   headingDetail — heading shown in Detailed mode
//   headingSimple — heading shown in Simple mode
//   detail        — paragraph shown in Detailed mode (HTML tags allowed)
//   simple        — paragraph shown in Simple mode  (HTML tags allowed)
// ─────────────────────────────────────────────────────────────────────────────

window.STEP_CONTENT = {

  steps: [

    // ── Step 1 ─────────────────────────────────────────────────────────────
    {
      badge: 'Step 01 — The Spiral',

      headingDetail: 'Differential precession writes a spiral',
      headingSimple: 'Faster on the outside = spiral',

      detail: `Each comet orbit has a perihelion direction — the angle its "sharp end"
        points in the galactic frame. The Milky Way's tidal gravity slowly rotates this
        angle. Secular perturbation theory (averaging the tidal force over one full
        orbit) shows the precession rate scales as
        <em>dω/dt ∝ a<sup>3/2</sup></em> — outer orbits precess faster because their
        longer orbital periods (P ∝ a<sup>3/2</sup>, Kepler's third law) let the galactic
        tide accumulate more angular leverage per year.
        <br><br>
        This is the same physics behind galactic spiral arms: the Milky Way's own
        stars orbit with angular velocity Ω(r) that decreases outward, so any
        initial straight feature (like a density wave crest) winds into a trailing
        spiral over time. Here the "stars" are perihelion directions on the celestial
        sphere. After ~4 billion years, inner Oort orbits (~2,000 AU) have precessed
        by roughly 90°, while outer orbits (~10,000 AU) have wound ~5× further —
        tracing an Archimedean spiral <em>r = r₀ + bθ</em> in perihelion-direction
        space. The pitch angle of that spiral is a direct clock: it encodes how long
        galactic tides have been acting on the cloud.`,

      simple: `The Milky Way's gravity tugs more strongly on larger, outer orbits
               because it has more leverage. It's like turning a steering wheel:
               it's much easier when you push on the outside edge than near the center.`,
    },

    // ── Step 2 ─────────────────────────────────────────────────────────────
    {
      badge: 'Step 02 — The Bob',

      headingDetail: 'A galaxy-scale harmonic oscillator',
      headingSimple: 'Why two arms pointed up and down?',

      detail: `The solar system orbits the galactic center every ~225 million years,
        but simultaneously bobs vertically through the disk. The restoring force comes
        from the gravitational pull of disk matter above or below. Treating the disk
        as a uniform slab of density ρ, Gauss's law for gravity gives exactly the
        equation of a mass on a spring:
        <br><br>
        <em style="display:block;text-align:center;margin:8px 0">z̈ = −4πGρ · z</em>
        <br>
        The "spring constant" <em>k = 4πGρ</em> sets the period
        <em>T = π / √(Gρ) ≈ 64 million years</em> — the solar system crosses the
        galactic midplane roughly every 32 million years, with an amplitude of
        ~70–100 parsecs (~300 light-years). This is structurally identical to a
        pendulum, a vibrating string, or any other harmonic oscillator: there is a
        restoring force proportional to displacement, so the system oscillates.
        <br><br>
        The <strong>two-arm</strong> outcome is forced by the shape of the tidal
        tensor. The galactic tidal potential has the form
        <em>Φ ∝ Az² − (A/2)(x²+y²)</em> — a saddle that pulls orbits toward the
        galactic pole axis (z) and repels them from the galactic plane. Because the
        pole has a north and a south, there are exactly two stable attractors for
        perihelion orientation. View the
        <a href="./index.html#open-formation" style="color:rgba(93,170,255,0.9);text-underline-offset:3px">formation sim</a>
        to see the cloud split into two sides in real time.`,

      simple: `The solar system bobs up and down as it orbits the galaxy's center.
               As it bobs up and down, the gravity of the galaxy pulls up and down on the solar system,
               including the oort cloud. View the <a href="./index.html#open-formation" style="color:rgba(93,170,255,0.9);text-underline-offset:3px">formation sim</a> to see how it separates into two sides.`,
    },

    // ── Step 3 ─────────────────────────────────────────────────────────────
    {
      badge: 'Step 03 — Kozai Locking',

      headingDetail: 'The galactic pendulum — and why it locks',
      headingSimple: 'Perspective of a single comet orbit',

      detail: `Define ω as the angle between a comet's perihelion and the galactic
        plane. Secular perturbation theory produces an effective potential for ω:
        <br><br>
        <em style="display:block;text-align:center;margin:8px 0">U(ω) ∝ −e² · sin²(ω)</em>
        <br>
        This has <strong>maxima</strong> at ω = 0° and 180° (the galactic equator —
        where all comets start after being scattered by Neptune) and
        <strong>minima</strong> at ω = 90° and 270° (pointing straight at the
        galactic poles). The resulting equation of motion,
        <em>d²ω/dt² ∝ −sin(2ω)</em>, is exactly the nonlinear pendulum equation —
        the same math that governs a grandfather clock, an oscillating chemical
        reaction, or a Josephson junction in a superconductor.
        <br><br>
        Near ω = 90° this linearises to simple harmonic motion
        (<em>d²δω/dt² ∝ −δω</em>), so orbits that reach the vicinity of a pole
        oscillate (librate) around it with the Kozai–Lidov period, which scales as
        ~1–5 billion years for Oort Cloud distances. The lock is
        <strong>self-extinguishing</strong>: because <em>dω/dt ∝ sin(2ω)</em>,
        the torque is exactly zero at ω = 90°. The mechanism that drives the
        precession switches itself off at the stable point — the same reason the
        Moon is tidally locked to Earth. Tidal torques drove the Moon to
        synchronous rotation, then vanished at that exact state. Here, the galactic
        tide drives ω to 90°, then vanishes. The orbit is frozen there for the
        remaining age of the solar system.`,

      simple: `Every orbit has a closest point to the Sun, called the perihelion.
        Over time, the Milky Way's gravity slowly twists them upward or
        downward until they point toward the top or bottom of the galaxy. Once they
        point that way, the galaxy's pull stops changing them much, so they stay lined up there.`,
    },

  ],

  // ── Closing callout ───────────────────────────────────────────────────────
  callout: {

    detail: `<strong style="color:rgba(222,211,255,0.92)">The fossil record of four billion years.</strong>
      &nbsp; The spiral encodes when the tides started acting (its pitch angle is a
      clock). The two arms record where the tidal tensor's stable axes point (galactic
      north and south). And the Kozai lock explains why the arms are sharp rather than
      smeared out — each orbit is frozen at its equilibrium, not still drifting. The
      inner Oort Cloud is not random debris; it is a structured fossil of the galactic
      gravitational field, written in the orientations of trillions of comet orbits
      over the entire history of the solar system.`,

    simple: `<strong style="color:rgba(222,211,255,0.92)">The bottom line.</strong>
      &nbsp; Differential tidal spin creates the spiral. The saddle shape of the
      galactic tidal field splits the cloud into two groups — north and south. And
      Kozai locking freezes each orbit in place, keeping the arms sharp for billions
      of years. The inner Oort Cloud is a fossil of the Milky Way's gravity, written
      in the orientations of trillions of comet orbits.`,
  },

};
