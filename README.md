# JobQuest

 ## RESTful API Reference

* View all posts: GET /posts
* Create a new post: POST /posts
 * Requires title, thread, author (optional) 

* View specific post: GET /posts/[PostId]
 * [PostId] is the unique 9 character ID of the post
* Edit a post: POST /posts/[PostId]
 * A new title and/or thread must be provided, otherwise old values will remain
* Delete a post: DELETE /posts/[PostId]

* Vote on a post: POST /vote/[TypeId]/[PostId]
 * [TypeId] can be 'up' to vote up or 'down' to vote down

* Create a new comment: POST /posts/[PostId]/comment
* Edit a comment: POST /posts/[PostId]/comment/[CommentId]
 * [CommentId] follows the same convention as [PostId]
* Remove a comment: DELETE /posts/[PostId]/comment/[CommentId]
Id]

* View all applications: GET /applications
* Create a new application: POST /applications
 * Requires company, role, status and coment (optional) 

* View specific application: GET /applications/[ApplicationId]
 * [ApplicationId] is the unique 9 character ID of the application
* Edit an application: POST /applications/[ApplicationId]
 * A new company, role, status and/or coment must be provided, otherwise old values will remain
* Delete an application: DELETE /applications/[ApplicationId]

