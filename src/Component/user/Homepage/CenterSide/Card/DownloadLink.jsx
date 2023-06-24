function DownloadLink() {
  fetch('http://localhost:8080/api/v1/apply-job/get-cv-file?filename=430-Exam%202022.pdf')
    .then(response => response.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'my-file.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
}