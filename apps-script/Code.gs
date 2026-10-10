// Google Apps Script: emails every form submission to hellowork.abhi@gmail.com.
// Setup: see README.md ("Lead form email").
const TO = 'hellowork.abhi@gmail.com';

function doPost(e) {
  let d = {};
  try { d = JSON.parse(e.postData.contents); } catch (err) { d = e.parameter || {}; }
  const lines = [
    'Name: ' + (d.name || ''),
    'Email: ' + (d.email || ''),
    'Instagram: ' + (d.instagram || ''),
    'Goal: ' + (d.goal || ''),
    'Viewed: ' + (d.page_view || ''),
    'Page: ' + (d.page || '')
  ];
  MailApp.sendEmail({
    to: TO,
    replyTo: d.email || TO,
    subject: 'New lead from The Instagram Network Playbook: ' + (d.name || 'unknown'),
    body: lines.join('\n')
  });
  return ContentService.createTextOutput('ok');
}
