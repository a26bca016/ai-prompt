
// Get HTML Elements
const roleInput = document.getElementById("role");
const taskInput = document.getElementById("task");
const contextInput = document.getElementById("context");
const constraintsInput = document.getElementById("constraints");
const formatInput = document.getElementById("format");

const output = document.getElementById("output");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");
const sampleBtn = document.getElementById("sampleBtn");

const message = document.getElementById("message");


// Generate Prompt Function
function generatePrompt() {

    // Get Input Values
    const role = roleInput.value.trim();
    const task = taskInput.value.trim();
    const context = contextInput.value.trim();
    const constraints = constraintsInput.value.trim();
    const format = formatInput.value;

    // Check Required Fields
    if (!role || !task) {

        message.style.color = "#dc3545";
        message.textContent =
            "Please enter at least the AI Role and Task.";

        return;
    }

    // Create Prompt
    let prompt = `Act as ${role}.

Your Task:
${task}`;

    if (context) {
        prompt += `

Context:
${context}`;
    }

    if (constraints) {
        prompt += `

Constraints:
${constraints}`;
    }

    if (format) {
        prompt += `

Output Format:
${format}`;
    }

    prompt += `

Please provide an accurate, clear, and helpful response.
Explain important concepts with suitable examples where necessary.`;

    // Display Generated Prompt
    output.textContent = prompt;

    // Success Message
    message.style.color = "#27945e";
    message.textContent = "✓ Prompt generated successfully!";
}


// Copy Prompt Function
async function copyPrompt() {

    const prompt = output.innerText.trim();

    if (!prompt || output.querySelector(".placeholder")) {

        message.style.color = "#dc3545";
        message.textContent = "Please generate a prompt first.";

        return;
    }

    try {

        await navigator.clipboard.writeText(prompt);

        message.style.color = "#27945e";
        message.textContent = "✓ Prompt copied to clipboard!";

    } catch (error) {

        message.style.color = "#dc3545";
        message.textContent =
            "Unable to copy. Please select and copy the prompt manually.";

    }
}


// Clear All Function
function clearAll() {

    roleInput.value = "";
    taskInput.value = "";
    contextInput.value = "";
    constraintsInput.value = "";
    formatInput.value = "";

    output.innerHTML =
        '<p class="placeholder">Your generated prompt will appear here...</p>';

    message.textContent = "";
}


// Sample Prompt Function
function loadSample() {

    roleInput.value =
        "an expert programming tutor";

    taskInput.value =
        "Explain the basics of Python programming with practical examples.";

    contextInput.value =
        "I am a first-year college student who is new to programming.";

    constraintsInput.value =
        "Use simple English, avoid complex technical terms, and explain each concept step by step.";

    formatInput.value =
        "Step-by-Step Guide";

    message.style.color = "#27945e";
    message.textContent =
        "✓ Sample prompt loaded! Click Generate Prompt.";

}


// Button Event Listeners
generateBtn.addEventListener("click", generatePrompt);

copyBtn.addEventListener("click", copyPrompt);

clearBtn.addEventListener("click", clearAll);

sampleBtn.addEventListener("click", loadSample);
