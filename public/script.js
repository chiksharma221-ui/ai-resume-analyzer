const form = document.getElementById("uploadForm");
const resultDiv = document.getElementById("result");
const loading = document.getElementById("loading");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    loading.classList.remove("hidden");
    resultDiv.innerHTML = "";

    const response = await fetch("/api/analyze", {
        method: "POST",
        body: formData
    });

    const data = await response.json();

    loading.classList.add("hidden");

    renderResult(data);
});

function renderResult(data) {

    let html = `
        <div class="section">
            <h3>ATS Score</h3>
            <p style="font-size:28px;font-weight:bold;">${data.ats_score}/100</p>
        </div>

        <div class="section">
            <h3>Strengths</h3>
            <ul>${data.strengths.map(item => `<li>${item}</li>`).join("")}</ul>
        </div>

        <div class="section">
            <h3>Weaknesses</h3>
            <ul>${data.weaknesses.map(item => `<li>${item}</li>`).join("")}</ul>
        </div>

        <div class="section">
            <h3>Improvement Suggestions</h3>
            <ul>${data.improvement_suggestions.map(item => `<li>${item}</li>`).join("")}</ul>
        </div>

        <div class="section">
            <h3>Recommended Roles</h3>
            <ul>${data.recommended_roles.map(item => `<li>${item}</li>`).join("")}</ul>
        </div>

        <div class="section">
            <h3>Missing Keywords</h3>
            <ul>${data.keyword_gaps.map(item => `<li>${item}</li>`).join("")}</ul>
        </div>
    `;

    resultDiv.innerHTML = html;
}