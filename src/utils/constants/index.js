import { AndreyImage, AnnaImage, BobImage, KatyImage, MigaleImage, NataliaImage } from "../../assets/images";

const ABOUT_US_DATA = [
  {
    key: 1,
    title: "News",
    description:
      "Stay up to date with all the events that happen in the student community",
  },

  {
    key: 2,
    title: "Planning",
    description: "Improve your efficiency by optimizing your task flow",
  },
  
  {
    key: 3,
    title: "Questions",
    description: "Leave a request and get answers to your questions",
  },

  {
    key: 4,
    title: "Networking",
    description:
      "Connect with other students, expand your horizons and find like-minded people",
  },

  {
    key: 5,
    title: "Events",
    description: "Join interesting events and enrich your experience",
  },
  
  {
    key: 6,
    title: "Opportunities",
    description:
      "Look for vacancies and other opportunities that match your interests and career ambitions",
  },
];

const QUESTIONS = [
  {
    question: "What programs are offered at your university?",
    answer:
      "Our university offers a wide range of programs across various disciplines including arts, sciences, engineering, business, and more. You can explore our program offerings on our website or contact our admissions office for detailed information.",
  },

  {
    question: "How can I apply for admission to your university?",
    answer:
      "To apply for admission, you can visit our university website and navigate to the admissions section. There, you will find detailed instructions on the application process, including the required documents and deadlines. If you have any specific questions or need assistance, feel free to reach out to our admissions team.",
  },

  {
    question: "What scholarships or financial aid options are available?",
    answer:
      "Our university offers various scholarships and financial aid options to support students in their academic journey. These may include merit-based scholarships, need-based grants, work-study programs, and more. We encourage you to explore our financial aid resources on our website or contact our financial aid office for personalized assistance.",
  },

  {
    question: "Can international students apply to your university?",
    answer:
      "Yes, we welcome applications from international students. Our university values diversity and strives to create an inclusive environment for all students. International applicants can find specific admission requirements and guidelines on our website or reach out to our international admissions office for support.",
  },

  {
    question: "How can I schedule a campus tour or visit?",
    answer:
      "You can schedule a campus tour or visit by contacting our admissions office directly. We offer guided tours led by knowledgeable staff members who can provide insights into campus life, academic programs, and facilities. Visiting our campus is a great way to experience our vibrant community firsthand.",
  },
];

const FEEDBACKS = [
  {
    id: 1,
    fullName: "Natalia Lobodyanskaya",
    text: "The learning process is organized as efficiently and conveniently as possible. The timing and form of training makes the course more accessible to everyone. This allows you to work out at your own pace without any unnecessary stress or time pressure.",
    image: NataliaImage,
    fullNameColor: "white",
    textColor: "white",
    background: "rgb(0, 0, 0)",
  },

  {
    id: 2,
    fullName: "Natalia Lobodyanskaya",
    text: "The learning process is organized as efficiently and conveniently as possible. The timing and form of training makes the course more accessible to everyone. This allows you to work out at your own pace without any unnecessary stress or time pressure.",
    image: NataliaImage,
    fullNameColor: "rgb(0, 0, 0)",
    textColor: "rgb(0, 0, 0)",
    background: "rgb(169, 167, 177)",
  },

  {
    id: 3,
    fullName: "Natalia Lobodyanskaya",
    text: "The learning process is organized as efficiently and conveniently as possible. The timing and form of training makes the course more accessible to everyone. This allows you to work out at your own pace without any unnecessary stress or time pressure.",
    image: NataliaImage,
    fullNameColor: "white",
    textColor: "white",
    background: "rgb(0, 0, 0)",
  },

  {
    id: 4,
    fullName: "Natalia Lobodyanskaya",
    text: "The learning process is organized as efficiently and conveniently as possible. The timing and form of training makes the course more accessible to everyone. This allows you to work out at your own pace without any unnecessary stress or time pressure.",
    image: NataliaImage,
    fullNameColor: "rgb(0, 0, 0)",
    textColor: "rgb(0, 0, 0)",
    background: "rgb(169, 167, 177)",
  },

  {
    id: 5,
    fullName: "Natalia Lobodyanskaya",
    text: "The learning process is organized as efficiently and conveniently as possible. The timing and form of training makes the course more accessible to everyone. This allows you to work out at your own pace without any unnecessary stress or time pressure.",
    image: NataliaImage,
    fullNameColor: "white",
    textColor: "white",
    background: "rgb(0, 0, 0)",
  },

  {
    id: 6,
    fullName: "Natalia Lobodyanskaya",
    text: "The learning process is organized as efficiently and conveniently as possible. The timing and form of training makes the course more accessible to everyone. This allows you to work out at your own pace without any unnecessary stress or time pressure.",
    image: NataliaImage,
    fullNameColor: "rgb(0, 0, 0)",
    textColor: "rgb(0, 0, 0)",
    background: "rgb(169, 167, 177)",
  },
];

const NETWORKING = [
  {
    id: 1,
    fullName: "Bob",
    status: "Студент(-a) Student Space",
    image: BobImage,
  },

  {
    id: 2,
    fullName: "Migale",
    status: "Студент(-a) Student Space",
    image: MigaleImage,
  },

  {
    id: 3,
    fullName: "Anna",
    status: "Студент(-a) Student Space",
    image: AnnaImage,
  },

  {
    id: 4,
    fullName: "Katy",
    status: "Студент(-a) Student Space",
    image: KatyImage,
  },

  {
    id: 5,
    fullName: "Andrey",
    status: "Студент(-a) Student Space",
    image: AndreyImage,
  },
];

const PROFILE_DATA =[
  {
    id: 1,
    image: BobImage,
    followers:1026,
    following:56,
    firstName: "Bob",
    lastName: "",
    dateOfBirth: '21.01.2001',
    university: "Student Space",
    email: 'bob@gmail.com',
    description:'Hello my friends:)'
  },

  {
    id: 2,
    image: MigaleImage,
    followers:1026,
    following:56,
    firstName: "Miguel",
    lastName: "",
    dateOfBirth: '21.01.2001',
    university: "Student Space",
    email: 'miguel@gmail.com',
    description:'Hello my friends:)'
  },

  {
    id: 3,
    image: AnnaImage,
    followers:1026,
    following:56,
    firstName: "Anna",
    lastName: "",
    dateOfBirth: '21.01.2001',
    university: "Student Space",
    email: 'anna@gmail.com',
    description:'Hello my friends:)'
  },

  {
    id: 4,
    image: KatyImage,
    followers:1026,
    following:56,
    firstName: "Katy",
    lastName: "",
    dateOfBirth: '21.01.2001',
    university: "Student Space",
    email: 'katy@gmail.com',
    description:'Hello my friends:)'
  },

  {
    id: 5,
    image: AndreyImage,
    followers:1026,
    following:56,
    firstName: "Andrey",
    lastName: "",
    dateOfBirth: '21.01.2001',
    university: "Student Space",
    email: 'andrey@gmail.com',
    description:'Hello my friends:)'
  },
];

export { ABOUT_US_DATA, QUESTIONS, FEEDBACKS, NETWORKING, PROFILE_DATA };
