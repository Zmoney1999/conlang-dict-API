import { ReportHandler } from 'web-vitals';

// This function is used to report web vitals to analytics tools or other platforms
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  // If a function is provided to handle performance entries and it's a function, proceed
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import web-vitals library to access its performance metrics functions
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call each of the web-vitals functions and pass in the provided function to handle performance entries
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Export the reportWebVitals function
export default reportWebVitals;
