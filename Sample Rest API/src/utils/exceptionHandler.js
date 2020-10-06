exports['SINGLETON exceptionHandler'] = (exceptionHandler__default, HTTP_STATUS_CODES) => {

    return (res, exception, log) => {
        // here you can customize the exception handling

        // delegate to the default exception handler
        exceptionHandler__default(res, exception);
    };

};
