Command to run code 
npm i 
npm run dev
Frontend (React + Redux Toolkit Query)
 1. Auth UI
Pages: /login, /register

Formik with Yup validation

Stores user + token in Redux + localStorage

 2. Dashboard Overview
Device Summary Cards (from GET /telemetry/summary)

Show total and average usage

Device icons based on name

Clickable to drill into device data

 3. Device Chart View
Component: DeviceChart

API: GET /telemetry/:deviceId

Filters records to last 7 days

Chart.js bar chart for energy over time

 4. AI Chat Assistant
Component: EnergyChatbot

Input box for questions

Calls POST /api/chat

Cleans and renders GPT's HTML reply with:

dangerouslySetInnerHTML + DOMPurify

Strips ```html markdown wrapping

Smart responses: e.g.
“How much energy did my AC use?” → only shows Living Room AC

 Redux Store Setup
Modules:

authApi (register, login, logout)

passwordApi (reset password, otp)

telemetryApi (summary, detail)

chatApi (chat assistant)

State:

userSlice for storing user info
