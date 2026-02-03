INTERVIEW-COACH
🎤 Context-Driven Interview & Presentation Coach

A real-time, automated communication coach that helps students and early-career professionals improve how they present themselves, not what they know.

This application simulates a real interview or presentation environment, evaluates verbal and non-verbal communication, and delivers personalized, actionable feedback in a safe, repeatable setup.

🚩 Problem Statement

Many capable students and professionals struggle in interviews and presentations because of:

Poor posture and body language

Low or inconsistent confidence

Lack of eye contact and camera presence

Speech fluency issues (filler words, pauses, pacing)

No access to personalized, real-time feedback

Most existing tools focus on content correctness or grammar, while non-verbal communication, which strongly influences perception, is largely ignored.

👉 As a result, users keep practicing without knowing what exactly is going wrong.

💡 Solution Overview

This project introduces a context-driven practice system that mimics a real interview flow:

The system presents a random, neutral context

The user gets time to prepare

The user explains the context aloud

The system automatically transitions into an interview panel

The user answers context-based questions on camera

The system evaluates communication effectiveness, not correctness

A detailed performance report with improvement tips is generated

The experience is:

✅ Fully automated

✅ Real-time

✅ User-centric

✅ Repeatable

🎯 Application Goals

Simulate a realistic interview or presentation experience

Help users identify communication weaknesses

Provide actionable, supportive feedback

Focus on delivery, not domain knowledge

🧭 Fixed User Flow (Strictly Followed)

⚠️ This flow is non-negotiable and enforced by the system.

1️⃣ Authentication

Login / Sign-Up (email & password)

2️⃣ Landing Screen

Start Practice

How It Works (optional)

3️⃣ Mode Selection

Presentation Mode

Interview Mode (primary)

4️⃣ Evaluation Scope Selection

Default Mode

Speech & Fluency

Confidence

Posture

Camera / Eye Contact

Outfit & Presence

Content Relevance

Custom Mode

User selects specific aspects

Clothing Assessment is optional

5️⃣ Context Display

Random, domain-agnostic context

Types: interview scenario, article, case study

6️⃣ Preparation Timer

User selects 2–7 minutes

Countdown visible

No evaluation during preparation

Mandatory alert 10 seconds before end

7️⃣ Context Explanation Phase

User explains the context aloud

Selected aspects are evaluated

8️⃣ Automatic Interview Panel

2–3 context-based questions

Questions are displayed and read aloud

No user interaction required to proceed

9️⃣ Interview Q&A Phase

User answers on camera

Communication aspects evaluated

Content relevance checked (on-topic vs off-topic only)

🔟 Session Report & Feedback

🧩 Features Evaluated 🎙️ Speech & Fluency

Filler word detection

Speaking pace

Long pauses

🔥 Confidence (Rule-Based)

Volume consistency

Pace stability

Pause frequency

🧍 Posture

Head tilt

Slouch detection

👀 Camera / Eye Contact

Face centering

Camera-facing consistency

Face leaving frame

👔 Outfit & Presence

Color contrast

Pattern density

Formal vs casual (rule-based)

👕 Clothing Assessment (Optional)

Neatness

Interview appropriateness

Respectful, non-judgmental feedback

❌ No body measurements

📘 Content Relevance

Semantic similarity to context

On-topic vs off-topic only

❌ No correctness scoring

🛠️ Tech Stack Frontend

React / Next.js

Real-time audio & video capture

Progress bars and meters

Backend

FastAPI or Node.js

Session orchestration

Rule-based evaluation logic

AI & CV Tools (Minimal)

Whisper – speech-to-text

Sentence Transformers – semantic similarity

MediaPipe – posture & eye contact

OpenCV – frame & outfit analysis

📌 Most logic is rule-based and system-controlled.

▶️ How to Run the Application (Local)
1️⃣ Clone the Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2️⃣ Install Dependencies
npm install

3️⃣ Start the Development Server
npm run dev

4️⃣ Open in Browser

After running the command, the terminal will display an output similar to:

VITE vX.X.X  ready in XXX ms

➜  Local:   http://localhost:5173/


Open the exact URL shown in your terminal in a browser
(usually http://localhost:5173).

⚠️ Note: The port may vary if 5173 is already in use. Always use the URL printed in the terminal.

🧪 How to Practice (User Flow)

Log in or sign up

Click Start Practice

Choose Interview Mode

Select evaluation scope

Read the context carefully

Prepare within the timer

Explain the context aloud

Answer interview questions naturally

Review your performance report

Practice again and improve 🚀

📊 Feedback & Reporting

After each session, users receive:

Aspect-wise performance scores

Clear progress indicators

Dedicated improvement tips for:

Speech

Confidence

Body language

Camera presence

Appearance

Tone is always:

Positive

Encouraging

Actionable

🧠 Design Philosophy

AI assists, does not decide

Rule-based logic ensures explainability

No invasive or unethical inference

Deterministic and reproducible behavior

The system evaluates communication presence, not intelligence.

🏁 Final Note

This project is built to help users practice effectively, understand their communication gaps, and grow confidence in a realistic but pressure-free environment.