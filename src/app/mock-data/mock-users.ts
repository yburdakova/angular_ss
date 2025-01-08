import { Profile } from "../models/profile.model";


export const MOCK_USERS: Profile[] = [
  {
    id: 1,
    username: 'johndoe',
    avatarUrl: 'assets/avatars/user1.jpg',
    subscribersAmount: 120,
    firstName: 'John',
    lastName: 'Doe',
    isActive: true,
    stack: ['Angular', 'TypeScript', 'RxJS'],
    city: 'New York',
    description: 'I am a frontend developer specializing in Angular and TypeScript.'
  },
  {
    id: 2,
    username: 'janesmith',
    avatarUrl: 'assets/avatars/user2.jpg',
    subscribersAmount: 85,
    firstName: 'Jane',
    lastName: 'Smith',
    isActive: true,
    stack: ['Node.js', 'Express', 'MongoDB'],
    city: 'San Francisco',
    description: 'A backend developer passionate about building scalable applications.'
  },
  {
    id: 3,
    username: 'alicejohnson',
    avatarUrl: 'assets/avatars/user3.jpg',
    subscribersAmount: 60,
    firstName: 'Alice',
    lastName: 'Johnson',
    isActive: false,
    stack: ['React', 'Redux', 'JavaScript'],
    city: 'Chicago',
    description: 'A JavaScript enthusiast who loves creating interactive user interfaces.'
  },
  {
    id: 4,
    username: 'bobbrown',
    avatarUrl: 'assets/avatars/user4.jpg',
    subscribersAmount: 150,
    firstName: 'Bob',
    lastName: 'Brown',
    isActive: true,
    stack: ['Flutter', 'Dart', 'React Native'],
    city: 'Austin',
    description: 'Building smooth mobile apps is my passion.'
  },
  {
    id: 5,
    username: 'chrisgreen',
    avatarUrl: 'assets/avatars/user1.jpg',
    subscribersAmount: 95,
    firstName: 'Chris',
    lastName: 'Green',
    isActive: true,
    stack: ['AWS', 'Docker', 'Kubernetes'],
    city: 'Seattle',
    description: 'DevOps engineer who loves automating infrastructure and deployments.'
  },
  {
    id: 6,
    username: 'dianawhite',
    avatarUrl: 'assets/avatars/user2.jpg',
    subscribersAmount: 45,
    firstName: 'Diana',
    lastName: 'White',
    isActive: false,
    stack: ['UI/UX Design', 'Figma', 'Adobe XD'],
    city: 'Portland',
    description: 'Designing beautiful, user-friendly interfaces is my specialty.'
  },
  {
    id: 7,
    username: 'ethanblack',
    avatarUrl: 'assets/avatars/user3.jpg',
    subscribersAmount: 110,
    firstName: 'Ethan',
    lastName: 'Black',
    isActive: true,
    stack: ['Python', 'Data Analysis', 'Pandas'],
    city: 'Boston',
    description: 'Data scientist turning raw data into actionable insights.'
  },
  {
    id: 8,
    username: 'fionablue',
    avatarUrl: 'assets/avatars/user4.jpg',
    subscribersAmount: 75,
    firstName: 'Fiona',
    lastName: 'Blue',
    isActive: false,
    stack: ['Manual Testing', 'Automation Testing', 'Selenium'],
    city: 'Los Angeles',
    description: 'Quality assurance engineer dedicated to ensuring software reliability.'
  },
  {
    id: 9,
    username: 'georgeking',
    avatarUrl: 'assets/avatars/user1.jpg',
    subscribersAmount: 50,
    firstName: 'George',
    lastName: 'King',
    isActive: true,
    stack: ['Cybersecurity', 'Ethical Hacking', 'Networking'],
    city: 'Houston',
    description: 'Passionate about protecting systems from threats.'
  },
  {
    id: 10,
    username: 'hannahgrey',
    avatarUrl: 'assets/avatars/user2.jpg',
    subscribersAmount: 200,
    firstName: 'Hannah',
    lastName: 'Grey',
    isActive: true,
    stack: ['Machine Learning', 'TensorFlow', 'Python'],
    city: 'Miami',
    description: 'Building intelligent systems that make data-driven decisions.'
  }
];
