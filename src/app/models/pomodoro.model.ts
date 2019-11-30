export class Pomodoro {
  // tslint:disable-next-line:variable-name
  _id?: string;
    checklist: string[];
    session: [{
      title: string,
      duration: string
    }];
    date: Date;
  }
