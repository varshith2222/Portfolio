// Toggle project details visibility with animation
function toggleDetails(projectId) {
    const projectDetails = document.getElementById(projectId);
    if (projectDetails.style.display === "block") {
        projectDetails.style.opacity = "0";
        projectDetails.style.transform = "scaleY(0)";
        setTimeout(() => {
            projectDetails.style.display = "none";
        }, 300);
    } else {
        projectDetails.style.display = "block";
        setTimeout(() => {
            projectDetails.style.opacity = "1";
            projectDetails.style.transform = "scaleY(1)";
        }, 10);
    }
}
