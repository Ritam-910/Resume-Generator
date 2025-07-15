
function generateResume() {
  const container = document.querySelector('.resumeForm'); // or the element you want to export
  const opt = {
    margin:       [0.5, 0.5, 0.5, 0.5], // inches (optional, adjust as needed)
    filename:     'Resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(container).save();
}