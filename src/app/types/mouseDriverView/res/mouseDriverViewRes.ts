export interface MouseDriverRes {
  img: string;
  englishName: string;
  chineseName: string;
  website: string;
  details: DetailsRes;
}

export interface DetailsRes {
  downloadDriver: DownLoadDataRes;
  webDriverData: WebDriverDataRes;
}

export interface DownLoadDataRes {
  downloadDriverUrl: string;
  downloadMouseList: string[];
  downloadKeyboardList: string[];
}

export interface WebDriverDataRes {
  webDriverUrl: string;
  webMouseList: string[];
  webKeyboardList: string[];
}
