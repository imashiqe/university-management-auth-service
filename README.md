# university-management-auth-service

The University Management System (UMS) is a comprehensive software platform designed to streamline and enhance the administrative, academic, and communication processes within a university. It is tailored to accommodate the specific needs of three distinct user roles: Admin, Student, and Faculty. The UMS aims to provide a seamless and efficient experience for all stakeholders involved in the university ecosystem.

Admin Role:

User Management: Administrators have the authority to create, manage, and deactivate user accounts, including students and faculty members.
Course and Curriculum Management: Admins can oversee and update course offerings, curricula, and academic programs.
Enrollment and Registration: They oversee the enrollment process, ensuring that students are correctly registered for their courses.
Financial Management: Administrators handle financial transactions, including tuition fees, scholarships, and grants.
Data Analytics and Reporting: They have access to data analytics tools to track university performance and generate reports.
Communication Hub: Admins can send important announcements and messages to students and faculty members through the system.
Security and Access Control: They are responsible for maintaining the security of the system, managing role-based access, and implementing data privacy measures.
Student Role:

Registration and Enrollment: Students can register for courses, view their schedules, and enroll in classes.
Academic Records: They have access to their academic records, including grades, transcripts, and progress reports.
Communication: Students can communicate with professors, advisors, and peers through the system.
Financial Information: Access to tuition payment information, scholarship applications, and financial aid.
Course Materials: Access to course materials, syllabi, assignments, and online learning resources.
Library and Resource Booking: Ability to reserve library materials and academic resources.
Personal Profile: Students can update their personal information and track their academic progress.
Faculty Role:

Course Management: Faculty members can create and manage course materials, assignments, and grades.
Communication: They can communicate with students, colleagues, and administrators.
Attendance and Assessment: Faculty can track student attendance and conduct assessments.
Research and Publications: Access to research resources, publication management, and research collaboration tools.
Advising: Faculty members can advise and mentor students, track their progress, and schedule office hours.
Curriculum Development: They can propose changes to the curriculum and suggest new courses.
Personal Profile: Faculty can update their personal and professional information.
The University Management System aims to improve the overall efficiency of university operations, enhance communication among stakeholders, and provide a user-friendly interface for students, faculty, and administrators. It helps universities adapt to the demands of modern education and administration while ensuring data security and compliance with relevant regulations.

Functional Requirement:
1.	Student
•	Student  Can  Login and  Log out
•	Student  can manage  and update their profile
•	Student  can update  certain fields
•	Student  can enroll in  a semester
•	Student can  enroll  in offered  courses  for  a specific Semester
•	Student Can Pay their  tuition fees through  offline or online (Partial / Full Payment)
•	Student Can  See  Their  transaction histories.
•	Student  can  see  their  class routines.
•	Student  can see  their  notice board  and events
•	Student can see  their result (Full / semester wise)
•	Student Can  evaluation their  teachers.
2.	Admin
•	Admin  can  log in log out
•	Admin can manage and update their profile
•	Admin Can Only update certain  fields
•	Admin Can Manage  user accounts
	Block / unblock
	Change Password
	Forcefully Logout
                      Admin Can Manage  multiple process:
	Semester
	Offered Courses
	Section
	Faculty
	Student 
	Building
	Room
	Payment
	Permissions
	Activity



3.	Faculty:
•	Faculty Can  log in and log out
•	Faculty Can Manage  and update their  profile
•	Faculty can  only update certain fields.
•	Faculty can manage user accounts
•	Faculty can  manage student grades
•	Access to  Academic  and Personal  Information.
•	Faculty Can  Manage  their  lecture resource

Authentication Services :
Permission:
1.	Title
UserPermission:
1.	permissionId
2.	userID
User:
1.	Id
2.	Role
3.	Password
4.	CreatedAt
5.	UpdatedAt
6.	StudentId || AdminId || FacultyId
Student :
1.	Id
2.	password
3.	role
4.	name
a)	firstName
b)	middleName
c)	lastName
5.	Guardian
6.	Contact No
7.	Emergency Contact No
8.	Present Address
9.	Permanent address
10.	Department
11.	Subject
12.	Email
13.	Gender 
14.	Birth Date








Admin :
1.	Id
2.	password
3.	role
2.name
d)	firstName
e)	middleName
f)	lastName
4.	f
5.	Gender
6.	birthdate
7.	Email
8.	Contact Number
9.	Emergency
10.	Department
11.	Designation

Faculty:
1.	id
2.	name
a)	firsName
b)	middleName
c)	lastName
3.	gender
4.	dateOfBirth
5.	email
6.	contact No
7.	EmergencyContactNo
8.	Department
9.	Faculty
10.	Designation

  
API END POINTS      
•	User:
o	users/create-students (POST)
o	users/create-faculty (POST)
o	users/create-admin (POST)
o	users/my-profile (GET)
o	users/:id (GET)
o	users/:id (PATCH)
o	users/:id (DELETE)
o	users/:id force-logged-out
o	users?pages=1&limit=10 (GET)
o	users/:id/available-permissions?pages=1&limit=10 (GET)
o	users/:id/assigned-permissions?page=1&limit=10(GET)
o	users/:id/assign-permissions (POST)
o	users/:id/remove-permissions (POST)
o	
            


•	Student :
o	Students/:id  (PATCH)
o	Students?page=1&limit=10 (GET)
o	Students/:id (GET)
o	Students/:delete (DELETE)
•	Faculty:
o	faculties /:id  (PATCH)
o	faculties?page=1&limit=10 (GET)
o	faculties /:id (GET)
o	faculties /:delete (DELETE)
•	Admin:
o	admin /:id  (PATCH)
o	admin?page=1&limit=10 (GET)
o	admin /:id (GET)
o	admin /:delete (DELETE)
•	Permission:
o	Permissions?page=1&limit=10 (GET)
o	Permissions (POST)
o	Permissions/:id (GET)
o	Permissions/:id (PATCH)
o	Permissions/:id (DELETE)
•	Auth:
o	Auth/login (POST)
o	Auth/refresh-token (POST)
o	Auth/change-password ( POST)
o	Auth/forgot-password(POST)
o	Auth/reset-password (POST)

Plans:
1.	Project setup [.gitignore]
2.	Eslint & Prettier
3.	Husky and Lint Stage






