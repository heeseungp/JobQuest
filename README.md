# JobQuest

 View all applications: GET /applications
 +* Create a new application: POST /applications
 + * Requires company, role, status or comment(optional) 
 +
 +* View specific application: GET /applications/[ApplicationId]
 + * [ApplicationId] is the unique 9 character ID of the application
 +* Edit an application: POST /applications/[ApplicationId]
 + * A new company, role or status must be provided, otherwise old values will remain
 +* Delete an application: DELETE /applications/[ApplicationId]