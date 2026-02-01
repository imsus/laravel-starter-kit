<script setup lang="ts">
import { Head } from "@inertiajs/vue3";
import DarkModeToggle from "@/components/DarkModeToggle.vue";
</script>

<template>
  <Head title="Welcome">
    <link rel="preconnect" href="https://rsms.me/" />
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  </Head>
  <div
    class="flex flex-col items-center min-h-screen p-6 lg:justify-center lg:p-8 dark:bg-black dark:text-white"
  >
    <div class="absolute right-4 top-4 lg:right-8 lg:top-8">
      <DarkModeToggle />
    </div>

    <header class="mission-header">
      <h1>Project Aegis</h1>
      <p>
        Deep Space Colonization Initiative —
        <abbr title="Technical Readiness Level">TRL</abbr> 9 Demonstration
      </p>
      <nav>
        <a href="#manifest">Manifest</a> • <a href="#telemetry">Telemetry</a> •
        <a href="#communication">Communication</a> •
        <a href="#specifications">Specifications</a>
      </nav>
    </header>

    <main class="max-w-3xl mx-auto">
      <!-- TYPOGRAPHY DEMONSTRATION -->
      <section id="manifest" aria-labelledby="manifest-title">
        <h2>Mission Manifest</h2>

        <p class="lead">
          Project Aegis represents humanity's <em>first</em> interstellar
          expedition utilizing <strong>generation ships</strong> with
          closed-loop ecosystems. The mission duration is estimated at
          <mark>4.37 light-years</mark> with a cruise velocity of 0.1<var
            >c</var
          >
          <sup>[1]</sup>.
        </p>

        <blockquote cite="https://example.com/aegis-charter">
          "The survival of the species depends not upon the velocity of our
          vessels, but upon the <dfn>resilience</dfn> of our social
          architectures."
          <footer>
            — Dr. Elena Vasquez, <cite>Stellar Ethics, 2042</cite>
          </footer>
        </blockquote>

        <h3>Crew Composition</h3>
        <p>
          The <data value="144">144-person</data> crew includes specialists in
          <abbr title="Closed Environmental Life Support Systems">CELSS</abbr>
          maintenance, quantum communication, and pediatric care for the
          <del>third</del> <ins>fourth</ins>
          generation colonists.
        </p>

        <h4>Hierarchical Command Structure</h4>
        <p>
          Demonstrating nested heading hierarchy (h4) within content flow...
        </p>

        <h5>Departmental Breakdown</h5>
        <p>Level five headings for sub-sections...</p>

        <h6>Individual Role Assignments</h6>
        <p>Micro-level organization using h6 elements...</p>

        <hr />

        <h3>Pre-Launch Checklist</h3>
        <ul role="list" class="mission-timeline">
          <li>
            <time datetime="2045-03-14">Launch Day T-Minus 30 Days</time>: Final
            biomass calibration
          </li>
          <li>
            <time datetime="2045-04-01">T-Minus 13 Days</time>: Quantum
            entanglement verification with Earth relay
            <ul>
              <li>Primary receiver: <samp>QX-991</samp> array</li>
              <li>Backup receiver: <samp>QX-992</samp> array</li>
            </ul>
          </li>
          <li>
            <time datetime="2045-04-14">T-Minus 0</time>: Engine ignition
            sequence
            <ol>
              <li>Containment field activation</li>
              <li>Fuel injection</li>
              <li>Plasma chamber pre-heating</li>
            </ol>
          </li>
        </ul>

        <h3>Technical Specifications</h3>
        <dl class="tech-stack">
          <dt>Propulsion</dt>
          <dd>Fusion-pulse drive with magnetic nozzle expansion</dd>

          <dt>Life Support</dt>
          <dd>
            Bioregenerative with <abbr title="Physico-Chemical">PC</abbr> backup
            systems
          </dd>

          <dt>Computing</dt>
          <dd>Quantum-optical hybrid architecture at 1.2 zettaFLOPS</dd>
        </dl>
      </section>

      <!-- FORM DEMONSTRATION -->
      <section
        id="communication"
        class="form-section"
        aria-labelledby="comm-title"
      >
        <h2 id="comm-title">Communication Uplink</h2>
        <p>
          Test the <code>field-sizing</code> property by entering multiple lines
          of text below.
        </p>

        <form action="#" method="post">
          <fieldset>
            <legend>Transmission Parameters</legend>

            <div class="input-group">
              <label for="callsign">Operator Callsign</label>
              <input
                type="text"
                id="callsign"
                name="callsign"
                required
                placeholder="e.g., AEGIS-COM-01"
                pattern="[A-Z]{5}-[A-Z]{3}-\d{2}"
              />
              <small>Format: 5 letters-3 letters-2 digits (uppercase)</small>
            </div>

            <div class="input-group">
              <label for="frequency">Quantum Frequency (THz)</label>
              <input
                type="number"
                id="frequency"
                name="frequency"
                min="400"
                max="700"
                step="0.1"
                value="518.5"
              />
            </div>

            <div class="input-group">
              <label for="priority">Priority Level</label>
              <input
                type="range"
                id="priority"
                name="priority"
                min="1"
                max="5"
                value="3"
              />
            </div>

            <div class="input-group">
              <label for="uplink-msg">Uplink Message</label>
              <textarea
                id="uplink-msg"
                name="message"
                placeholder="Enter transmission data..."
                required
              ></textarea>
              <small
                >Height auto-adjusts as you type (field-sizing: content)</small
              >
            </div>

            <div class="checkbox-group">
              <input type="checkbox" id="encrypt" name="encrypt" checked />
              <label for="encrypt">Enable quantum encryption</label>
            </div>

            <div class="checkbox-group">
              <input type="radio" id="band-c" name="band" value="c" checked />
              <label for="band-c">C-Band Standard</label>

              <input type="radio" id="band-x" name="band" value="x" />
              <label for="band-x">X-Band Emergency</label>
            </div>

            <div class="input-group">
              <label for="destination">Destination Colony</label>
              <select id="destination" name="destination" required>
                <optgroup label="Inner Systems">
                  <option value="proxima">Proxima Centauri b</option>
                  <option value="trappist">TRAPPIST-1e</option>
                </optgroup>
                <optgroup label="Deep Space">
                  <option value="kepler">Kepler-442b</option>
                  <option value="lhs">LHS 1140 b</option>
                </optgroup>
              </select>
            </div>

            <div class="input-group">
              <button type="submit">Initiate Transmission</button>
              <button type="button" class="outline">Save Draft Locally</button>
            </div>
          </fieldset>
        </form>
      </section>

      <!-- INTERACTIVE COMPONENTS -->
      <section aria-labelledby="systems-title">
        <h2 id="systems-title">Systems Diagnostics</h2>

        <div class="status-grid">
          <article class="status-card">
            <h3>Life Support</h3>
            <p>Oxygen recycling at <output>98.4%</output> efficiency.</p>
            <details>
              <summary>View Subsystem Details</summary>
              <div class="details-content">
                <ul>
                  <li>CO<sub>2</sub> Scrubbers: Operational</li>
                  <li>
                    Hydroponics: <mark>Warning</mark> - pH imbalance in Bay 4
                  </li>
                  <li>Water Reclamation: 99.2%</li>
                </ul>
                <p>
                  Last maintenance:
                  <time datetime="2045-04-10">3 days ago</time>
                </p>
              </div>
            </details>
          </article>

          <article class="status-card">
            <h3>Navigation</h3>
            <p>Course correction required in <output>42</output> hours.</p>
            <details>
              <summary>Trajectory Data</summary>
              <div class="details-content">
                <p>
                  Current vector:
                  <code>RA 14<sup>h</sup> 39<sup>m</sup>, Dec -60° 50′</code>
                </p>
                <p>Target deviation: 0.003 arcminutes</p>
              </div>
            </details>
          </article>

          <article class="status-card">
            <h3>Power Distribution</h3>
            <p>Fusion reactor output nominal at <output>4.2</output> GW.</p>
            <details>
              <summary>Load Balancing</summary>
              <div class="details-content">
                <pre><code>Core A: 48%
Core B: 52%
Battery Backup: Standby
Heat Exchanger: 78% capacity</code></pre>
              </div>
            </details>
          </article>
        </div>
      </section>

      <!-- DATA TABLES -->
      <section id="telemetry" aria-labelledby="telemetry-title">
        <h2 id="telemetry-title">Telemetry Logs</h2>

        <div class="telemetry-log" role="log" aria-live="polite">
          <table>
            <caption>
              Last 24 Hours System Events
            </caption>
            <thead>
              <tr>
                <th scope="col">Timestamp</th>
                <th scope="col">System</th>
                <th scope="col">Event</th>
                <th scope="col">Severity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><time datetime="04:30:15">04:30:15</time></td>
                <td>Nav</td>
                <td>Star tracking alignment</td>
                <td>Info</td>
              </tr>
              <tr>
                <td><time datetime="08:15:42">08:15:42</time></td>
                <td>Life</td>
                <td>O<sub>2</sub> sensor calibration</td>
                <td>Info</td>
              </tr>
              <tr>
                <td><time datetime="14:22:08">14:22:08</time></td>
                <td>Comms</td>
                <td>Packet loss detected</td>
                <td>Warning</td>
              </tr>
              <tr>
                <td><time datetime="19:45:33">19:45:33</time></td>
                <td>Power</td>
                <td>Magnetic containment fluctuation</td>
                <td>Critical</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4">End of log excerpt</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      <!-- MEDIA & FIGURES -->
      <section id="specifications" aria-labelledby="specs-title">
        <h2 id="specs-title">Technical Diagrams</h2>

        <figure>
          <svg
            viewBox="0 0 400 200"
            style="inline-size: 100%; block-size: auto; background: var(--color-surface); border-radius: 0.5rem;"
            aria-label="Diagram of spacecraft cross-section"
          >
            <defs>
              <linearGradient id="hull" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style="stop-color:var(--color-muted);stop-opacity:0.3"
                />
                <stop
                  offset="100%"
                  style="stop-color:var(--color-accent);stop-opacity:0.1"
                />
              </linearGradient>
            </defs>
            <rect
              x="50"
              y="50"
              width="300"
              height="100"
              rx="50"
              fill="url(#hull)"
              stroke="var(--color-accent)"
              stroke-width="2"
            />
            <circle
              cx="150"
              cy="100"
              r="30"
              fill="var(--color-surface)"
              stroke="var(--color-border)"
              stroke-width="2"
            />
            <text
              x="200"
              y="180"
              text-anchor="middle"
              fill="currentColor"
              font-family="var(--font-sans)"
              font-size="14"
            >
              Habitat Module Cross-Section
            </text>
          </svg>
          <figcaption>
            Figure 1: <em>Aegis</em> primary habitat module showing the
            bioregenerative layer (inner circle) and radiation shielding.
          </figcaption>
        </figure>

        <h3>Color Palette Validation</h3>
        <p>
          The following swatches demonstrate <code>color-mix()</code> and
          <code>light-dark()</code> adaptation:
        </p>
        <div class="palette-demo">
          <div class="color-swatch swatch-accent">Accent</div>
          <div class="color-swatch swatch-surface">Surface</div>
          <div class="color-swatch swatch-muted">Muted</div>
        </div>
      </section>

      <!-- ADDRESS & FOOTER -->
      <section aria-labelledby="contact-title">
        <h2 id="contact-title">Mission Control</h2>
        <address>
          <p>
            <strong>United Earth Space Agency</strong><br />
            Orbital Station Alpha<br />
            Geostationary Orbit, 35,786 km<br />
            Contact:
            <a href="mailto:mission.control@uesa.earth"
              >mission.control@uesa.earth</a
            >
          </p>
        </address>

        <p>
          <small>
            Document version: <data value="1.2.4">1.2.4</data> | Last updated:
            <time datetime="2045-04-14">April 14, 2045</time> |
            <a href="#top" title="Return to top">↑ Back to top</a>
          </small>
        </p>
      </section>
    </main>
  </div>
</template>

<style>
/* Additional demo-specific styles using the same methodology */
@layer demo {
    .mission-header {
        padding-block: 4rem 2rem;
        text-align: center;
        background: linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 10%, transparent), transparent);
        border-block-end: 1px solid var(--color-border);
        margin-block-end: var(--space-xl);
    }

    .status-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--space-md);
        margin-block: var(--space-lg);
    }

    .status-card {
        padding: var(--space-md);
        border: 1px solid var(--color-border);
        border-radius: 0.5rem;
        background: var(--color-surface);
        container-type: inline-size; /* Enable container query units */
    }

    .status-card h3 {
        font-size: clamp(1rem, 4cqi, 1.25rem); /* cqi units from container */
        margin-block-end: 0.5rem;
        color: var(--color-accent);
    }

    .telemetry-log {
        font-family: var(--font-mono);
        font-size: 0.875rem;
        background: var(--color-surface);
        padding: var(--space-md);
        border-radius: 0.5rem;
        max-block-size: 300px;
        overflow-y: auto;
    }

    .mission-timeline {
        margin-block: var(--space-lg);
        padding-inline-start: 0;
    }

    .mission-timeline li {
        position: relative;
        padding-inline-start: var(--space-lg);
        padding-block: var(--space-sm);
        border-inline-start: 2px solid var(--color-border);
    }

    .mission-timeline li::before {
        content: '';
        position: absolute;
        inset-inline-start: -5px;
        inset-block-start: 1.25rem;
        inline-size: 8px;
        block-size: 8px;
        border-radius: 50%;
        background: var(--color-success, #198754);
    }

    .tech-stack dt {
        font-weight: 600;
        color: var(--color-accent);
        margin-block-start: var(--space-md);
    }

    .tech-stack dd {
        margin-inline-start: 0;
        color: var(--color-muted);
    }

    /* Demonstrating :target for in-page navigation */
    section:target {
        animation: highlight 2s ease;
    }

    @keyframes highlight {
        0% { background-color: color-mix(in srgb, var(--color-accent) 20%, transparent); }
        100% { background-color: transparent; }
    }

    .form-section {
        max-inline-size: 65ch;
        margin-inline: auto;
    }

    .input-group {
        margin-block-end: var(--space-md);
    }

    .checkbox-group {
        display: flex;
        align-items: center;
        gap: var(--space-xs);
        margin-block: var(--space-sm);
    }

    .palette-demo {
        display: flex;
        gap: var(--space-sm);
        flex-wrap: wrap;
        margin-block: var(--space-md);
    }

    .color-swatch {
        inline-size: 80px;
        block-size: 80px;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: 600;
        border: 1px solid var(--color-border);
        box-shadow: 0 2px 4px color-mix(in srgb, black 10%, transparent);
    }

    .swatch-accent { background: var(--color-accent); color: white; }
    .swatch-surface { background: var(--color-surface); }
    .swatch-muted { background: var(--color-muted); color: white; }
}
</style>
