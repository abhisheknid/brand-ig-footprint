// Google Apps Script bound to a Google Sheet: saves every form submission as a row
// and emails it to hellowork.abhi@gmail.com. Setup: see README.md ("Lead form").
const TO = 'hellowork.abhi@gmail.com';
const HEADERS = ['Time', 'Name', 'Email', 'Instagram', 'Goal', 'View', 'Page'];

function doPost(e) {
  let d = {};
  try { d = JSON.parse(e.postData.contents); } catch (err) { d = e.parameter || {}; }

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  sheet.appendRow([new Date(), d.name || '', d.email || '', d.instagram || '', d.goal || '', d.page_view || '', d.page || '']);

  MailApp.sendEmail({
    to: TO,
    replyTo: d.email || TO,
    subject: 'New lead from The Instagram Network Playbook: ' + (d.name || 'unknown'),
    body: HEADERS.slice(1).map((h, i) => h + ': ' + [d.name, d.email, d.instagram, d.goal, d.page_view, d.page][i]).join('\n')
  });
  return ContentService.createTextOutput('ok');
}
