import { saveAs } from "file-saver";
import XLSX from "xlsx";
import { JSZip } from "jszip";

const exportToCSV = (data, filename) => {
  const csvContent = data.map((row) => row.join(",")).join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
  saveAs(blob, filename);
};

const exportToExcel = (data, filename) => {
  const ws = XLSX.utils.aoa_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  const excelBlob = new Blob([XLSX.utils.book_as_array_buffer(wb)], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  saveAs(excelBlob, filename);
};

const exportToZip = (data, filenames) => {
  const zip = new JSZip();
  data.forEach((rows, i) => {
    const ws = XLSX.utils.aoa_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, filenames[i]);
    const excelBuffer = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
    zip.file(`${filenames[i]}.xlsx`, excelBuffer, { binary: true });
  });
  zip
    .generateAsync({ type: "blob" })
    .then((blob) => saveAs(blob, "export.zip"));
};

const copyToClipboard = (data) => {
  const csvContent = data.map((row) => row.join(",")).join("\n");
  const textarea = document.createElement("textarea");
  textarea.value = csvContent;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};

const printData = (data) => {
  const csvContent = data.map((row) => row.join(",")).join("\n");
  const printWindow = window.open("", "", "height=600,width=800");
  printWindow.document.write(`<pre>${csvContent}</pre>`);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  printWindow.close();
};

const ExportFunctions = {
  exportToCSV,
  exportToExcel,
  exportToZip,
  copyToClipboard,
  printData,
};

export default ExportFunctions;
