function cnPortalRefresh(){const d=cnLoad();document.querySelectorAll('[data-live-applications]').forEach(e=>e.textContent=d.applications.length);document.querySelectorAll('[data-live-notifications]').forEach(e=>e.textContent=cnNotifications().filter(n=>!n.read).length)}
function cnRecruiterStatus(id,status){cnUpdateApplication(id,status);cnPortalRefresh()}
function cnRecruiterAssessment(student,company,title){cnAssignAssessment({student,company,title});cnPortalRefresh()}
function cnRecruiterInterview(student,company,job,round,date,time){cnScheduleInterview({student,company,job,round,date,time});cnPortalRefresh()}
window.addEventListener('careernexus-sync',cnPortalRefresh);window.addEventListener('storage',cnPortalRefresh);
