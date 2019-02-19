export interface Trail {
  id: number;
  name: string;
  type: string;
  summary: string;
  difficulty: string;
  stars: number;
  starVotes: number;
  location: string;
  url: string;
  imgSqSmall: string;
  imgSmall: string;
  imgSmallMed: string;
  imgMedium: string;
  length: number;
  ascent: number;
  descent: number;
  high: number;
  low: number;
  longitude: number;
  latitude: number;
  conditionStatus: string;
  conditionDetails: string;
  conditionDate: string;
<<<<<<< HEAD
  
=======
  comment?: string;
  rating?: number;
>>>>>>> 720c77ef803c099e19ef2456849f63991862c091
}
