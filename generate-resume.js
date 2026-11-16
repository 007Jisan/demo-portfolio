import fs from 'fs';
import path from 'path';

// Generate a valid, clean PDF document for Abidur Rahman Jisan
function generateSimplePDF() {
  const content = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 612 792]
  /Contents 4 0 R
  /Resources <<
    /Font <<
      /F1 5 0 R
      /F2 6 0 R
    >>
  >>
>>
endobj
4 0 obj
<<
  /Length 1200
>>
stream
BT
/F2 20 Tf
50 740 Td
(ABIDUR RAHMAN JISAN) Tj
/F1 11 Tf
0 -18 Td
(Full Stack Developer (MERN Stack) & Software Quality Assurance Engineer) Tj
0 -14 Td
(Email: jisan33.info@gmail.com | Phone: +880 1765561928 | Dhaka, Bangladesh) Tj
0 -14 Td
(GitHub: github.com/007Jisan | LinkedIn: linkedin.com/in/abidur-rahman-jisan-a303b9312/) Tj

/F2 13 Tf
0 -26 Td
(PROFESSIONAL SUMMARY) Tj
/F1 10 Tf
0 -15 Td
(Building scalable web applications and ensuring bug-free user experiences through clean code) Tj
0 -13 Td
(and rigorous quality assurance. Experienced in full-stack MERN engineering, RESTful APIs,) Tj
0 -13 Td
(and end-to-end software testing (black-box, white-box, regression, UAT).) Tj

/F2 13 Tf
0 -24 Td
(TECHNICAL SKILLS) Tj
/F1 10 Tf
0 -15 Td
(Frontend: React.js, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Responsive UI Design) Tj
0 -13 Td
(Backend: Node.js, Express.js, MongoDB, REST APIs, OpenRouter API Integration) Tj
0 -13 Td
(SQA & Testing: Manual Testing, Black-Box/White-Box, Regression, UAT, Test Coverage) Tj
0 -13 Td
(Tools & Platforms: Git, GitHub, VS Code, Render, Vercel, UML & ER Diagramming) Tj

/F2 13 Tf
0 -24 Td
(EDUCATION) Tj
/F1 10 Tf
0 -15 Td
(B.Sc. in Software Engineering - Daffodil International University (DIU), 2022 - 2026 (Final Year)) Tj
0 -13 Td
(Higher Secondary Certificate (HSC) - Rajendrapur Cantonment Public School & College, 2020) Tj
0 -13 Td
(Secondary School Certificate (SSC) - Rajendrapur Cantonment Public School & College, 2018) Tj

/F2 13 Tf
0 -24 Td
(KEY PROJECTS) Tj
/F1 10 Tf
0 -15 Td
(1. Bug Tracking & Test Management System (Capstone Project) - MERN Stack, RBAC) Tj
0 -13 Td
(2. ExploreWithGenie - AI-powered travel assistant using React & OpenRouter API) Tj
0 -13 Td
(3. BazarDor - Market price monitoring web application (React, Node, Express, MongoDB)) Tj
0 -13 Td
(4. FitLog - Full-stack fitness & workout tracker web application) Tj
ET
endstream
endobj
5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
6 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj
xref
0 7
0000000000 65535 f 
0000000010 00000 n 
0000000060 00000 n 
0000000117 00000 n 
0000000270 00000 n 
0000001530 00000 n 
0000001601 00000 n 
trailer
<<
  /Size 7
  /Root 1 0 R
>>
startxref
1677
%%EOF`;

  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.writeFileSync(path.join(publicDir, 'Abidur_Rahman_Jisan_Resume.pdf'), content.trim());
  console.log('Resume PDF generated successfully at public/Abidur_Rahman_Jisan_Resume.pdf');
}

generateSimplePDF();
