<template>
  <section class="timeline" id="timeline">
    <div class="timeline-container">
      <h2>Career Timeline</h2>

      <ul>
        <li>
          <span class="year">Early Career</span>
          <p>
            Enrolled in <strong>Military High School</strong> at age 14, later graduating from the 
            <strong>Military Academy</strong> and qualifying as a fighter pilot.
          </p>
        </li>

        <li>
          <span class="year">MiG-21 Pilot</span>
          <p>
            Became a certified pilot of the <strong>MiG-21 supersonic fighter aircraft</strong>, 
            flying missions exceeding twice the speed of sound.
          </p>
        </li>

        <li>
          <span class="year">1999</span>
          <p>
            Flew defensive combat missions during the <strong>1999 conflict in Serbia</strong>, 
            demonstrating exceptional courage under extreme operational risk.
          </p>
        </li>

        <li>
          <span class="year">Post-Conflict Period</span>
          <p>
            Transitioned to the <strong>Military Intelligence Agency</strong>, contributing through 
            analytical, operational, and strategic expertise.
          </p>
        </li>

        <li>
          <span class="year">Academic Achievement</span>
          <p>
            Earned a <strong>Master’s Degree in Political Science</strong>, with a thesis focused on 
            <strong>Kosovo and Metohija</strong>.
          </p>
        </li>

        <li>
          <span class="year">Diplomatic Service</span>
          <p>
            Appointed <strong>Military Attaché of the Republic of Serbia in Bucharest, Romania</strong>, 
            serving a three-year diplomatic mandate.
          </p>
        </li>

        <li>
          <span class="year">Strategic Negotiations</span>
          <p>
            Served as <strong>Director of the Office for Coordination in Negotiations with Pristina</strong>, 
            representing Serbia in high-level negotiations.
          </p>
        </li>

        <li>
          <span class="year">Current Position</span>
          <p>
            Serving as <strong>Military Attaché of the Republic of Serbia in Jakarta, Indonesia</strong>.
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.timeline {
  padding: 6rem 2rem;
  background: url('/grb.jpg') center/cover no-repeat;
  background-color: #1a1a1a;
  position: relative;
}

/* Optional dark overlay for readability */
.timeline::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.92);
}

.timeline-container {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  font-family: "Georgia", "Times New Roman", serif;
  color: #1a1a1a;
}

/* Heading */
.timeline h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
}

/* List styling */
.timeline ul {
  list-style: none;
  padding: 0;
}

/* Timeline items */
.timeline li {
  margin-bottom: 2.5rem;
  padding-left: 1.5rem;
  border-left: 2px solid rgba(0, 0, 0, 0.2);
  position: relative;
}

/* Dot indicator */
.timeline li::before {
  content: "";
  position: absolute;
  left: -7px;
  top: 5px;
  width: 10px;
  height: 10px;
  background: #1a1a1a;
  border-radius: 50%;
}

/* Year / Label */
.year {
  font-weight: 600;
  display: block;
  margin-bottom: 0.5rem;
}

/* Paragraph text */
.timeline p {
  margin: 0;
  line-height: 1.7;
}
</style>
