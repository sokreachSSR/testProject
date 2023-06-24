<!-- PROJECT LOGO -->

<h3 align="center">PORTIFY</h3>

  <p align="center">
     Portify is a social networking website that mainly serves as a platform for users to search for jobs. Additionally, users may build their own online portfolios and request references from companies if required. Also, companies can go through user profiles when they need to find new personnel. In addition, we provide a chat session for both users and companies to chat in real time
  </p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a>
    </li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
<li><a href="#what-we-have-done">What we have done</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

### Built With

- [Spring Boot](https://spring.io/projects/spring-boot)
- [Maven](https://maven.apache.org/)
- [Postgresql](https://www.postgresql.org/)
- [Elasticsearch](https://www.elastic.co/)

<!-- GETTING STARTED -->

## Getting Started

### Installation

### NOTE: JDK 17 required for all installation methods

## Usage

## Steps to test API

### [AuthController](http://localhost:8080/swagger-ui/index.html#/auth-controller)

- Step 01 -> [Register](http://localhost:8080/swagger-ui/index.html#/auth-controller/registerAuth)
- Step 02 -> [Verify OTP code to enable account](http://localhost:8080/swagger-ui/index.html#/auth-controller/confirmEnableRequest)
- Step 03 -> [Resend Verify to enable account](http://localhost:8080/swagger-ui/index.html#/auth-controller/enableAccountRequest)
- Step 04 -> [Login](http://localhost:8080/swagger-ui/index.html#/auth-controller/createAuthenticationToken)

### [UserController](http://localhost:8080/swagger-ui/index.html#/user-controller)

- Step 05 -> [create User details](http://localhost:8080/swagger-ui/index.html#/user-controller/insertUserDeatail)
  **Note:** Please use this [JSON PATTERN](https://docs.google.com/document/d/1IKdAai5hltkHuzaCFauq_TH-BVYi0kt7DXNuIiS5g1Y/edit?usp=sharing) as data input when create user deatail at **userDetails** field to guarantee filter working stable
- Step 06 -> [get user profileDetails](http://localhost:8080/swagger-ui/index.html#/user-controller/getUserDeatailByUser)
  -> [get user detail by userId](http://localhost:8080/swagger-ui/index.html#/user-controller/getUserDetailById) -> [get user suggestion](http://localhost:8080/swagger-ui/index.html#/user-controller/getAllUser)
- Step 07 -> [update user detail by current user ](http://localhost:8080/swagger-ui/index.html#/user-controller/updateUserDeatail)
- Step 08 -> [change user profile image](http://localhost:8080/swagger-ui/index.html#/user-controller/uploadProfile)
- Step 09 -> [change user cover image](http://localhost:8080/swagger-ui/index.html#/user-controller/uploadCover)

### [CompanyController](http://localhost:8080/swagger-ui/index.html#/company-controller)

- Step 10 -> [Create Company](http://localhost:8080/swagger-ui/index.html#/company-controller/createCompany)
- Step 11 -> [get company by current user](http://localhost:8080/swagger-ui/index.html#/company-controller/getCompanyByuser_1) -> [get company by companyId](http://localhost:8080/swagger-ui/index.html#/company-controller/getCompanyById)->[get all company ](http://localhost:8080/swagger-ui/index.html#/company-controller/getAllCompany)
- Step 12 -> [update Company name](http://localhost:8080/swagger-ui/index.html#/company-detail-controller/updateCompanydetai)

### [ CompanyDetail Controller](http://localhost:8080/swagger-ui/index.html#/company-detail-controller)

- Step 13 -> [ create company detail](http://localhost:8080/swagger-ui/index.html#/company-detail-controller/insertCompanyDetail)
- Step 14 -> [update company detail](http://localhost:8083/swagger-ui/index.html#/template-rest-controller/findTemplate)
- Step 15 -> [update company profile image ](http://localhost:8080/swagger-ui/index.html#/company-detail-controller/updateCompanyProfile)
- Step 16 -> [update company cover image](http://localhost:8080/swagger-ui/index.html#/company-detail-controller/updateCompanyCover)
- Step 17 -> [get company by current company](http://localhost:8080/swagger-ui/index.html#/company-detail-controller/getCompanyByuser) -> [get company detail by company id](http://localhost:8080/swagger-ui/index.html#/company-detail-controller/getCompanyDetailById)

### [Post Controller](http://localhost:8080/swagger-ui/index.html#/post-controller)

- Step 18 -> [ create post](http://localhost:8080/swagger-ui/index.html#/post-controller/insertPost) **Note:** if you want create post by company please change the isCompany to true but if you don't have company cannot post it.
- Step 19 -> [get post by current user](http://localhost:8080/swagger-ui/index.html#/post-controller/getPostByUser) -> [get post by post id](http://localhost:8080/swagger-ui/index.html#/post-controller/getPostById) -> [get all post](http://localhost:8080/swagger-ui/index.html#/post-controller/getAllPosts)
- Step 20 -> [update post by postId ](http://localhost:8080/swagger-ui/index.html#/post-controller/updatePostById)
- Step 21 -> [delete post by postId ](http://localhost:8080/swagger-ui/index.html#/post-controller/deletePost)
- Step 22 -> [like and dislike post by postId](http://localhost:8080/swagger-ui/index.html#/post-controller/disLikePostByPostId)
- Step 23 -> [create comment by postId](http://localhost:8080/swagger-ui/index.html#/post-controller/comment) -> [get all comment by postId](http://localhost:8080/swagger-ui/index.html#/post-controller/getCommentByPostIdAndCommentId) -> [update comment by postId and commentId](http://localhost:8080/swagger-ui/index.html#/post-controller/updateCommentById)
  -> [delete comment by postId and commentId](http://localhost:8080/swagger-ui/index.html#/post-controller/deleteCommentById)

### [Job-announcement-controller](http://localhost:8080/swagger-ui/index.html#/job-announcement-controller)

- Step 24 -> [ create job announcement ](http://localhost:8080/swagger-ui/index.html#/job-announcement-controller/insertJobAnnouncement)
- Step 25 -> [ get job announcement by current company ](http://localhost:8080/swagger-ui/index.html#/job-announcement-controller/getAnnouncementByUser) -> [get job announcement by jobAnnouncementId](http://localhost:8080/swagger-ui/index.html#/job-announcement-controller/getAnnouncementById) -> [get job announcement by filter](http://localhost:8080/swagger-ui/index.html#/job-announcement-controller/filterJobAnnouncement) ->[get all job announcement](http://localhost:8080/swagger-ui/index.html#/job-announcement-controller/getAnnouncementOnLanding)
- Step 26 -> [update job announcement by id](http://localhost:8080/swagger-ui/index.html#/job-announcement-controller/updateJobAnnouncementById)
- Step 27 -> [delete job announcement by id](http://localhost:8080/swagger-ui/index.html#/job-announcement-controller/deleteJobAnnouncement)

### [saved-post Controller](http://localhost:8080/swagger-ui/index.html#/saved-post-controller)

- Step 28 -> [ save post and announcement by post and announcement Id ](http://localhost:8080/swagger-ui/index.html#/saved-post-controller/insertSavedPostByPostId)
- Step 29 -> [ get all save posts](http://localhost:8080/swagger-ui/index.html#/saved-post-controller/getAllSaveByUser) ->[get all post ](http://localhost:8080/swagger-ui/index.html#/saved-post-controller/getAllSavedPost) -> [get all announcement](http://localhost:8080/swagger-ui/index.html#/saved-post-controller/getAllSavedJobAnnouncement)
- Step 30 -> [unsave post and announcement by Id](http://localhost:8080/swagger-ui/index.html#/saved-post-controller/deleteSavedPostById)

### [apply-job Controller](http://localhost:8080/swagger-ui/index.html#/apply-job-controller)

- Step 31 -> [ apply job by jobAnnouncementId ](http://localhost:8080/swagger-ui/index.html#/apply-job-controller/applyJob) **Note:** for file upload accept PDF file only
- Step 32 -> [ update apply job by applyJobId](http://localhost:8080/swagger-ui/index.html#/apply-job-controller/updateAppliedJob)
- Step 33 -> [delete apply job by applyJobId](http://localhost:8080/swagger-ui/index.html#/apply-job-controller/deleteAppliedJob)
- Step 34 -> [get CV by jobAnnouncementId for user ](http://localhost:8080/swagger-ui/index.html#/apply-job-controller/getCVByAnnouncementId)
- Step 35 -> [get list of CV by annoumentId for company](http://localhost:8080/swagger-ui/index.html#/apply-job-controller/getAllCvByAnnouncementId)

### [Interest Controller](http://localhost:8080/swagger-ui/index.html#/interest-controller)

- Step 36 -> [ Interest user by company ](http://localhost:8080/swagger-ui/index.html#/interest-controller/interestAndUnInterest)
- Step 37 -> [ get list of user interest by company](http://localhost:8080/swagger-ui/index.html#/interest-controller/getUserList)
- Step 38 -> [get list of company by interest](http://localhost:8080/swagger-ui/index.html#/interest-controller/getCompanyList)

### [Follow Controller](http://localhost:8080/swagger-ui/index.html#/follow-controller)

- Step 39 -> [follow and Unfollow Users](http://localhost:8080/swagger-ui/index.html#/follow-controller/followByCurrentUser) **Note:** if userId already follow when you execute again it will unfollow
- Step 40 -> [get following ](http://localhost:8080/swagger-ui/index.html#/follow-controller/getFollowingByuser) -> [get followers](http://localhost:8080/swagger-ui/index.html#/follow-controller/getFollowerByUser)

### [Follow-Company controller](http://localhost:8080/swagger-ui/index.html#/follow-company-controller)

- Step 41 -> [ follow company by user ](http://localhost:8080/swagger-ui/index.html#/follow-company-controller/followCompany)
- Step 42 -> [ get company follower ](http://localhost:8080/swagger-ui/index.html#/follow-company-controller/getCompanyFollower)

### [Search controller](http://localhost:8080/swagger-ui/index.html#/search-controller)

- Step 43 -> [ search user and company by character ](http://localhost:8080/swagger-ui/index.html#/search-controller/searchByCharacter)
- Step 44 -> [ search job by character ](http://localhost:8080/swagger-ui/index.html#/search-controller/searchJob)

### [Chat controller](http://localhost:8080/swagger-ui/index.html#/chat-controller)

- Step 45 -> [ send message by receiverId ](http://localhost:8080/swagger-ui/index.html#/chat-controller/addMessage) **Note:** receiverId is a userId or companyId
- Step 46 -> [ get message from receiver by receiverId](http://localhost:8080/swagger-ui/index.html#/chat-controller/getMessage)

### [Notification controller](http://localhost:8080/swagger-ui/index.html#/notification-controller)

- Step 47 -> [ push notification by post Id or announment Id ](http://localhost:8080/swagger-ui/index.html#/notification-controller/addPostNotification)
- Step 48 -> [ push notification for reference ](http://localhost:8080/swagger-ui/index.html#/notification-controller/addRefferenceNotification)
- Step 49 -> [ get list notification](http://localhost:8080/swagger-ui/index.html#/notification-controller/getNotification)

### [image controller](http://localhost:8080/swagger-ui/index.html#/image-controller)

- Step 50 -> [ render image for post and profile by file name](http://localhost:8080/swagger-ui/index.html#/image-controller/getImagesByFileName)

### [user-reference-controller](http://localhost:8080/swagger-ui/index.html#/user-reference-controller)

- Step 51 -> [create reference or certificate by yourself ](http://localhost:8080/swagger-ui/index.html#/user-reference-controller/createReferenceByUser)
- Step 52 -> [update reference or certificat by referenceId](http://localhost:8080/swagger-ui/index.html#/user-reference-controller/updateReferenceById)
- Step 53 -> [delete reference or certificat by referenceId](http://localhost:8080/swagger-ui/index.html#/user-reference-controller/deleteReferenceById)
- Step 54 -> [get all reference by user](http://localhost:8080/swagger-ui/index.html#/user-reference-controller/getAllByUser)

### [reference-controller](http://localhost:8080/swagger-ui/index.html#/reference-controller)

- Step 55 -> [create request reference or certificate to company](http://localhost:8080/swagger-ui/index.html#/reference-controller/requestReferenceFromUser)
- Step 56 -> [get all request of user](http://localhost:8080/swagger-ui/index.html#/reference-controller/listAllRequestByCompany)
- Step 57 -> [update status to accept reference by company](http://localhost:8080/swagger-ui/index.html#/reference-controller/acceptReference)
  **Note:** when you update to accept you will get defaut form by type of reference or certificate ->[update to process](http://localhost:8080/swagger-ui/index.html#/reference-controller/insertReference) **Note:** when you update to proceess you can update new form ->[update to completed](http://localhost:8080/swagger-ui/index.html#/reference-controller/completeReference)
  **Note:** when you update to compelete after finish it but to need to update it to process first if you status on accept you cannot update to complete.->[reject reference by referenceId](http://localhost:8080/swagger-ui/index.html#/reference-controller/rejectReference)
- Step 58 -> [get all reference by user](http://localhost:8080/swagger-ui/index.html#/user-reference-controller/getAllByUser)
- Step 59 -> [get all complete reference by user](http://localhost:8080/swagger-ui/index.html#/reference-controller/getReferenceForm)
- Step 60 -> [cancel reference by user](http://localhost:8080/swagger-ui/index.html#/reference-controller/cancelRequestById)

## What we have done

- [AuthController](http://localhost:8080/swagger-ui/index.html#/auth-controller)
- [UserController](http://localhost:8080/swagger-ui/index.html#/user-controller)
- [CompanyController](http://localhost:8080/swagger-ui/index.html#/company-controller)
- [CompanyDetail Controller](http://localhost:8080/swagger-ui/index.html#/company-detail-controller)
- [Post Controller](http://localhost:8080/swagger-ui/index.html#/post-controller)
- [Job-announcement-controller](http://localhost:8080/swagger-ui/index.html#/job-announcement-controller)
- [saved-post Controller](http://localhost:8080/swagger-ui/index.html#/saved-post-controller)
- [apply-job Controller](http://localhost:8080/swagger-ui/index.html#/apply-job-controller)
- [Interest Controller](http://localhost:8080/swagger-ui/index.html#/interest-controller)
- [Follow Controller](http://localhost:8080/swagger-ui/index.html#/follow-controller)
- [Follow-Company controller](http://localhost:8080/swagger-ui/index.html#/follow-company-controller)
- [Search controller](http://localhost:8080/swagger-ui/index.html#/search-controller)
- [Chat controller](http://localhost:8080/swagger-ui/index.html#/chat-controller)
- [Notification controller](http://localhost:8080/swagger-ui/index.html#/notification-controller)
- [image controller](http://localhost:8080/swagger-ui/index.html#/image-controller)
- [user-reference-controller](http://localhost:8080/swagger-ui/index.html#/user-reference-controller)
- [reference-controller](http://localhost:8080/swagger-ui/index.html#/reference-controller)
