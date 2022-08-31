import { PDF, University } from "src/constants/"

export const documents: PDF[] = [
  {
    id: 'document1',
    subcode: 'subcode',
    uploadDate: new Date('12-12-2000'),
    collegeId: 'uiet',
    uploadedBy: {
      id: 'uploaderid',
      name: 'uploader name'
    },
    fileName: 'fileName',
    views: 2,
    teacher: {
      id: 'teacher1',
      name: 'Teacher Name'
    },
    viewLink: 'view link',
    downloadLink: 'downloadLink',
    pdfFor: 'mid',
    year: 2020,
    sem: 5,
    rating: 4.5,
    comments: []
  },
  {
    id: 'document2',
    subcode: 'subcode2',
    uploadDate: new Date('12-12-2000'),
    collegeId: 'uiet',
    uploadedBy: {
      id: 'uploaderid',
      name: 'uploader name'
    },
    fileName: 'fileName',
    views: 2,
    teacher: {
      id: 'teacher1',
      name: 'Teacher Name'
    },
    viewLink: 'view link',
    downloadLink: 'downloadLink',
    pdfFor: 'mid',
    year: 2020,
    sem: 5,
    rating: 4.5,
    comments: []
  },
  {
    id: 'document3',
    subcode: 'subcode3',
    uploadDate: new Date('12-12-2000'),
    collegeId: 'uiet',
    uploadedBy: {
      id: 'uploaderid',
      name: 'uploader name'
    },
    fileName: 'fileName',
    views: 2,
    teacher: {
      id: 'teacher1',
      name: 'Teacher Name'
    },
    viewLink: 'view link',
    downloadLink: 'downloadLink',
    pdfFor: 'mid',
    year: 2020,
    sem: 5,
    rating: 4.5,
    comments: []
  },
  {
    id: 'document4',
    subcode: 'subcode',
    uploadDate: new Date('12-12-2000'),
    collegeId: 'uiet1',
    uploadedBy: {
      id: 'uploaderid',
      name: 'uploader name'
    },
    fileName: 'fileName',
    views: 2,
    teacher: {
      id: 'teacher1',
      name: 'Teacher Name'
    },
    viewLink: 'view link',
    downloadLink: 'downloadLink',
    pdfFor: 'mid',
    year: 2020,
    sem: 5,
    rating: 4.5,
    comments: []
  },
  {
    id: 'document5',
    subcode: 'subcode',
    uploadDate: new Date('12-12-2000'),
    collegeId: 'uiet1',
    uploadedBy: {
      id: 'uploaderid',
      name: 'uploader name'
    },
    fileName: 'fileName',
    views: 2,
    teacher: {
      id: 'teacher1',
      name: 'Teacher Name'
    },
    viewLink: 'view link',
    downloadLink: 'downloadLink',
    pdfFor: 'mid',
    year: 2020,
    sem: 5,
    rating: 4.5,
    comments: []
  },
  {
    id: 'document6',
    subcode: 'subcode',
    uploadDate: new Date('12-12-2000'),
    collegeId: 'uiet1',
    uploadedBy: {
      id: 'uploaderid',
      name: 'uploader name'
    },
    fileName: 'fileName',
    views: 2,
    teacher: {
      id: 'teacher1',
      name: 'Teacher Name'
    },
    viewLink: 'view link',
    downloadLink: 'downloadLink',
    pdfFor: 'mid',
    year: 2020,
    sem: 5,
    rating: 4.5,
    comments: []
  },
  {
    id: 'document7',
    subcode: 'subcode',
    uploadDate: new Date('12-12-2000'),
    collegeId: 'uiet2',
    uploadedBy: {
      id: 'uploaderid',
      name: 'uploader name'
    },
    fileName: 'fileName',
    views: 2,
    teacher: {
      id: 'teacher1',
      name: 'Teacher Name'
    },
    viewLink: 'view link',
    downloadLink: 'downloadLink',
    pdfFor: 'mid',
    year: 2020,
    sem: 5,
    rating: 4.5,
    comments: []
  },
  {
    id: 'document8',
    subcode: 'subcode1',
    uploadDate: new Date('12-12-2000'),
    collegeId: 'uiet1',
    uploadedBy: {
      id: 'uploaderid',
      name: 'uploader name'
    },
    fileName: 'fileName',
    views: 2,
    teacher: {
      id: 'teacher1',
      name: 'Teacher Name'
    },
    viewLink: 'view link',
    downloadLink: 'downloadLink',
    pdfFor: 'mid',
    year: 2020,
    sem: 5,
    rating: 4.5,
    comments: []
  },
]

export const universities: University[] = [
  {
    id: 'csjmu',
    name: 'Chhatrapati Shahu Ji Maharaj University',
    colleges: [
      {
        id: 'uiet',
        name: 'University Institute Of Engg & Technology'
      },
      {
        id: 'col2',
        name: 'Second College of CSJMU'
      }
    ]
  },
  {
    id: 'amity',
    name: 'Amity University',
    colleges: [
      {
        id: 'amitybtech',
        name: 'Amity btech'
      }
    ]
  }
]