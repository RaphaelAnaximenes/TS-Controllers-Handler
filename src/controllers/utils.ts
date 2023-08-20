interface HomePageData {
    message: string;
    currentDate: string;
  }
  
export function generateHomePageData(): HomePageData {
    return {
      message: 'TS server + Console endpoint debugger',
      currentDate: new Date().toLocaleDateString(),
    };
  }