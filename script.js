// Global configuration
const resumeFilePath = 'Resume_Raghav-Gupta.pdf';

// Check if the device is mobile
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById('mobileNotice').style.display = 'block';
}

// Update all resume links on page load
document.addEventListener('DOMContentLoaded', function() {
    // Update download button
    const downloadBtn = document.querySelector('.actions a[download]');
    if (downloadBtn) {
        downloadBtn.href = resumeFilePath;
    }

    // Update PDF object embed
    const pdfEmbed = document.querySelector('.pdf-embed');
    if (pdfEmbed) {
        pdfEmbed.setAttribute('data', resumeFilePath);
    }

    // Update fallback link
    const fallbackLink = document.querySelector('.pdf-container a');
    if (fallbackLink) {
        fallbackLink.href = resumeFilePath;
    }
});
