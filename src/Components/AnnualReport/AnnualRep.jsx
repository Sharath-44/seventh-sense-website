import React from 'react';

const annualReports = [
  {
    id: 1,
    title: 'Annual Report 2023-24',
    src: '/reports/report1.jpg', 
    pdfLink: 'https://example.com/path-to-annual-report-2021.pdf',
    alt: 'Annual Report 2024',
  },
  // Add more annual reports as needed
];

const AnnualRep = () => {
  const handlePhotoClick = (pdfLink) => {
    window.open(pdfLink, '_blank'); 
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-2 text-center">Annual Reports</h1>
      <div className="h-1 w-24 bg-blue-800 mx-auto mb-4"></div>
      <div className="flex flex-col pt-4 items-center gap-4">
        {annualReports.map((report) => (
          <div key={report.id} className="cursor-pointer" onClick={() => handlePhotoClick(report.pdfLink)}>
            <img
              src={report.src}
              alt={report.alt}
              title={report.title}
              className="rounded-lg shadow-lg"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p className="mt-2 text-center font-bold">{report.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnualRep;
