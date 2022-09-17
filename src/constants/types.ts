export interface IdName {
  id: string;
  name: string;
}
export interface KeyValues{
  [key: string]: any;
}

export interface PDF {
  id: string,
  subCode: string,
  uploadDate: Date,
  collegeId: string,
  name: string,
  views: number,
  // teacher: IdName,
  teacher: string,
  viewLink: string,
  downloadLink: string,
  pdfFor: pdfFor,
  year: number,
  sem: number,
  rating: number,
  comments: Comment[]
}

export interface Comment {
  id: string;
  commentedBy: IdName,
  onDate: Date,
  comment: string;
}

export type pdfFor = 'quiz' | 'mid' | 'end';

export interface College {
  id: string,
  name: string,
  teachers?: string[],
  exams?: string[]
}

// export interface College {
//   id: string,
//   name: string,
//   teachers: Teacher[],
//   courses: Course[]
// }

export interface Teacher{
  id: string,
  name: string,
  subjects: string[], // subject id
}

export interface Course {
  id: string,
  name: string,
  duration: number; // years
  semesters: Semester[]
}

export interface Semester{
  id: number,
  subjects: Subject[]
}

export interface Subject {
  id: string,
  name: string,
  taughtBy: IdName,
}

export interface User {
    id: string,
    name: string,
    email: string,
    age?: number,
    profileImage?: string,
    title?: string,
    college?: string,
    batch?: number,
    chats?: any,
    technologiesUsed?: string[],
    uploads?: {
      projects: Project[],
      documents: PDF[],
    }
    bookmarks?: {
      documents: string[], // document ids
      projects: string[] // project ids
    },
}

export interface Project{
  id: string,
  uploadDate: Date,
  uplodedBy: IdName,
  technologiesUsed: string[],
  description: string,
  images?: string[],  
  interestedUsers?: IdName[],
}

export interface Option{
  label: string,
  value: string
}

export type Options = Option[];