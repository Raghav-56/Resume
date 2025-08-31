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
    const loadingSpinner = document.getElementById('loadingSpinner');

    if (pdfEmbed) {
        loadingSpinner.style.display = 'block';
        
        // Try direct PDF embedding first
        pdfEmbed.src = resumeFilePath;
        
        pdfEmbed.onload = () => {
            loadingSpinner.style.display = 'none';
            pdfEmbed.style.display = 'block';
        };
        
        // Enhanced error handling for PDF loading
        pdfEmbed.onerror = () => {
            loadingSpinner.style.display = 'none';
            pdfEmbed.style.display = 'none';
            
            // Show fallback
            const fallbackDiv = document.getElementById('pdf-fallback');
            if (fallbackDiv) {
                fallbackDiv.style.display = 'block';
            }
        };
        
        // Alternative: If direct embedding fails, try PDF.js after a delay
        setTimeout(() => {
            if (pdfEmbed.style.display !== 'block') {
                const localPdfUrl = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '/') + resumeFilePath;
                pdfEmbed.src = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(localPdfUrl)}`;
            }
        }, 3000);
    }

    // Update fallback link
    const fallbackLink = document.querySelector('#fallback-download');
    // const fallbackLink = document.querySelector('.pdf-container a');
    if (fallbackLink) {
        fallbackLink.href = resumeFilePath;
    }
});
