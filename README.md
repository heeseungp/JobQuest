# JobQuest

 ## RESTful API Reference

* View all posts: GET /posts
* Create a new post: POST /posts/create
 * Requires title, thread, author (optional) 
* View specific post: GET /posts/[PostId]/show
 * [PostId] is the unique 9 character ID of the post
* Edit a post: POST /posts/[PostId]/edit
 * A new title and/or thread must be provided, otherwise old values will remain
* Delete a post: DELETE /posts/[PostId]/remove
* Vote on a post: POST /vote/[TypeId]/[PostId]
 * [TypeId] can be 'up' to vote up or 'down' to vote down

* Create a new comment: POST /posts/[PostId]/comments/create
* Edit a comment: POST /posts/[PostId]/comments/[CommentId]/edit
 * [CommentId] follows the same convention as [PostId]
* Remove a comment: DELETE /posts/[PostId]/comments/[CommentId]/remove
Id]

* View all applications: GET /applications
* Create a new application: POST /applications/create
 * Requires company, role, status and comment (optional) 
* View specific application: GET /applications/[ApplicationId]/show
 * [ApplicationId] is the unique 9 character ID of the application
* Edit an application: POST /applications/[ApplicationId]/edit
 * A new company, role, status and/or comment must be provided, otherwise old values will remain
* Delete an application: DELETE /applications/[ApplicationId]/remove

