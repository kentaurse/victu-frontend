export interface IUserData {
  id: string;
  uid: number;
  userFirstName: string;
  userLastName: string;
  userAvatar?: string;
}

export interface IProgramData {
  id: string;
  uid: string;
  userAge: string;
  userDietProgram: string;
  userExerciseLevel: string;
  userGender: "female" | "male";
  userHeight: string;
  userWeight: string;
}

export interface IExerciseData {
  id: string;
  subtitle: string;
  title: string;
  videoId: string;
}

export interface INotificationData {
  id: string;
  notificationFullBody: string;
  notificationShortBody: string;
  notificationTitle: string;
}

export interface IMealData {
  id: string;
  subtitle: string;
  title: string;
  videoId: string;
}
