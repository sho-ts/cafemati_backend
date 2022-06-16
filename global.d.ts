declare namespace NodeJS {
  interface ProcessEnv {
    readonly DB_HOST: string;
    readonly DB_PORT: number;
    readonly DB_USERNAME: string;
    readonly DB_PASSWORD: string;
    readonly DB_DATABASE: string;
  }
}