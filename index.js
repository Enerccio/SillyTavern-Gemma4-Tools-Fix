// eslint-disable-next-line no-undef
import {event_types, eventSource} from "/scripts/events.js";
import {oai_settings} from "/scripts/openai.js";

// eslint-disable-next-line no-undef
const $ = jQuery;

function isGemma4() {
    const model = oai_settings.custom_model;
    if (model.toLowerCase().includes("gemma4") || model.toLowerCase().includes("gemma-4")) {
        return true;
    }
    return false;
}

$(async function () {
    eventSource.on(event_types.CHAT_COMPLETION_PROMPT_READY, async (data) => {
        if (!isGemma4()) {
            return;
        }

        for (let mes of data.chat) {
            if (mes.role === "tool") {
                mes.role = "tool_responses";
            }
        }
    });
});
