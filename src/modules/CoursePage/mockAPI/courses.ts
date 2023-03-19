import uxui from '../assets/courses/ux.ui.jpg';
import front from '../assets/courses/frontEnd.png';
import back from '../assets/courses/backEnd.png';
import ios from '../assets/courses/ios.png';
import pm from '../assets/courses/pm.webp';
import android from '../assets/courses/android.png';
import flutter from '../assets/courses/flutter.webp';
import olimpic from '../assets/courses/olimpic.png';

export interface ICourses {
  id: number;
  color: string;
  img: string;
  title: string;
  month: number;
  groups: number;
}

export const courses: ICourses[] = [
  { id: 0, color: '#C656A0', img: uxui, title: 'UX/UI', month: 3, groups: 2 },
  { id: 1, color: '#32B483', img: front, title: 'Front-End', month: 6, groups: 2 },
  { id: 2, color: '#756FB3', img: back, title: 'Back-End', month: 2, groups: 7 },
  { id: 3, color: '#A6CE39', img: ios, title: 'IOS', month: 4, groups: 1 },
  { id: 4, color: '#70BF44', img: pm, title: 'Prject management', month: 3, groups: 2 },
  { id: 5, color: '#A2238E', img: android, title: 'Android', month: 6, groups: 4 },
  { id: 6, color: '#00A64E', img: flutter, title: 'Flutter', month: 4, groups: 2 },
  { id: 7, color: '#A6CE39', img: olimpic, title: 'Олимп. Программирование', month: 3, groups: 2 },
];
