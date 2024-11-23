document.getElementById("downloadCvBtn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "E:/Web Development COZ IT GURU/Assignment/Personal Portfolio Website/downloads/liyanage.pdf";
    link.download = "Liyanage.pdf";
    link.click();
});