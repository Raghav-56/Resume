const resumeFilePath = 'Resume_Raghav-Gupta.pdf';

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById('mobileNotice').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {

    const downloadBtn = document.querySelector('.actions a[download]');
    if (downloadBtn) {
        downloadBtn.href = resumeFilePath;
    }

    const pdfEmbed = document.querySelector('.pdf-embed');
    if (pdfEmbed) {
        pdfEmbed.src = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent("https://raw.githubusercontent.com/Raghav-56/Resume/main/Resume_Raghav-Gupta.pdf")}`;
        
        // pdfEmbed.src = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '/') + resumeFilePath)}`;

        // pdfEmbed.src = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent("https://github.com/Raghav-56/Resume/blob/main/Resume_Raghav-Gupta.pdf")}`;

        // pdfEmbed.setAttribute('data', resumeFilePath);
    }

    // Update fallback link
    const fallbackLink = document.querySelector('#fallback-download');
    // const fallbackLink = document.querySelector('.pdf-container a');
    if (fallbackLink) {
        fallbackLink.href = resumeFilePath;
    }
});
