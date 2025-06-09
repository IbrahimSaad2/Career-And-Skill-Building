import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {

  if (localStorage.getItem('token')!== null) {
    req = req.clone({
      setHeaders: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
    });
    console.log(localStorage.getItem('token'))
    console.log(req)
  }
  return next(req);
};
