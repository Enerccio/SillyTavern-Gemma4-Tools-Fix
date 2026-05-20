
# SillyTavern-Gemma4-Tools-Fix

A simple extension for SillyTavern that ensures compatibility with **Gemma 4** models when using tool calling.

## Description

Some API implementations for Gemma 4 require a specific role identifier for tool responses. This extension monitors the chat completion prompt and automatically converts the role `tool` to `tool_responses` whenever a Gemma 4 model is detected in the settings.

## Compatibility

- **Model:** Gemma 4 / Gemma-4
- **Framework:** SillyTavern

## Installation

1. Open SillyTavern.
2. Navigate to **Extensions** -> **Install Extension**.
3. Paste the following GitHub link into the input field:
   `https://github.com/Enerccio/SillyTavern-Gemma4-Tools-Fix`
4. Click **Install**.
5. Restart SillyTavern if prompted.

## License

This project is released into the public domain under the Unlicense.
