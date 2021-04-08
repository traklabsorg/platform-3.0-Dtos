import { DtoBase } from './submodules/platform-3.0-Common/common/DtoBase';

export class QuizQuestionReportDto extends DtoBase {
  userId?: number;
  groupName?: string;
  userName?: string;
  firstName?: string;
  lastName?: string;
  accountStatus?: string;
  channelName?: string;
  courseId?: number;
  courseTitle?: string;
  publicationId?: number;
  lessonId: number;
  lessonTitle?: string;
  quizQuestionData: string;
  optionsSelected: string;
  answerCorrectness: string;
  pointsAwarded: number;
  quizTimestamp: string;
}

export class QuizScoreReportDto extends DtoBase {
  userId?: number;
  groupName?: string;
  userName?: string;
  firstName?: string;
  lastName?: string;
  accountStatus?: string;
  channelName?: string;
  courseId?: number;
  courseTitle?: string;
  publicationId?: number;
  lessonId: number;
  lessonTitle?: string;
  totalNumberOfQuizQuestions: number;
  correctAnswers: number;
  timeOpened: string;
  timeCompleted: string;
}