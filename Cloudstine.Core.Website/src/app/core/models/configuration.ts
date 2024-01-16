import { environment } from 'environments/environment';

export class ConfigurationSettings {
  //BASE_API_URL
  public static get BASE_API_URL(): string {
    return environment.BASE_API_URL;
  }
  public static get Masters(): string {
    return '/Masters';
  }
  public static get Authentication(): string {
    return '/Authentication';
  }
  public static get Details(): string {
    return '/Details';
  }
  public static get Transactions(): string {
    return '/Transactions';
  }

  constructor() {}

    public static getUserId(): number {
        let userId = <number>localStorage["UserId"];
        return userId;
    }
}
